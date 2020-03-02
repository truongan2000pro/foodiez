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
  console.log(model.detail);
};

controller.upload = async function(file) {
  let fileName = file.name;
  let filePatch = `upload/${fileName}`;
  let fileRef = firebase
    .storage()
    .ref()
    .child(filePatch);
  await fileRef.put(file);
  let fileLink = getFileUrl(fileRef);
  return fileLink;
};

function getFileUrl(fileRef) {
  return `https://firebasestorage.googleapis.com/v0/b/${
    fileRef.bucket
  }/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`;
}
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
controller.orderCountGetDb = async function() {
  let orderCountGet = await db
    .collection("orderCount")
    .doc("orderCount")
    .get();
  let orderCountDetail = orderCountGet.data().order;
  // console.log(orderCountDetail);
};
controller.orderCountUpdate = async function() {
  let orderCountGet = await db
    .collection("orderCount")
    .doc("orderCount")
    .get();
  let count = orderCountGet.data().order;
  console.log(count);
  await db
    .collection("orderCount")
    .doc("orderCount")
    .update({ order: count + 1 });
};

controller.addAndOrderUpdate = async function(postInfo) {
  let nameInput = postInfo.foodName;
  let nameInputSplit = nameInput.split(" ");

  let orderCountGet = await db
    .collection("orderCount")
    .doc("orderCount")
    .get();
  let orderCountDetail = orderCountGet.data().order;
  // console.log(orderCountDetail);

  // update db
  firebase
    .firestore()
    .collection("post")
    .doc()
    .set({
      address: postInfo.foodAddress,
      name: nameInput.toLowerCase(),
      arrName: nameInputSplit,
      city: postInfo.foodCity.toLowerCase(),
      money: postInfo.foodPrice,
      order: orderCountDetail + 1,
      review: postInfo.foodReview,
      user: firebase.auth().currentUser.displayName,
      type: postInfo.foodType.toLowerCase(),
      srcImg: postInfo.srcImg,
      photoUrl: postInfo.photoUrl,
      like: postInfo.like,
      likeCheck: postInfo.likeCheck,
      userUid: postInfo.userUid
    })
    .then(async function() {
      await controller
        .orderCountGetDb()
        .then(async function(detail) {
          await controller.orderCountUpdate();
        })
        .then(async function() {
          await controller.postDbGetInDescFood();
        });
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};
controller.dbChange = function() {
  let isFisrtRun = true;
  firebase
    .firestore()
    .collection("post")
    .onSnapshot(function(snapshot) {
      if (isFisrtRun) {
        isFisrtRun = false;
        return;
      }
      snapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
          console.log("haha ", change.doc.data());
          view.showPost();
        }
      });
    });
};
