import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, 
         createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

  const firebaseConfig = {
  apiKey: "AIzaSyANgtcbgJuF0sPEdlBhLi8yltx6nFcJaXw",
  authDomain: "signup-form-using-firebase.firebaseapp.com",
  projectId: "signup-form-using-firebase",
  storageBucket: "signup-form-using-firebase.appspot.com",
  messagingSenderId: "251898657374",
  appId: "1:251898657374:web:f885c20ef29b54eb2792cf",
  measurementId: "G-NQBTDTV4NH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  let name1 = document.getElementById('name')

let email = document.querySelector('#email');

let password = document.querySelector('#password')

let btn = document.querySelector('#btn');


btn.addEventListener('click',  function () {

  createUserWithEmailAndPassword(auth, email.value, password.value)

      .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

      Swal.fire("Form submitted successfully! Thank you.");

          setTimeout(() => {
              
              window.location.href = 'login.html';

          }, 500);

      })

      .catch((error) => {

          const errorCode = error.code;
          const errorMessage = error.message;

          Swal.fire("Form submission failed. Please try again.");

      });

})