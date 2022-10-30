// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyDOooVxp3QF-4XtQIJw1Y6i-4Fp2gRokcc",
  authDomain: "totalqsr-pwa-poc.firebaseapp.com",
  projectId: "totalqsr-pwa-poc",
  storageBucket: "totalqsr-pwa-poc.appspot.com",
  messagingSenderId: "925807157827",
  appId: "1:925807157827:web:f917db4a5bd48af40caaf6",
  measurementId: "G-0YMTH62CG5"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});