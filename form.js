var firebaseConfig = {
  apiKey: "AIzaSyBHdGLt_iap2m4PUonnfgb0Jsrp2UumbTw",
  authDomain: "e-library-7d7ef.firebaseapp.com",
  projectId: "e-library-7d7ef",
  storageBucket: "e-library-7d7ef.appspot.com",
  messagingSenderId: "965856071180",
  appId: "1:965856071180:web:00a262ebffbe405354a829",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));
  alert("Signed Up");
}

/*function signIn() {
  //var emailid = document.getElementById("emailid");
  //var passwords = document.getElementById("passwords");

  //emailid = emailid.value;
  //passwords = passwords.value;

  const promise = auth.signInWithEmailAndPassword(emailid, passwords);
  promise.catch((e) => alert(e.message));
  alert("Signed In " + email.value);
}*.

/*function signOut() {
  auth.signOut();
  alert("Signed Out");
}*/

auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    alert("Active User " + email);
    //is signed in
  } else {
    alert("No Active User");
    //no user is signed in
  }
});

// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     // User is signed in.

//     document.getElementById("user_div").style.display = "block";
//     document.getElementById("login_div").style.display = "none";

//     var user = firebase.auth().currentUser;

//     if (user != null) {
//       var email_id = user.email;
//       document.getElementById("user_para").innerHTML =
//         "Welcome User : " + email_id;
//     }
//   } else {
//     // No user is signed in.

//     document.getElementById("user_div").style.display = "none";
//     document.getElementById("login_div").style.display = "block";
//   }
// });

// function login() {
//   var userEmail = document.getElementById("email").value;
//   var userPass = document.getElementById("password").value;

//   firebase
//     .auth()
//     .signInWithEmailAndPassword(userEmail, userPass)
//     .catch(function (error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;

//       window.alert("Error : " + errorMessage);

//       // ...
//     });
// }

/*function logout(){
  firebase.auth().signOut();
}*/
