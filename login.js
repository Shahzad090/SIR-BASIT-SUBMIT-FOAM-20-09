import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

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

let passlogin = document.getElementById('userPassLogin');

      let emaillogin = document.getElementById('userEmailLogin');

      let btnn = document.getElementById('btnn');

      btnn.addEventListener('click', function () {


          const auth = getAuth();

          signInWithEmailAndPassword(auth, emaillogin.value, passlogin.value)

              .then((userCredential) => {
                  const user = userCredential.user;

                  
          Swal.fire("Login successful! Welcome back.");

                  window.location.href = 'dashboard.html'

                  // ...
              })
              .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;

                  Swal.fire("Login failed. Please check your credentials and try again.");

              });



         
      });