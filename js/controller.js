const controller = {};

let db = firebase.firestore();

controller.register = async function(registerInfo) {
  let email = registerInfo.email;
  let password = registerInfo.password;
  let displayName = registerInfo.firstname + " " + registerInfo.lastname;
  let photoUrl =
    "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/88161152_239071737253921_1030333598856642560_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=znb17txxjFwAX_RYjN3&_nc_ht=scontent.fhan2-4.fna&oh=a80997ec560e97b61bcac7ed229db099&oe=5EF23270";
  view.setText("register-success", "");
  view.setText("register-error", "");
  view.disable("register-btn");

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.auth().currentUser.updateProfile({
      displayName: displayName,
      photoURL: photoUrl
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
controller.postDbGetInDescFood = async function() {
  let nameInput = "phở gà";
  let nameInputSplit = nameInput.split(" ");
  let city = "hà nội";

  let result = await db
    .collection("post")
    // .where("city", "==", city)
    // .where("type", "==", "")
    // .where("arrName", "array-contains-any", nameInputSplit)

    .orderBy("order", "desc")
    .get();
  console.log(result.docs);
  let detailByOrderDesc = await transformDocs(result.docs);
  model.post = detailByOrderDesc;
  console.log(model);
  // let detail = transformDocs(result.docs);
  console.log(detailByOrderDesc);
};
controller.postDetail = async function(id) {
  let postDetail = await firebase
    .firestore()
    .collection("post")
    .doc(id)
    .get();
  transformDoc(postDetail);
  model.detail = transformDoc(postDetail);
  // console.log(model.detail);
};
function transformDocs(docs) {
  // let datas = []
  // for(let doc of docs) {
  //   let data = doc.data()
  //   data.id = doc.id
  //   datas.push(data)
  // }
  // return datas
  //   console.log(docs);
  return docs.map(transformDoc);
}

function transformDoc(doc) {
  let data = doc.data();
  data.id = doc.id;
  // data.arr = data.arrName;
  // console.log(data);
  return data;
}
