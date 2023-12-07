import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyBj1nXRn7z1wk6YB7KTygX8xNXcKt8YRUY",
    authDomain: "tickets-9424c.firebaseapp.com",
    projectId: "tickets-9424c",
    storageBucket: "tickets-9424c.appspot.com",
    messagingSenderId: "618604463379",
    appId: "1:618604463379:web:1d190c23934c3d482846e6",
    measurementId: "G-Z4F4WEN5VR"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };