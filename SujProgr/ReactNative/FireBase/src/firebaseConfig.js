import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5bjwhMasriUoWKryY73HOHQpKVCeRu-8",
  authDomain: "devcurso-86763.firebaseapp.com",
  projectId: "devcurso-86763",
  storageBucket: "devcurso-86763.appspot.com",
  messagingSenderId: "756212084835",
  appId: "1:756212084835:web:3760184db3ff4ade1a8856",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
