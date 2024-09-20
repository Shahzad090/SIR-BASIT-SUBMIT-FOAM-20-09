import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
  
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

  let out = document.getElementById('out')

        let text = document.getElementById('para');

        text.innerText = `Hey 👋 Welcome to Our Website `;

  out.addEventListener('click' , function(){

    const auth = getAuth();

    signOut(auth).then(() => {


       window.location.href = 'login.html';

    }).catch((error) => {

        Swal.fire("Failed to SignOut");
        
    });

})