import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAwx-OWmx03ubkG0tBlxLkSsoHnS2eDbMw",
  authDomain: "e-commerce-mm-eafe9.firebaseapp.com",
  projectId: "e-commerce-mm-eafe9",
  storageBucket: "e-commerce-mm-eafe9.appspot.com",
  messagingSenderId: "364863618959",
  appId: "1:364863618959:web:ed98c49d40d1929e8895fa",
  measurementId: "G-4PBS76NWG4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;
