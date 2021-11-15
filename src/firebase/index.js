import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAJkjipB_PmxNpYhyXFXOF_xES5wtUAFKc",
  authDomain: "ringo-1f222.firebaseapp.com",
  projectId: "ringo-1f222",
  storageBucket: "ringo-1f222.appspot.com",
  messagingSenderId: "1050737642166",
  appId: "1:1050737642166:web:68eab89e86c5eb75513417"
};

const app = initializeApp(firebaseConfig);
export const getFirebase = () => app;

export { getFirestore };