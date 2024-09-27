import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyANgtcbgJuF0sPEdlBhLi8yltx6nFcJaXw",
    authDomain: "sir-basir-hacathone.firebaseapp.com",
    projectId: "sir-basir-hacathone",
    storageBucket: "sir-basir-hacathone.appspot.com",
    messagingSenderId: "498803428760",
    appId: "1:498803428760:web:1c6aa33ebf0f1060e9afed",
    measurementId: "G-G94JDYPGXF"
  };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app);



onAuthStateChanged(auth, (user) => {
 if (user) {
   const uid = user.uid;
   
 } else {
   
 }
});


  const signup_email = document.getElementById("signUp_email");
  const signup_password = document.getElementById("signUp_password");
  const signup_btn = document.getElementById("signup_btn");
  signup_btn.addEventListener("click", createUserAccount);



function createUserAccount() {
    console.log("email=>", signup_email.value);
    console.log("password=>", signup_password.value);
    createUserWithEmailAndPassword(auth,signup_email.value,signup_password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user=>", user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}