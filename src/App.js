import React,{useState,useEffect} from 'react';
import { requestPermission } from './firebase';

function App() {
  const allowPushNotification = (event:any) =>{
    requestPermission().then((data)=>{
      console.log("texmp data :: ", data);
      if(data){
        console.log("data :: ",data);
      }
    })
  }

  return (
    <div className="App">
       <button className="notification" onClick = {allowPushNotification}>
        Allow Push Notification
      </button>
    </div>
  );
}

export default App;
