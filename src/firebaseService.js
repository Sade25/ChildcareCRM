// src/firebaseService.js

import { db } from './firebase'; // Make sure to create this file with your Firebase app configuration
import { collection, addDoc } from 'firebase/firestore';

// Function to add a new child's information to Firestore
export const addNewChild = async (childData) => {
  try {
    const docRef = await addDoc(collection(db, "child_info"), childData);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id; // Return the document ID for further use
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error(e.message); // Propagate the error to be handled by the caller
  }
};

// You can add more functions here to handle different Firestore operations.
// For example: updating a child's information, deleting a child's document, etc.
