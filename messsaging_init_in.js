import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBb2hDhhMnkLoSNQva-ir_FqJ3JPyjw3Hk",
  authDomain: "academprojex.firebaseapp.com",
  projectId: "academprojex",
  storageBucket: "academprojex.appspot.com",
  messagingSenderId: "88571607470",
  appId: "1:88571607470:web:e947cc29b3fee73715b03f",
  measurementId: "G-5GNB921DQS",
};

const app = initializeApp(firebaseConfig);

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BIB7rdk1yUCifFxK7PdTOGKe37fcoM3_k3KeRtC_ZzOf6nWTbQPJ3mdubyLvKTs6FA6R4bL3pl7fYakXg_rv8H0",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
