// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// console.log(import.meta.env.API_KEY);
// Initialize Firebase





export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);







// export const auth = getAuth(app);
// export const storage = getStorage(app);
// export const db = getFirestore(app);
// export default app;
// export const auth = app.auth;
// export default app


