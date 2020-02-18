const controller = {};

controller.register = async function(registerInfo) {
  let email = registerInfo.email;
  let password = registerInfo.password;
  let displayName = registerInfo.lastname + " " + registerInfo.firstname;
  view.setText("register-success", "");
  view.setText("register-error", "");
  view.disable("register-btn");

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.auth().currentUser.updateProfile({
      displayName: displayName
    });
    await firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(function() {
        // Email sent.
      })
      .catch(function(error) {
        console.log(error);
      });
    view.setText(
      "register-success",
      "An verification email has been sended to your email address!"
    );
  } catch (err) {
    view.setText("register-error", err.message);
  }

  view.enable("register-btn");
};

controller.logIn = async function(logInInfo) {
  let email = logInInfo.email;
  let password = logInInfo.password;
  view.disable("log-in-btn");

  try {
    let result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (!result.user || !result.user.emailVerified) {
      throw new Error("User must verify email!");
    }
    view.showComponents("home");
    // alert("haha");
  } catch (err) {
    view.setText("log-in-error", err.message);
  }
  view.enable("log-in-btn");
};
