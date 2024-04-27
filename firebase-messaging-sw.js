importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

const defaultConfig = {
  // apiKey: "AIzaSyBb2hDhhMnkLoSNQva-ir_FqJ3JPyjw3Hk",
  // projectId: "academprojex",
  // messagingSenderId: "88571607470",
  // appId: "1:88571607470:web:e947cc29b3fee73715b03f",
  apiKey: "AIzaSyBb2hDhhMnkLoSNQva-ir_FqJ3JPyjw3Hk",
  authDomain: "academprojex.firebaseapp.com",
  projectId: "academprojex",
  storageBucket: "academprojex.appspot.com",
  messagingSenderId: "88571607470",
  appId: "1:88571607470:web:e947cc29b3fee73715b03f",
  measurementId: "G-5GNB921DQS",
};

firebase.initializeApp(defaultConfig);

const messaging = getMessaging();

onBackgroundMessage(messaging, (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
