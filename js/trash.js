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

window.onload = function() {
  // let count = 3;
  let buton = document.getElementById("abc");

  buton.onclick = addAndOrderUpdate;

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
let model = [];

let addAndOrderUpdate = async function() {
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
      city: "nam định",
      money: 20,
      order: orderCountDetail + 1,
      review: "ok",
      user: ""
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
  let result = await db
    .collection("post")
    .orderBy("order", "desc")
    .get();
  let detailByOrderDesc = await transformDocs(result.docs);
  model.push(detailByOrderDesc);
  console.log(model);
  // let detail = transformDocs(result.docs);
  console.log(detailByOrderDesc);
};

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
  // console.log(data);
  return data;
}
// load();
