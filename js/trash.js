// suggestBar = (
//   <div class="suggest-bar">
//     <div class="suggest-bar-content">
//       <ul class="sg-bar-list">
//         <li>
//           <div class="item">
//             <a href="">Phở</a>
//           </div>
//         </li>
//         <li>
//           <div class="item">
//             <a href="">Cơm</a>
//           </div>
//         </li>
//         <li>
//           <div class="item">
//             <a href="">Bún</a>
//           </div>
//         </li>
//         <li>
//           <div class="item">
//             <a href="">Trà Sữa</a>
//           </div>
//         </li>
//         <li>
//           <div class="item">
//             <a href="">Cà Phê</a>
//           </div>
//         </li>
//       </ul>
//     </div>
//   </div>
// );
// const arr1 = [{ name: "An", sections: ["sp"] }];
// spArr = arr1.filter(function(arr1) {
//   return arr1.sections.indexOf("sp") >= 0;
// });
// console.log(spArr);
let db = firebase.firestore();
let model = {
  post: null
};

window.onload = function() {
  postDbGetInDesc();

  // let count = 3;
  let buton = document.getElementById("abc");

  let button = document.getElementById("exact");

  // buton.onclick = postDbGetInDesc;

  // button.onclick = exactlyPostDbGetInDesc;

  let orderUpdate = async function() {
    let detail = await db
      .collection("orderCount")
      .doc("orderCount")
      .get()
      .then(async function(detail) {
        let count = detail.data().order;
        let update = await db
          .collection("post")
          .doc("orderCount")
          .update({ order: count + 1 });
      });
  };
  // let orderAdd = async function() {
  //   await db
  //     .collection("post")
  //     .doc("orderCount")
  //     .update({ order: +1 })
  //     .then(function() {
  //       console.log("Document successfully updated!");
  //     })
  //     .catch(function(error) {
  //       // The document probably doesn't exist.
  //       console.error("Error updating document: ", error);
  //     });
  // };

  // return localStorage.setItem("order", count);
};

let showPost = function() {
  let postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  let tbodyContainer = document.getElementById("tbody-container");
  if (model.post && model.post.length) {
    let posts = model.post;
    for (let post of posts) {
      let { id: postId, name, address, review, money, user } = post;
      let html = `
      <tr   id="${postId}" class="turn-off-rbg">
      <td class="anh">
      
        <img
          id="td-img"
          class="img"
          src="../foodiez/image/spicy.jpg"
          alt=""
        />
      </td>
      <td>
        <div class="detai">
          <div id="td-name" class="ten-quan">${capitalize_Words(name)}</div>
          <div id="td-money" class="gia-tien">Giá tiền:${money}</div>
          <div class="dia-chi">
            Địa chỉ:
            <a id="td-address" class="link-dia-chi" href=""
              >${address}</a
            >
            </div>
            <i class="fas fa-heart"></i>
            <i class="far fa-angry"></i>
                  <i class="far fa-thumbs-up"></i>
                  <i class="fas fa-thumbtack"></i>
        </div>
        
        <td>
        <img class="ava" src="./image/burger.jpg" alt="" />
        <div class="name-review">${capitalize_Words(user)}</div>
        <div class="comment">${capitalize_Words(review)}</div>
        <a class="chitiet" href="">Xem chi tiết~~ </a>
      </td>
    </tr>

      `;
      postContainer.innerHTML += html;
    }
    for (let post of posts) {
      let postId = post.id;
      let postCard = document.getElementById(postId);
      postCard.onclick = async function() {
        console.log(postCard.id);
        let result = await db
          .collection("post")
          .doc(postCard.id)
          .get();
        transformDoc(result);
        console.log(transformDoc(result));
      };
    }
  }
};

let addAndOrderUpdate = async function() {
  let nameInput = "súp gà";
  let nameInputSplit = nameInput.split(" ");

  let orderCountGet = await db
    .collection("orderCount")
    .doc("orderCount")
    .get();
  let orderCountDetail = orderCountGet.data().order;
  // console.log(orderCountDetail);

  // update db
  db.collection("post")
    .doc()
    .set({
      address: "11nghin ti  ",
      name: nameInput,
      arrName: nameInputSplit,
      city: "hà nội",
      money: 20,
      order: orderCountDetail + 1,
      review: "ok",
      user: "",
      type: "đồ ăn"
    })
    .then(async function() {
      // after update db we get orderCount from collection "orderCount"
      // await db
      //   .collection("orderCount")
      //   .doc("orderCount")
      //   .get()
      await orderCountGetDb()
        .then(async function(detail) {
          // after get order count from collection "orderCount" update order by 1
          //   let count = detail.data().order;
          //   await db
          //     .collection("orderCount")
          //     .doc("orderCount")
          //     .update({ order: count + 1 });
          await orderCountUpdate();
        })
        .then(async function() {
          // after update count pull the collection "post" order by descending and push it to model
          await postDbGetInDesc();
          // let get = async function() {
          //   let result = await db
          //     .collection("post")
          //     .orderBy("order", "desc")
          //     .get();
          //   let detailByOrderDesc = await transformDocs(result.docs);
          //   model.push(detailByOrderDesc);
          //   console.log(model);
          //   // let detail = transformDocs(result.docs);
          //   console.log(detailByOrderDesc);
          // };
          // get();
        });
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};

let orderCountGetDb = async function() {
  let orderCountGet = await db
    .collection("orderCount")
    .doc("orderCount")
    .get();
  let orderCountDetail = orderCountGet.data().order;
  // console.log(orderCountDetail);
};
let orderCountUpdate = async function() {
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

let postDbGetInDesc = async function() {
  let nameInput = "phở gà";
  let nameInputSplit = nameInput.split(" ");
  let city = "hà nội";

  let result = await db
    .collection("post")
    // .where("city", "==", city)
    // .where("type", "==", "đồ uống")
    // .where("arrName", "array-contains-any", nameInputSplit)

    .orderBy("order", "desc")
    .get();
  let detailByOrderDesc = await transformDocs(result.docs);
  model.post = detailByOrderDesc;
  console.log(model);
  // let detail = transformDocs(result.docs);
  console.log(detailByOrderDesc);
};
let test = async function() {
  await postDbGetInDesc();
  showPost();
};
test();
// let exactlyPostDbGetInDesc = async function() {
//   let nameInput = "phở bò";
//   let city = "hà nội";

//   let result = await db
//     .collection("post")
//     .where("city", "==", city)
//     // .where("type", "==", "đồ uống")
//     .where("name", "==", nameInput)

//     .orderBy("order", "desc")
//     .get();
//   let detailByOrderDesc = await transformDocs(result.docs);

//   console.log(detailByOrderDesc);
// };

// add();
// let load = async function() {
//   let result = await db
//     .collection("post")
//     .where("city", "==", "nam định")
//     .get();
//   console.log(result.docs);
//   let detail = transformDocs(result.docs);
// console.log(detail);
// };
// let order = async function() {
//   let result = await db.collection("post").orderBy("order", "desc");
//   let a = await result.get();
//   console.log(a.docs);
//   let detail = transformDocs(a.docs);
//   console.log(detail);
// };
// order();
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
// load();
function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
