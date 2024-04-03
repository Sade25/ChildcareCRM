// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "childcare-crm.firebaseapp.com",
  projectId: "childcare-crm",
  storageBucket: "childcare-crm.appspot.com",
  messagingSenderId: "299710421816",
  appId: "1:299710421816:web:f0ba2eeafb686ef01dbfcd",
  measurementId: "G-9Y8RQZ0RE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const saveChildInfoToFirebase = async (data, collectionName) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log(`Document written in ${collectionName} with ID: `, docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};


export { db };

