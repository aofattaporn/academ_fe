import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging, onMessage, MessagePayload } from "firebase/messaging";

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
  // try {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    return "ea_GlmGV0GyawwlSd1mp-m:APA91bFR1ZEQZcCWhlLZ5H9DmECnJ_Oz-grgmjzwgsA2dqdpPVN5jhUqwMtEHcmpeON2UdMY_4ruQ2Z3H_OFdvI_bMtKMBYFRY-QFiXSfGfpQc9Blze66VvfoArQDSf4IJooSQkG42jO";
  }

  return "ea_GlmGV0GyawwlSd1mp-m:APA91bFR1ZEQZcCWhlLZ5H9DmECnJ_Oz-grgmjzwgsA2dqdpPVN5jhUqwMtEHcmpeON2UdMY_4ruQ2Z3H_OFdvI_bMtKMBYFRY-QFiXSfGfpQc9Blze66VvfoArQDSf4IJooSQkG42jO";

  //   if (permission === "granted") {
  //     console.log("Notification permission granted.");

  //     const token = await getToken(messaging, {
  //       vapidKey:
  //         "BIB7rdk1yUCifFxK7PdTOGKe37fcoM3_k3KeRtC_ZzOf6nWTbQPJ3mdubyLvKTs6FA6R4bL3pl7fYakXg_rv8H0",
  //     });
  //     console.log("FCM Token:", token);
  //     return token;
  //   } else if (permission === "denied") {
  //     console.log("Notification permission denied.");
  //     return "ea_GlmGV0GyawwlSd1mp-m:APA91bFR1ZEQZcCWhlLZ5H9DmECnJ_Oz-grgmjzwgsA2dqdpPVN5jhUqwMtEHcmpeON2UdMY_4ruQ2Z3H_OFdvI_bMtKMBYFRY-QFiXSfGfpQc9Blze66VvfoArQDSf4IJooSQkG42jO";
  //   }
  // } catch (error) {
  //   console.error("Error requesting notification permission:", error);
  //   console.log(
  //     "FCM Token:",
  //     "ea_GlmGV0GyawwlSd1mp-m:APA91bFR1ZEQZcCWhlLZ5H9DmECnJ_Oz-grgmjzwgsA2dqdpPVN5jhUqwMtEHcmpeON2UdMY_4ruQ2Z3H_OFdvI_bMtKMBYFRY-QFiXSfGfpQc9Blze66VvfoArQDSf4IJooSQkG42jO"
  //   );
  //   return "ea_GlmGV0GyawwlSd1mp-m:APA91bFR1ZEQZcCWhlLZ5H9DmECnJ_Oz-grgmjzwgsA2dqdpPVN5jhUqwMtEHcmpeON2UdMY_4ruQ2Z3H_OFdvI_bMtKMBYFRY-QFiXSfGfpQc9Blze66VvfoArQDSf4IJooSQkG42jO";
  // }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload: MessagePayload) => {
      console.log("Foreground message received:", payload);
      resolve(payload);
    });
  });

export { auth };
