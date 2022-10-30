// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getMessaging , getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { setDeviceToken } from './store/deviceToken';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOooVxp3QF-4XtQIJw1Y6i-4Fp2gRokcc",
  authDomain: "totalqsr-pwa-poc.firebaseapp.com",
  projectId: "totalqsr-pwa-poc",
  storageBucket: "totalqsr-pwa-poc.appspot.com",
  messagingSenderId: "925807157827",
  appId: "1:925807157827:web:f917db4a5bd48af40caaf6",
  measurementId: "G-0YMTH62CG5"
};


export function requestPermission() {
  console.log('Requesting permission...');
  return Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      const vapiKey = {vapiKey:'BNIsON_vtEnpFe8toAQewte8mjCLIInA59EXujvQnRHTACS8l5eYrLdIx9V1Tu1iRZdMDRmdtCLRWkIREhK6bSk'};
     getToken(messaging, vapiKey).then((token)=>{
      if(token){
        console.log("FCM Tokens :: ",token);
        setDeviceToken(token);
        return true;
      }
      else{
        console.log("you don't have notification permission");
      }
      }).catch((err:any)=>{
        console.log("err :: ", err);
      })
    }
    else{
      setDeviceToken("");
      console.log("you don't have permission ");
    }
    return false;
  })
}

//requestPermission();

//export default messaging;

