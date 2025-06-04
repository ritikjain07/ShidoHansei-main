
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPWOfvDsljv1axKWoEe3M63sj70YMFjec",
  authDomain: "shidohansei.firebaseapp.com",
  projectId: "shidohansei",
  storageBucket: "shidohansei.appspot.com", // FIXED: Corrected storage bucket URL
  messagingSenderId: "476186894718",
  appId: "1:476186894718:web:007201bf48bd9f13afd32f",
  measurementId: "G-HEW1G2SQ5S"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)