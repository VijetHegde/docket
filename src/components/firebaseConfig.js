// firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc ,getDocs} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDntX3WeD7HLQWzWHj2UQyyKkxXC8KjMWs",
    authDomain: "dockettesting-4b4f5.firebaseapp.com",
    projectId: "dockettesting-4b4f5",
    storageBucket: "dockettesting-4b4f5.appspot.com",
    messagingSenderId: "934083963147",
    appId: "1:934083963147:web:8c5c690c801d72ddebda0e",
    measurementId: "G-8R8PRX5D4Z"
  };
const app = initializeApp(firebaseConfig);

const addDataToFirebase = async ( data) => {
    try {
      // Get a reference to the Firestore database
      const db = getFirestore(app);
  
      // Get a reference to the specified collection
      const dataCollection = collection(db, "testingData");
  
      // Add data to the collection
      await addDoc(dataCollection, data);
  
      console.log('Data added to Firebase collection successfully!');
    } catch (error) {
      console.error('Error adding data to Firebase:', error);
    }
  };
  const getDataFromFirebase = async () => {
    try {
      // Get a reference to the Firestore database
      const db = getFirestore(app);
  
      // Get a reference to the specified collection
      const dataCollection = collection(db, "testingData");
  
      // Fetch all documents from the collection
      const querySnapshot = await getDocs(dataCollection);
  
      // Extract data from documents and return it as an array of objects
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data()
        });
      });
  
      // Return the data
      return data;
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
      throw error; // Re-throw the error to handle it in the component calling this function
    }
  };
  
  export { addDataToFirebase, getDataFromFirebase };
