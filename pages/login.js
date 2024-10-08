import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyANgtcbgJuF0sPEdlBhLi8yltx6nFcJaXw",
    authDomain: "fir-form-5e9ba.firebaseapp.com",
    projectId: "fir-form-5e9ba",
    storageBucket: "fir-form-5e9ba.appspot.com",
    messagingSenderId: "171593386514",
    appId: "1:171593386514:web:038733ffa3eb553885e6cb",
    measurementId: "G-YHL2NXXTSW"
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


  const login_email = document.getElementById("login_email");
  const login_password = document.getElementById("login_password");
  const login_btn = document.getElementById("login_btn");
  login_btn.addEventListener("click", login );


  function login () {
    signInWithEmailAndPassword(auth, login_email.value, login_password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "interface.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
    
  }
