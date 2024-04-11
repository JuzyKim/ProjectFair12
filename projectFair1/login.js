const loginBtn = document.getElementById("loginBtn");
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDenJqYXH7VSm8vEaNo8RThGyScYhirSl0",
  authDomain: "juzy-d0d77.firebaseapp.com",
  databaseURL: "https://juzy-d0d77-default-rtdb.firebaseio.com",
  projectId: "juzy-d0d77",
  storageBucket: "juzy-d0d77.appspot.com",
  messagingSenderId: "202307515561",
  appId: "1:202307515561:web:3f9aa09628c67ea7d9a5b8",
  measurementId: "G-TC91X2KWY8",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email2").value;
  const password = document.getElementById("password2").value;

  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is not correct!!");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      const user_data = {
        last_login: Date.now(),
      };

      const dbRef = ref(database, "users/" + user.uid);
      update(dbRef, user_data)
        .then(() => {
          alert("User Logged In!!");
        })
        .catch((error) => {
          console.error("Error updating user data:", error);
          alert("Error updating user data.");
        });
    })
    .catch(function (error) {
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
});

function validate_email(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/; // Properly declare the variable
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
}

function validate_password(password) {
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
