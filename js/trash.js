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
const arr1 = [{ name: "An", sections: ["sp"] }];
spArr = arr1.filter(function(arr1) {
  return arr1.sections.indexOf("sp") >= 0;
});
console.log(spArr);
