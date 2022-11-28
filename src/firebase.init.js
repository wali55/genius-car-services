// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEm7pcziNRzxueO_wewZM5mooEajKyBNY",
  authDomain: "genius-car-services-56d6b.firebaseapp.com",
  projectId: "genius-car-services-56d6b",
  storageBucket: "genius-car-services-56d6b.appspot.com",
  messagingSenderId: "165309402757",
  appId: "1:165309402757:web:9f7a2dd7ae872a3d4763ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;