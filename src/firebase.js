import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: "AIzaSyC4tQmNbTk8Vq8xZf9IKBV5mzByY5vKk9k",
  authDomain: "instagram-assignment-project.firebaseapp.com",
  databaseURL:
    "https://instagram-assignment-project-default-rtdb.firebaseio.com",
  projectId: "instagram-assignment-project",
  storageBucket: "instagram-assignment-project.appspot.com",
  messagingSenderId: "453660366340",
  appId: "1:453660366340:web:794b1b0e59583841d78751",
});

const db = getFirestore(app);
const auth = getAuth();
//const storage = firebase.storage();

export { db , auth};
