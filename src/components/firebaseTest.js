import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  // Your Firebase configuration here
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const testData = {
  message: 'Hello, Firebase!'
};

const writeDataToFirebase = async () => {
  try {
    const databaseRef = ref(db, 'testData');
    await set(databaseRef, testData);
    console.log('Data written to Firebase successfully!');
  } catch (error) {
    console.error('Error writing data to Firebase:', error);
  }
};

writeDataToFirebase();
