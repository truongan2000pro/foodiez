window.onload = init;
function init() {
  view.showComponents("loading");

  firebase.auth().onAuthStateChanged(function(user) {
    if (view.currentScreen == "register" || view.currentScreen == "logIn") {
      return;
    }
    if (user && user.emaiVerified) {
      view.showComponents("home");
    } else {
      view.showComponents("home");
    }
  });
}
