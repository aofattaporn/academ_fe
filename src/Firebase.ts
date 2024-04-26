import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  MessagePayload,
  getMessaging,
  getToken,
  onMessage,
} from "firebase/messaging";

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
const auth = getAuth(app);
export const messaging = getMessaging(app);

export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BIB7rdk1yUCifFxK7PdTOGKe37fcoM3_k3KeRtC_ZzOf6nWTbQPJ3mdubyLvKTs6FA6R4bL3pl7fYakXg_rv8H0",
      });
      console.log(token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  } catch (error) {
    console.error("Error requesting permission:", error);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload: MessagePayload) => {
      console.log("Message received. Payload:", payload as MessagePayload);
      resolve(payload);
    });
  });

export { auth };
