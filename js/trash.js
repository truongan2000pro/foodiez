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
let add = async function() {
  db.collection("post")
    .doc()
    .set({
      address: "19 nam giang",
      city: "nam định",
      money: 20,
      review: "ok",
      user: ""
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};
// add();
let load = async function() {
  let result = await db
    .collection("post")
    .where("city", "==", "nam định")
    .get();
  console.log(result.docs);
  let detail = transformDocs(result.docs);
  // console.log(detail);
};
function transformDocs(docs) {
  // let datas = []
  // for(let doc of docs) {
  //   let data = doc.data()
  //   data.id = doc.id
  //   datas.push(data)
  // }
  // return datas
  console.log(docs);
  return docs.map(transformDoc);
}

function transformDoc(doc) {
  let data = doc.data();
  data.id = doc.id;
  console.log(data);
  return data;
}
load();
