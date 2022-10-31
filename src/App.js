import React,{useState,useEffect} from 'react';
import { requestPermission } from './firebase';
import { getDeviceToken,isDeviceTokenRegistered } from './store/deviceToken';
import dayjs from 'dayjs';

function App() {
  const [deviceToken,setDeviceToken] = useState("")
  const [locationStore,setLocationStore]  = useState([])

   const allowPushNotification = () =>{
    const checkDeviceTokenRegisted = isDeviceTokenRegistered("deviceToken");
    console.log("checkDeviceTokenRegisted" , checkDeviceTokenRegisted);
    if(checkDeviceTokenRegisted){
      // device token aleady Exists
      const deviceTokenFromLocalStore = JSON.parse(getDeviceToken("deviceToken"));
      const tokenExpireDate = deviceTokenFromLocalStore.expiresIn;
      console.log("tokenExpire Date ::: ", tokenExpireDate);
      if(!dayjs().isSame(dayjs(tokenExpireDate),'date') ){
        setDeviceToken(deviceTokenFromLocalStore.deviceToken);
      }
      else{
        //create New device Token 
        requestPermission();
      }
    }
    else{
      console.log("request Permission :: ");
      requestPermission();
    }


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
          setLocationStore((oldPos) => [...oldPos,position]);
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
