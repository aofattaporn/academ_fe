// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBb2hDhhMnkLoSNQva-ir_FqJ3JPyjw3Hk",
  authDomain: "academprojex.firebaseapp.com",
  projectId: "academprojex",
  storageBucket: "academprojex.appspot.com",
  messagingSenderId: "88571607470",
  appId: "1:88571607470:web:e947cc29b3fee73715b03f",
  measurementId: "G-5GNB921DQS",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
