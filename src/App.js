import React,{useState,useEffect} from 'react';
import { requestPermission } from './firebase';
import { getDeviceToken } from './store/deviceToken';

function App() {
  const [deviceToken,setDeviceToken] = useState("")
  const [locationStore,setLocationStore]  = useState([])

   const allowPushNotification = () =>{
    requestPermission().then((data)=>{
      console.log("texmp data :: ", data);
      if(data){
        console.log("data :: ",data);
      }
    })

    const deviceToken = getDeviceToken("deviceToken");
    setDeviceToken(
      deviceToken !== "" ? deviceToken : "Please enabled your Notification"
    ) 
  }

  const getCurrentLocation = () =>{
      console.log("navigator.geolocation" , navigator.geolocation);
      if(navigator.geolocation){
        navigator.geolocation.watchPosition((position)=>{
          console.log("Current Moving position :: ",position);
          setLocationStore((oldArray) => [...oldArray,position]);
          console.log("location Store :: ", locationStore);

        });
    }
  }

  useEffect(()=>{
    allowPushNotification();
    getCurrentLocation()
  })

  return (
    <div className="App">
       {/* <button className="notification" onClick = {allowPushNotification}>
        Allow Push Notification
      </button> */}
      <p>Your Device Token : {deviceToken}</p>
      {
        locationStore.length > 0 ?
        locationStore.map((value,index) => {
          return (<p key = {index}>{"latitude: "+ value.coords.latitude +"  longitude: " + value.coords.longitude} </p>);
        })
        :
        (<></>)
      }

    </div>
  );
}

export default App;
