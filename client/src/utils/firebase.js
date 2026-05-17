
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-b26d1.firebaseapp.com",
  projectId: "examnotesai-b26d1",
  storageBucket: "examnotesai-b26d1.firebasestorage.app",
  messagingSenderId: "490138259527",
  appId: "1:490138259527:web:c9cbc37b004c5192fa2162",
  measurementId: "G-WWBMM18SS2"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}