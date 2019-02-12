
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
    document.getElementById("userdiv").style.display = "block";
    document.getElementbyId("logindiv").style.display = "none";

  } else {
    // User is signed out.
    // ...
    document.getElementbyId("userdiv").style.display = "none";
    document.getElementbyId("logindiv").style.display = "block";
  }
});


function login() {
  var userEmail = document.getElementbyId("email-field").value;
  var userpass = document.getElementbyId("pass-field").value;

}
