const view = {
  currentScreen: null,
  city: null,
  id: null
};
view.showComponents = async function(screenName) {
  view.currentScreen = screenName;
  switch (screenName) {
    case "register": {
      let app = document.getElementById("app");
      app.innerHTML = components.register;

      let homePage = document.getElementById("back-to-home");
      homePage.onclick = function homeclickHandler() {
        view.showComponents("home");
      };

      let link = document.getElementById("register-link");
      link.onclick = linkClickHandler;

      let form = document.getElementById("register-form");
      form.onsubmit = formSubmitHandler;

      function linkClickHandler() {
        view.showComponents("logIn");
      }

      function formSubmitHandler(e) {
        e.preventDefault(); // chan su kien form submit mac dinh

        // get data
        let registerInfo = {
          firstname: form.firstname.value.trim(),
          lastname: form.lastname.value.trim(),
          email: form.email.value.trim().toLowerCase(),
          password: form.password.value,
          confirmPassword: form.confirmPassword.value
        };
        // validate data
        let validateResult = [
          view.validate("firstname-error", [
            registerInfo.firstname,
            "Misssing firstname!"
          ]),
          view.validate("lastname-error", [
            registerInfo.lastname,
            "Missing lastname!"
          ]),
          view.validate("email-error", [registerInfo.email, "Missing email!"]),
          view.validate("password-error", [
            registerInfo.password,
            "Missing password!",
            registerInfo.password.length >= 6,
            "Password length must greater than or equals 6"
          ]),
          view.validate("confirm-password-error", [
            registerInfo.confirmPassword,
            "Missing confirm password!",
            registerInfo.confirmPassword == registerInfo.password,
            "Password and confirm password not match!"
          ])
        ];
        // submit data
        if (view.allPassed(validateResult)) {
          controller.register(registerInfo);
        }
      }
      break;
    }
    case "logIn": {
      let app = document.getElementById("app");
      app.innerHTML = components.logIn;

      let homePage = document.getElementById("back-to-home");
      homePage.onclick = function homeclickHandler() {
        view.showComponents("home");
      };

      let link = document.getElementById("log-in-link");
      link.onclick = linkClickHandler;

      let form = document.getElementById("log-in-form");
      form.onsubmit = formSubmitHandler;

      function linkClickHandler() {
        view.showComponents("register");
      }

      function formSubmitHandler(e) {
        e.preventDefault();
        let logInInfo = {
          email: form.email.value,
          password: form.password.value
        };

        let validateResult = [
          view.validate("email-error", [logInInfo.email, "Missing email!"]),
          view.validate("password-error", [
            logInInfo.password,
            "Missing password!",
            logInInfo.password.length >= 6,
            "Password length must greater than or equals 6!"
          ])
        ];

        if (view.allPassed(validateResult)) {
          controller.logIn(logInInfo);
        }
      }

      break;
    }
    case "home": {
      let app = document.getElementById("app");
      app.innerHTML =
        components.nav + components.home + components.post + components.footer;
      let searchBtn = document.getElementById("search-btn-cover");

      let searchInput = document.getElementById("search-input");

      let logo = document.getElementById("logo");

      let viewExtras = document.getElementById("show-more-food");

      let imgUploadWrapper = document.getElementById("img-upload-wrapper");

      let foodShare = document.getElementById("food-share");

      let modalBtn = document.getElementById("modal-btn");

      let btnPostWrapper = document.getElementById("btn-post-wrapper");

      let imgUpdate = document.getElementById("img-update");

      let addImg = document.getElementById("add-image");

      let dropdownCitySelect = document.getElementById("dropdown-city-select");

      // get id post
      let imgButtonUpdate = document.getElementById("img-button-update");

      let foodPrice = document.getElementById("food-price");

      let profireImgTag = document.getElementById("profile-img-tag");

      let foodName = document.getElementById("food-name");

      let foodAddress = document.getElementById("food-address");

      let foodReview = document.getElementById("food-review");

      let btnUploadPost = document.getElementById("btn-upload-post");

      let foodImgError = document.getElementById("food-img-error");

      let dropdownMenuButton = document.getElementById("dropdownMenuButton");
      let dropdownMenu2 = document.getElementById("dropdownMenu2");

      let drinkDropDownMenu = document.getElementById("drink-dropdown-menu");

      let dropdownMenuButtoncity = document.getElementById(
        "dropdownMenuButtoncity"
      );

      let btnCancelUpdatePost = document.getElementById(
        "btn-cancel-upload-post"
      );
      let viewExtrasDrink = document.getElementById("show-more-food-drinks");

      let listFoodWrapper = document.getElementById("list-food-wrapper");

      let listDrinkWrapper = document.getElementById("list-drink-wrapper");

      view.city = dropdownMenu2.textContent.trim();

      let showListFood = async function() {
        let result = await db
          .collection("post")
          .where("city", "==", dropdownMenu2.innerText.toLowerCase().trim())
          .where("type", "==", "đồ ăn")
          // .where("arrName", "array-contains-any", nameInputSplit)

          .orderBy("like", "desc")
          .limit(5)
          .get();
        let detailByOrderDesc = await transformDocs(result.docs);
        model.food = detailByOrderDesc;
        // let detail = transformDocs(result.docs);
        listFoodWrapper.innerHTML = "";
        if (model.food && model.food.length) {
          let foods = model.food;
          for (let food of foods) {
            let { name, address, photoUrl, user, id, srcImg, like } = food;

            html = ` <div id="${id}" class="food-wrapper"> 
          <figure class="img-food"><img src="${srcImg}" alt="" /></figure>
          <div class="food-contents">
            <div class="name-food">
              ${name}
            </div>
            <div class="address">
              ${address}
            </div>
            
            <div class="poster">
            <img src="${photoUrl}" class="" alt="..." style="width: 30px;
            height: 30px;
            border-radius: 50%;">
             ${user}</div>
             <i class="fas home-heart fa-heart"> ${like}</i>

            
          </div>
        </div>
      `;
            listFoodWrapper.innerHTML += html;
          }
          for (let post of foods) {
            let postId = post.id;
            let postCard = document.getElementById(postId);
            postCard.onclick = async function() {
              city = dropdownMenu2.innerText.toLowerCase().trim();
              view.city = city;
              let postCardId = postCard.id;
              view.id = postCardId;
              view.showComponents("detail");
            };
          }
        }
      };
      let showListDrink = async function() {
        let result = await db
          .collection("post")
          .where("city", "==", dropdownMenu2.innerText.toLowerCase().trim())
          .where("type", "==", "đồ uống")
          // .where("arrName", "array-contains-any", nameInputSplit)

          .orderBy("like", "desc")
          .limit(5)
          .get();
        let detailByOrderDesc = await transformDocs(result.docs);
        model.drink = detailByOrderDesc;
        // let detail = transformDocs(result.docs);
        listDrinkWrapper.innerHTML = "";
        if (model.drink && model.drink.length) {
          let drinks = model.drink;
          for (let drink of drinks) {
            let { name, address, photoUrl, user, id, srcImg, like } = drink;

            html = ` <div id="${id}" class="food-wrapper"> 
          <figure class="img-food"><img src="${srcImg}" alt="" /></figure>
          <div class="food-contents">
            <div class="name-food">
              ${name}
            </div>
            <div class="address">
              ${address}
            </div>
            
            <div class="poster">
            <img src="${photoUrl}" class="" alt="..." style="width: 30px;
            height: 30px;
            border-radius: 50%;">
             ${user}</div>
             <i class="fas home-heart fa-heart"> ${like}</i>

            
          </div>
        </div>
      `;
            listDrinkWrapper.innerHTML += html;
          }
          for (let post of drinks) {
            let postId = post.id;
            let postCard = document.getElementById(postId);
            postCard.onclick = async function() {
              city = dropdownMenu2.innerText.toLowerCase().trim();
              view.city = city;
              let postCardId = postCard.id;
              view.id = postCardId;
              view.showComponents("detail");
            };
          }
        }
      };

      if (view.currentScreen == "home") {
        showListFood();
        showListDrink();
      }

      btnCancelUpdatePost.onclick = function cancelUpdateHandler() {
        let postInfo = {
          foodName: foodName,
          foodAddress: foodAddress,
          foodReview: foodReview,
          srcImg: imgButtonUpdate,
          foodPrice: foodPrice
        };
        view.removeValue(postInfo.foodName);
        view.removeValue(postInfo.foodAddress);
        view.removeValue(postInfo.foodReview);
        view.removeValue(postInfo.srcImg);
        view.removeValue(postInfo.foodPrice);

        view.validate("food-name-error", [postInfo.foodName, ""]),
          view.validate("food-address-error", [postInfo.foodAddress, ""]),
          view.validate("food-review-error", [postInfo.foodReview, ""]),
          view.validate("food-img-error", [postInfo.srcImg, ""]),
          view.validate("food-price-error", [postInfo.foodPrice, ""]);
        profireImgTag.src = "";
      };

      btnUploadPost.onclick = async function postSubmitHandler() {
        let postInfo = {
          foodName: foodName.value,
          foodAddress: foodAddress.value,
          foodReview: foodReview.value,
          foodPrice: foodPrice.value,
          foodCity: dropdownMenuButtoncity.textContent.trim(),
          foodType: dropdownMenuButton.textContent.trim(),
          inputImg: imgButtonUpdate.value,
          photoUrl: firebase.auth().currentUser.photoURL,
          like: 0,
          likeCheck: false,
          userUid: []
        };

        let validateResult = [
          view.validate("food-name-error", [
            postInfo.foodName,
            "Bạn Vui Lòng Điền Thêm Tên Món"
          ]),
          view.validate("food-address-error", [
            postInfo.foodAddress,
            "Bạn Vui Lòng Điền Thêm Địa Chỉ"
          ]),
          view.validate("food-review-error", [
            postInfo.foodReview,
            "Bạn Vui Lòng Review Về Món Ăn"
          ]),
          view.validate("food-img-error", [
            postInfo.inputImg,
            "Bạn Vui Lòng Chọn Ảnh Món Bạn Muốn Đăng"
          ]),
          view.validate("food-price-error", [
            postInfo.foodPrice,
            "Bạn Vui Lòng Nhập Giá Tiền"
          ])
        ];

        if (view.allPassed(validateResult)) {
          view.disable("btn-upload-post");
          let postWrapper = document.getElementById("post-wrapper");
          let postUploadContainer = document.getElementById(
            "post-upload-container"
          );
          try {
            let file = imgButtonUpdate.files[0];
            let link = await controller.upload(file);
            postInfo.srcImg = link;

            controller.addAndOrderUpdate(postInfo);
          } catch (error) {
            console.log(error.message);
          }
          view.enable("btn-upload-post");
          // btnUploadPost.style.display = "none";
          let uploadSucess = document.getElementById("upload-success");
          uploadSucess.style.display = "block";

          setTimeout(function() {
            //   let postUploadContainer = document.getElementById(
            //     "post-upload-container"
            //   );
            uploadSucess.style.display = "none";
            //   let uploadSucess = document.getElementById("upload-success");
            //   let postWrapper = document.getElementById("post-wrapper");
            //   uploadSucess.style.display = "none";
            //   postWrapper.style.display = "flex";
            //   btnUploadPost.style.display = "block";
            //   btnCancelUpdatePost.click();
            //   profireImgTag.src = "";
            //   btnUploadPost.onclick = postSubmitHandler;
            //   btnCancelUpdatePost.onclick = cancelUpdateHandler;
          }, 2000);
        }
      };

      // console.dir(drinkDropDownMenu.children[0].children[0]);

      for (let i = 0; i < dropdownCitySelect.children.length; i++) {
        dropdownCitySelect.children[i].onclick = function() {
          dropdownMenuButtoncity.textContent =
            dropdownCitySelect.children[i].text;
        };
      }

      for (let i = 0; i < drinkDropDownMenu.children.length; i++) {
        drinkDropDownMenu.children[i].onclick = function() {
          dropdownMenuButton.textContent = drinkDropDownMenu.children[i].text;
        };
      }
      addImg.onclick = function addImgHandler() {
        imgButtonUpdate.click();
      };

      imgButtonUpdate.onclick = function() {
        profireImgTag.src = "";
      };

      $("#img-button-update").change(function() {
        readURL(this);
      });

      foodShare.onclick = function foodShareClickHandlder() {
        modalBtn.click();
      };

      logo.onclick = function logoClickHandler() {
        view.showComponents("home");
      };
      // console.dir(searchInput);

      // nav bar
      let dropdownMenuNav = document.getElementById("dropdown-menu-nav");

      let navLogInBtn = document.getElementById("btn-log-in-nav");

      let navRegisterBtn = document.getElementById("btn-register-nav");

      let navLogOutBtn = document.getElementById("btn-log-out-nav");

      let userDetail = document.getElementById("user-nav");

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          let userName = firebase.auth().currentUser.displayName;
          userDetail.innerText += " " + userName;
          // console.log(userName);
        } else {
          let userDetail = document.getElementById("user-detail");
          userDetail.style.display = "none";
        }
      });
      // let userName = firebase.auth().currentUser.displayName;
      // userDetail.innerText += " " + userName;
      // console.log(userName);

      for (let i = 0; i < dropdownMenuNav.children.length; i++) {
        dropdownMenuNav.children[i].onclick = function() {
          dropdownMenu2.innerText = dropdownMenuNav.children[i].textContent;
          showListFood();
          showListDrink();
        };
      }
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          navLogInBtn.style.display = "none";
          navRegisterBtn.style.display = "none";
        } else {
          navLogOutBtn.style.display = "none";
        }
      });

      navLogOutBtn.onclick = function logOutHandler() {
        firebase.auth().signOut();
      };
      navLogInBtn.onclick = function logInLinkHandler() {
        view.showComponents("logIn");
      };

      navRegisterBtn.onclick = function registerLinkHandler() {
        view.showComponents("register");
      };
      // view.city = dropdownMenu2.innerText;
      // dropdownMenu2.innerText = capitalize_Words(view.city);

      let city = dropdownMenu2.innerText.toLowerCase().trim();
      view.city = city;
      viewExtras.onclick = async function viewAllFoodClickHandler() {
        controller.postDbGetInDescFood = async function() {
          city = dropdownMenu2.innerText.toLowerCase().trim();
          view.city = city;

          for (let i = 0; i < dropdownMenuNav.children.length; i++) {
            dropdownMenuNav.children[i].onclick = function() {
              dropdownMenu2.innerText = dropdownMenuNav.children[i].textContent;
            };
          }
          let result = await db
            .collection("post")
            .where("city", "==", city)
            .where("type", "==", "đồ ăn")
            // .where("arrName", "array-contains-any", nameInputSplit)

            .orderBy("order", "desc")
            .get();
          let detailByOrderDesc = await transformDocs(result.docs);
          console.log(detailByOrderDesc);
          model.post = detailByOrderDesc;
          // console.log(model.post);
        };
        view.showComponents("extras");
      };
      viewExtrasDrink.onclick = function drinkClickHandler() {
        controller.postDbGetInDescFood = async function() {
          city = dropdownMenu2.innerText.toLowerCase().trim();
          view.city = city;

          for (let i = 0; i < dropdownMenuNav.children.length; i++) {
            dropdownMenuNav.children[i].onclick = function() {
              dropdownMenu2.innerText = dropdownMenuNav.children[i].textContent;
            };
          }
          let result = await db
            .collection("post")
            .where("city", "==", city)
            .where("type", "==", "đồ uống")
            // .where("arrName", "array-contains-any", nameInputSplit)

            .orderBy("order", "desc")
            .get();
          let detailByOrderDesc = await transformDocs(result.docs);
          model.post = detailByOrderDesc;
        };
        view.showComponents("extras");
      };

      searchBtn.onclick = function iconClickHandler() {
        let nameInput = searchInput.value.trim().toLowerCase();

        controller.postDbGetInDescFood = async function() {
          let nameInputSplit = nameInput.split(" ");

          let result = await db
            .collection("post")
            .where("city", "==", dropdownMenu2.innerText.toLowerCase().trim())
            // .where("type", "==", "")
            // .where("arrName", "array-contains-any", nameInputSplit)
            .where("name", "==", nameInput)
            .orderBy("order", "desc")
            .get();

          let detailByOrderDesc = await transformDocs(result.docs);
          model.post = detailByOrderDesc;

          // let detail = transformDocs(result.docs);
          // showPost();};
        };
        view.city = dropdownMenu2.innerText;

        if (nameInput == "") {
          alert("Bạn Chưa Nhập Gì Cả");
        } else {
          if (view.currentScreen != "extras") {
            view.showComponents("extras");
          }
        }
      };
      break;
    }
    case "extras": {
      let app = document.getElementById("app");
      app.innerHTML =
        components.nav +
        components.extras +
        components.post +
        components.footer;
      let searchBtn = document.getElementById("search-btn-cover");

      let searchInput = document.getElementById("search-input");

      let foodPrice = document.getElementById("food-price");

      let logo = document.getElementById("logo");

      let imgUploadWrapper = document.getElementById("img-upload-wrapper");

      let addImg = document.getElementById("add-image");

      let dropdownCitySelect = document.getElementById("dropdown-city-select");
      // post
      let imgButtonUpdate = document.getElementById("img-button-update");

      let profireImgTag = document.getElementById("profile-img-tag");

      let foodName = document.getElementById("food-name");

      let foodAddress = document.getElementById("food-address");

      let foodReview = document.getElementById("food-review");

      let btnUploadPost = document.getElementById("btn-upload-post");

      let foodImgError = document.getElementById("food-img-error");

      let drinkDropDownMenu = document.getElementById("drink-dropdown-menu");

      let postContainer = document.getElementById("post-container");

      let btnCancelUpdatePost = document.getElementById(
        "btn-cancel-upload-post"
      );

      let screenSwap = async function() {
        await controller.postDbGetInDescFood();
        showPost();
      };
      if (view.currentScreen == "extras") {
        screenSwap();
      }
      let showPost = function() {
        postContainer.innerHTML = "";
        let tbodyContainer = document.getElementById("tbody-container");
        if (model.post && model.post.length) {
          let posts = model.post;
          for (let post of posts) {
            let {
              id: postId,
              name,
              address,
              review,
              money,
              user,
              city,
              photoUrl, // avatar user
              srcImg,
              like
            } = post;
            // let userFbdetail = firebase.auth().currentUser;
            // firebase.auth().onAuthStateChanged(function(user) {
            //   if (user) {
            //     let photoUrl = userFbdetail.photoURL;
            //   } else {
            //     // No user is signed in.
            //   }
            // });

            let html = `
        <tr   id="${postId}" class="turn-off-rbg">
        <td class="anh">
        
          <img
            id="td-img"
            class="img"
            src="${srcImg}"
            alt=""
          />
        </td>
        <td>
          <div class="detai">
            <div id="td-name" class="ten-quan">${capitalize_Words(name)}</div>
            <div id="td-money" class="gia-tien">Giá tiền:<div class="money">${numberWithCommas(
              money
            )} Đ</div></div>
            <div class="dia-chi">
              Địa chỉ:
              <a id="td-address" class="link-dia-chi" href=""
                >${capitalize_Words(
                  address + " " + "Thành Phố" + " " + city
                )}</a
              >
              </div>
              <i class="fas fa-heart"> ${like}</i>
              
          </div>
          
          <td>
          <img class="ava" src="${photoUrl}" alt="" />
          <div class="name-review">${capitalize_Words(user)}</div>
          <div class="comment">${capitalize_Words(review)}</div>
          <span class="chitiet" href="">Xem Chi Tiết <i class="fas fa-angle-double-right"></i></span>
        </td>
      </tr>
  
        `;
            postContainer.innerHTML += html;
          }
          for (let post of posts) {
            let postId = post.id;
            let postCard = document.getElementById(postId);
            postCard.onclick = async function() {
              let postCardId = postCard.id;
              view.id = postCardId;

              view.showComponents("detail");
              // console.log(postCard.id);
              // let result = await db
              //   .collection("post")
              //   .doc(postCard.id)
              //   .get();
              // view.transformDoc(result);
              // console.log(view.transformDoc(result));
            };
          }
        }
        console.log(postContainer.children.length);
        if (postContainer.children.length == 0) {
          let noResult = document.getElementById("no-result");
          noResult.style.display = "block";
        } else {
          let noResult = document.getElementById("no-result");
          noResult.style.display = "none";
        }
      };

      btnCancelUpdatePost.onclick = function cancelUpdateHandler() {
        let postInfo = {
          foodName: foodName,
          foodAddress: foodAddress,
          foodReview: foodReview,
          srcImg: imgButtonUpdate
        };
        view.removeValue(postInfo.foodName);
        view.removeValue(postInfo.foodAddress);
        view.removeValue(postInfo.foodReview);
        view.removeValue(postInfo.srcImg);

        view.validate("food-name-error", [postInfo.foodName, ""]),
          view.validate("food-address-error", [postInfo.foodAddress, ""]),
          view.validate("food-review-error", [postInfo.foodReview, ""]),
          view.validate("food-img-error", [postInfo.srcImg, ""]);
        profireImgTag.src = "";
      };

      btnUploadPost.onclick = async function postSubmitHandler() {
        let postInfo = {
          foodName: foodName.value,
          foodAddress: foodAddress.value,
          foodReview: foodReview.value,
          foodPrice: foodPrice.value,
          foodCity: dropdownMenuButtoncity.textContent.trim(),
          foodType: dropdownMenuButton.textContent.trim(),
          inputImg: imgButtonUpdate.value,
          photoUrl: firebase.auth().currentUser.photoURL,
          like: 0,
          likeCheck: false,
          userUid: []
        };

        let validateResult = [
          view.validate("food-name-error", [
            postInfo.foodName,
            "Bạn Vui Lòng Điền Thêm Tên Món"
          ]),
          view.validate("food-address-error", [
            postInfo.foodAddress,
            "Bạn Vui Lòng Điền Thêm Địa Chỉ"
          ]),
          view.validate("food-review-error", [
            postInfo.foodReview,
            "Bạn Vui Lòng Review Về Món Ăn"
          ]),
          view.validate("food-img-error", [
            postInfo.inputImg,
            "Bạn Vui Lòng Chọn Ảnh Món Bạn Muốn Đăng"
          ]),
          view.validate("food-price-error", [
            postInfo.foodPrice,
            "Bạn Vui Lòng Nhập Giá Tiền"
          ])
        ];

        if (view.allPassed(validateResult)) {
          view.disable("btn-upload-post");
          let postWrapper = document.getElementById("post-wrapper");
          let postUploadContainer = document.getElementById(
            "post-upload-container"
          );
          try {
            let file = imgButtonUpdate.files[0];
            let link = await controller.upload(file);
            postInfo.srcImg = link;

            controller.addAndOrderUpdate(postInfo);
          } catch (error) {
            console.log(error.message);
          }
          view.enable("btn-upload-post");
          // btnUploadPost.style.display = "none";
          let uploadSucess = document.getElementById("upload-success");
          uploadSucess.style.display = "block";

          setTimeout(function() {
            uploadSucess.style.display = "none";
          }, 2000);
        }
      };
      controller.dbChange();

      let dropdownMenuButtoncity = document.getElementById(
        "dropdownMenuButtoncity"
      );

      for (let i = 0; i < dropdownCitySelect.children.length; i++) {
        dropdownCitySelect.children[i].onclick = function() {
          dropdownMenuButtoncity.textContent =
            dropdownCitySelect.children[i].text;
        };
      }

      for (let i = 0; i < drinkDropDownMenu.children.length; i++) {
        drinkDropDownMenu.children[i].onclick = function() {
          dropdownMenuButton.textContent = drinkDropDownMenu.children[i].text;
        };
      }

      addImg.onclick = function addImgHandler() {
        imgButtonUpdate.click();
      };

      imgButtonUpdate.onclick = function() {
        profireImgTag.src = "";
      };

      $("#img-button-update").change(function() {
        readURL(this);
      });

      logo.onclick = function logoClickHandler() {
        view.showComponents("home");
      };
      // console.dir(searchInput);

      // nav
      let dropdownMenu2 = document.getElementById("dropdownMenu2");

      let dropdownMenuNav = document.getElementById("dropdown-menu-nav");

      let navLogInBtn = document.getElementById("btn-log-in-nav");

      let navRegisterBtn = document.getElementById("btn-register-nav");

      let navLogOutBtn = document.getElementById("btn-log-out-nav");

      dropdownMenu2.innerText = capitalize_Words(view.city);

      let userDetail = document.getElementById("user-nav");

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          let userName = firebase.auth().currentUser.displayName;
          userDetail.innerText += " " + userName;
          console.log(userName);
        } else {
          let userDetail = document.getElementById("user-detail");
          userDetail.style.display = "none";
        }
      });

      for (let i = 0; i < dropdownMenuNav.children.length; i++) {
        dropdownMenuNav.children[i].onclick = async function() {
          dropdownMenu2.innerText = dropdownMenuNav.children[i].textContent;
          view.city = capitalize_Words(dropdownMenu2.innerText);

          controller.postDbGetInDescFood = async function() {
            let result = await db
              .collection("post")
              .where("city", "==", dropdownMenu2.innerText.toLowerCase().trim())
              // .where("type", "==", "đồ ăn")
              // .where("arrName", "array-contains-any", nameInputSplit)

              .orderBy("order", "desc")
              .get();
            let detailByOrderDesc = await transformDocs(result.docs);
            model.post = detailByOrderDesc;
            // let detail = transformDocs(result.docs);
            // showPost();
          };

          if (view.currentScreen == "extras") {
            screenSwap();
          }
        };
      }
      searchBtn.onclick = function iconClickHandler() {
        let nameInput = searchInput.value.trim().toLowerCase();

        controller.postDbGetInDescFood = async function() {
          let nameInputSplit = nameInput.split(" ");

          let result = await db
            .collection("post")
            .where("city", "==", dropdownMenu2.innerText.toLowerCase().trim())
            // .where("type", "==", "")
            // .where("arrName", "array-contains-any", nameInputSplit)
            .where("name", "==", nameInput)
            .orderBy("order", "desc")
            .get();

          let detailByOrderDesc = await transformDocs(result.docs);
          model.post = detailByOrderDesc;

          // let detail = transformDocs(result.docs);
          // showPost();};
        };

        if (nameInput == "") {
          alert("Bạn Chưa Nhập Gì Cả");
        } else {
          if (view.currentScreen == "extras") {
            screenSwap();
          }
        }
      };

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          navLogInBtn.style.display = "none";
          navRegisterBtn.style.display = "none";
        } else {
          navLogOutBtn.style.display = "none";
        }
      });

      navLogOutBtn.onclick = function logOutHandler() {
        firebase.auth().signOut();
      };

      navLogInBtn.onclick = function logInLinkHandler() {
        view.showComponents("logIn");
      };

      navRegisterBtn.onclick = function registerLinkHandler() {
        view.showComponents("register");
      };
      break;
    }
    case "loading": {
      let app = document.getElementById("app");

      app.innerHTML = components.loading;
      break;
    }
    case "detail": {
      let app = document.getElementById("app");
      app.innerHTML =
        components.nav +
        components.detail +
        components.post +
        components.footer;

      let btnUploadPost = document.getElementById("btn-upload-post");
      let addImg = document.getElementById("add-image");

      let detailContainer = document.getElementById("detail-container");

      let searchBtn = document.getElementById("search-btn-cover");

      let dropdownMenuNav = document.getElementById("dropdown-menu-nav");
      let dropdownMenu2 = document.getElementById("dropdownMenu2");

      let searchInput = document.getElementById("search-input");
      let navLogInBtn = document.getElementById("btn-log-in-nav");

      let navRegisterBtn = document.getElementById("btn-register-nav");

      let navLogOutBtn = document.getElementById("btn-log-out-nav");

      let userDetail = document.getElementById("user-nav");

      let logo = document.getElementById("logo");
      let detailFood = document.getElementById("detail-food-wrapper");

      let returnExtras = document.getElementById("return-extras");

      let imgButtonUpdate = document.getElementById("img-button-update");

      let foodPrice = document.getElementById("food-price");

      let profireImgTag = document.getElementById("profile-img-tag");

      let foodName = document.getElementById("food-name");

      let foodAddress = document.getElementById("food-address");

      let foodReview = document.getElementById("food-review");

      let foodImgError = document.getElementById("food-img-error");

      let dropdownMenuButton = document.getElementById("dropdownMenuButton");

      let drinkDropDownMenu = document.getElementById("drink-dropdown-menu");

      let dropdownCitySelect = document.getElementById("dropdown-city-select");

      let dropdownMenuButtoncity = document.getElementById(
        "dropdownMenuButtoncity"
      );

      let btnCancelUpdatePost = document.getElementById(
        "btn-cancel-upload-post"
      );
      let viewExtrasDrink = document.getElementById("show-more-food-drinks");

      let imgFoodDetail = document.getElementById("img-food-detail");

      let commentDetail = document.getElementById("comment-detail");

      let foodInfo = document.getElementById("food-info");

      let userImg = document.getElementById("user-img");

      let formAddComment = document.getElementById("form-add-comment");
      // dropdownMenu2.innerText = view.city.trim();

      btnCancelUpdatePost.onclick = function cancelUpdateHandler() {
        let postInfo = {
          foodName: foodName,
          foodAddress: foodAddress,
          foodReview: foodReview,
          srcImg: imgButtonUpdate,
          foodPrice: foodPrice
        };
        view.removeValue(postInfo.foodName);
        view.removeValue(postInfo.foodAddress);
        view.removeValue(postInfo.foodReview);
        view.removeValue(postInfo.srcImg);
        view.removeValue(postInfo.foodPrice);

        view.validate("food-name-error", [postInfo.foodName, ""]),
          view.validate("food-address-error", [postInfo.foodAddress, ""]),
          view.validate("food-review-error", [postInfo.foodReview, ""]),
          view.validate("food-img-error", [postInfo.srcImg, ""]),
          view.validate("food-price-error", [postInfo.foodPrice, ""]);
        profireImgTag.src = "";
      };

      dropdownMenu2.innerText = capitalize_Words(view.city);

      for (let i = 0; i < dropdownCitySelect.children.length; i++) {
        dropdownCitySelect.children[i].onclick = function() {
          dropdownMenuButtoncity.textContent =
            dropdownCitySelect.children[i].text;
        };
      }

      for (let i = 0; i < drinkDropDownMenu.children.length; i++) {
        drinkDropDownMenu.children[i].onclick = function() {
          dropdownMenuButton.textContent = drinkDropDownMenu.children[i].text;
        };
      }

      returnExtras.onclick = function returnExtrasClickHandler() {
        controller.postDbGetInDescFood = async function() {
          let nameInput = "phở gà";
          let nameInputSplit = nameInput.split(" ");
          city = dropdownMenu2.innerText.toLowerCase().trim();
          view.city = city;

          let result = await db
            .collection("post")
            .where("city", "==", city)
            // .where("type", "==", "đồ uống")
            // .where("arrName", "array-contains-any", nameInputSplit)

            .orderBy("order", "desc")
            .get();
          let detailByOrderDesc = await transformDocs(result.docs);
          model.post = detailByOrderDesc;
        };
        view.showComponents("extras");
      };

      logo.onclick = function logoClickHandler() {
        view.showComponents("home");
      };

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          let userName = firebase.auth().currentUser.displayName;
          userDetail.innerText += " " + userName;
        } else {
          let userDetail = document.getElementById("user-detail");
          userDetail.style.display = "none";
        }
      });
      // let userName = firebase.auth().currentUser.displayName;
      // userDetail.innerText += " " + userName;
      // console.log(userName);

      for (let i = 0; i < dropdownMenuNav.children.length; i++) {
        dropdownMenuNav.children[i].onclick = function() {
          dropdownMenu2.innerText = dropdownMenuNav.children[i].textContent;
        };
      }
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          navLogInBtn.style.display = "none";
          navRegisterBtn.style.display = "none";
        } else {
          navLogOutBtn.style.display = "none";
        }
      });

      navLogOutBtn.onclick = function logOutHandler() {
        firebase.auth().signOut();
      };
      navLogInBtn.onclick = function logInLinkHandler() {
        view.showComponents("logIn");
      };

      navRegisterBtn.onclick = function registerLinkHandler() {
        view.showComponents("register");
      };
      // view.city = dropdownMenu2.innerText;
      // dropdownMenu2.innerText = capitalize_Words(view.city);

      let city = dropdownMenu2.innerText.toLowerCase().trim();
      view.city = city;

      searchBtn.onclick = function iconClickHandler() {
        let nameInput = searchInput.value.trim().toLowerCase();

        controller.postDbGetInDescFood = async function() {
          let nameInputSplit = nameInput.split(" ");

          let result = await db
            .collection("post")
            .where("city", "==", dropdownMenu2.innerText.toLowerCase().trim())
            // .where("type", "==", "")
            // .where("arrName", "array-contains-any", nameInputSplit)
            .where("name", "==", nameInput)
            .orderBy("order", "desc")
            .get();

          let detailByOrderDesc = await transformDocs(result.docs);
          model.post = detailByOrderDesc;

          // let detail = transformDocs(result.docs);
          // showPost();};
        };
        view.city = dropdownMenu2.innerText;

        if (nameInput == "") {
          alert("Bạn Chưa Nhập Gì Cả");
        } else {
          if (view.currentScreen != "extras") {
            view.showComponents("extras");
          }
        }
      };

      let screenSwap = async function() {
        await controller.postDetail(view.id);
        showDetail();
      };

      screenSwap();
      btnUploadPost.onclick = async function postSubmitHandler() {
        let postInfo = {
          foodName: foodName.value,
          foodAddress: foodAddress.value,
          foodReview: foodReview.value,
          foodPrice: foodPrice.value,
          foodCity: dropdownMenuButtoncity.textContent.trim(),
          foodType: dropdownMenuButton.textContent.trim(),
          inputImg: imgButtonUpdate.value,
          photoUrl: firebase.auth().currentUser.photoURL,
          userUid: [],
          like: 0
        };

        let validateResult = [
          view.validate("food-name-error", [
            postInfo.foodName,
            "Bạn Vui Lòng Điền Thêm Tên Món"
          ]),
          view.validate("food-address-error", [
            postInfo.foodAddress,
            "Bạn Vui Lòng Điền Thêm Địa Chỉ"
          ]),
          view.validate("food-review-error", [
            postInfo.foodReview,
            "Bạn Vui Lòng Review Về Món Ăn"
          ]),
          view.validate("food-img-error", [
            postInfo.inputImg,
            "Bạn Vui Lòng Chọn Ảnh Món Bạn Muốn Đăng"
          ]),
          view.validate("food-price-error", [
            postInfo.foodPrice,
            "Bạn Vui Lòng Nhập Giá Tiền"
          ])
        ];

        if (view.allPassed(validateResult)) {
          view.disable("btn-upload-post");
          let postWrapper = document.getElementById("post-wrapper");
          try {
            let file = imgButtonUpdate.files[0];
            let link = await controller.upload(file);
            postInfo.srcImg = link;

            controller.addAndOrderUpdate(postInfo);
          } catch (error) {
            console.log(error.message);
          }
          view.enable("btn-upload-post");
          postWrapper.innerHTML = `<div class="upload-success" > Bạn đã đăng bài thành công ^.^</div>
          `;
          btnUploadPost.style.display = "none";
        }
      };

      let showDetail = function() {
        // detailFood.innerHTML = "";
        if (model.detail) {
          let detail = model.detail;
          let {
            id,
            name,
            address,
            review,
            money,
            city,
            type,
            user,
            photoUrl,
            srcImg,
            comments,
            like
          } = detail;
          // let userFbdetail = firebase.auth().currentUser;
          // let photoUrl = userFbdetail.photoURL;

          imgFoodDetail.innerHTML += `<img src="${srcImg}" alt="" />
          <div style="
          display: flex;
          justify-content: space-between;" > 
          <span id="post-like">

          <i id="fa-heart" class="fas fa-heart"> ${like}</i>
          </span>
          
          <button class="share-btn">
            <span><i class="fab fa-facebook-f"></i> </span> Chia sẻ Facebook
          </button>
          </div>
          `;

          let postLike = document.getElementById("post-like");
          let faHeart = document.getElementById("fa-heart");

          postLike.onclick = async function() {
            // let result = controller.postDetail(id);
            console.log(model.detail.userUid);
            let userUid = await firebase.auth().currentUser.uid;
            console.log(typeof userUid);

            if (
              // model.detail.likeCheck == false &&
              model.detail.userUid.indexOf(userUid) == -1
            ) {
              await controller.postDetail(id);
              let likeNumber = Number(faHeart.textContent);
              let likeCount = (faHeart.textContent = likeNumber + 1);
              await firebase
                .firestore()
                .collection("post")
                .doc(id)
                .update({
                  like: likeCount,
                  likeCheck: true,
                  userUid: firebase.firestore.FieldValue.arrayUnion(userUid)
                });
              await controller.postDetail(id);
            } else if (
              // model.detail.likeCheck == false &&
              model.detail.userUid.indexOf(userUid) != -1
            ) {
              await controller.postDetail(id);
              let likeNumber = Number(faHeart.textContent);
              let likeCount = (faHeart.textContent = likeNumber - 1);
              let userId = await firebase.auth().currentUser.uid;

              await firebase
                .firestore()
                .collection("post")
                .doc(id)
                .update({
                  like: likeCount,
                  likeCheck: true,
                  userUid: firebase.firestore.FieldValue.arrayRemove(userUid)
                });
              await controller.postDetail(id);
            }
          };

          if (comments) {
            // for (comment of comments) {
            //   let html = `<div class="media cmt">
            //   <img
            //     src="${comment.userPhoto}"
            //     class=""
            //     alt="..."
            //     style="width: 30px;
            //     height: 30px;
            //     border-radius: 50%;"
            //   />
            //   <div class="media-body content-comment">
            //   <h5 class="mt-0">${comment.userName}</h5>
            //   <p class="">${capitalize_Words(comment.content)}</p>
            //   </div>
            // </div>`;

            //   commentDetail.innerHTML += html;
            // }
            view.cmt();
          } else {
            let html = `<span>Chưa có bình luận nào</span>`;

            commentDetail.innerHTML += html;
          }

          foodInfo.innerHTML += `<div class="name-food-detail">${capitalize_Words(
            name
          )}</div>
          <div class="price">
            Giá tiền: <span>${numberWithCommas(
              money
            )}</span> <span style="font-size: 12px;">đ</span>
          </div>
          <div class="kind-of-food">Thể loại: <span style="color: #4a90e2;">${type.toUpperCase()}
          </span></div>
          <div class="address-food">
            Địa chỉ:
            <span style="color: #424242;"
              >${capitalize_Words(address) + " " + capitalize_Words(city)}</span
            >
          </div>
          <button class="oder-btn">Đặt mua ngay</button>
          <div class="review-food">
            <div class="media">
              <img
                src="${photoUrl}"
                class=""
                alt="..."
                style="width: 30px;
                height: 30px;
                border-radius: 50%;"
              />
              <div class="media-body">
                <h5 class="mt-0">${capitalize_Words(user)}</h5>
                <span>${capitalize_Words(review)}</span>
              </div>
            </div>
          </div>`;

          let htmlUserImg = `
          <img
            src="${photoUrl}"
            class=""
            alt="..."
            style="width: 30px;
            height: 30px;
            border-radius: 50%;"
          />`;
          userImg.innerHTML = htmlUserImg;
        }
      };

      addImg.onclick = function addImgHandler() {
        imgButtonUpdate.click();
      };

      imgButtonUpdate.onclick = function() {
        profireImgTag.src = "";
      };

      $("#img-button-update").change(function() {
        readURL(this);
      });

      formAddComment.onsubmit = formAddCommentSubmit;

      async function formAddCommentSubmit(event) {
        event.preventDefault();
        view.disable("submit-btn");
        let id = model.detail.id;
        if (model.detail) {
          let postId = model.detail.id;
          let user = firebase.auth().currentUser.displayName;
          let userPhoto = firebase.auth().currentUser.photoURL;
          let content = formAddComment.elements[0].value;

          if (content) {
            let comments = {
              content: content,
              owner: firebase.auth().currentUser.email,
              createdAt: new Date().toISOString(),
              userPhoto: userPhoto,
              userName: user
            };

            await controller.addComment(postId, comments);
            formAddComment.commentContent.value = "";
            controller.cmt(id);
            view.enable("submit-btn");
          }
        }
      }
      break;
    }
  }
};

view.setText = function(id, text) {
  document.getElementById(id).innerText = text;
};

view.allPassed = function(validateResult) {
  for (let result of validateResult) {
    if (!result) {
      return false;
    }
  }
  return true;
};
/**
 * [
 *  condition1, 'message1',
 *  condition2, 'message2',
 *  ...
 * ]
 *
 */

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $("#profile-img-tag").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
view.validate = function(idErrorTag, validateInfos) {
  for (let i = 0; i < validateInfos.length; i += 2) {
    let condition = validateInfos[i];
    let message = validateInfos[i + 1];
    if (!condition) {
      view.setText(idErrorTag, message);
      return false;
    }
  }
  view.setText(idErrorTag, "");
  return true;
};

view.removeValue = function(v) {
  v.value = "";
};

view.disable = function(id) {
  document.getElementById(id).setAttribute("disabled", true);
};

view.enable = function(id) {
  document.getElementById(id).removeAttribute("disabled");
};
function capitalize_Words(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
view.showPost = async function() {
  let dropdownMenu2 = document.getElementById("dropdownMenu2");

  let result = await db
    .collection("post")
    .where("city", "==", dropdownMenu2.innerText.toLowerCase().trim())
    // .where("type", "==", "")
    // .where("arrName", "array-contains-any", nameInputSplit)

    .orderBy("order", "desc")
    .get();
  // console.log(result.docs);
  let detailByOrderDesc = await transformDocs(result.docs);
  model.post = detailByOrderDesc;
  // console.log(model);
  // let detail = transformDocs(result.docs);
  // console.log(detailByOrderDesc);
  let postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  let tbodyContainer = document.getElementById("tbody-container");
  if (model.post && model.post.length) {
    let posts = model.post;
    for (let post of posts) {
      let {
        id: postId,
        name,
        address,
        review,
        money,
        user,
        city,
        photoUrl, // avatar user
        srcImg,
        like
      } = post;
      // let userFbdetail = firebase.auth().currentUser;
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if (user) {
      //     let photoUrl = userFbdetail.photoURL;
      //   } else {
      //     // No user is signed in.
      //   }
      // });

      let html = `
  <tr   id="${postId}" class="turn-off-rbg">
  <td class="anh">
  
    <img
      id="td-img"
      class="img"
      src="${srcImg}"
      alt=""
    />
  </td>
  <td>
    <div class="detai">
      <div id="td-name" class="ten-quan">${capitalize_Words(name)}</div>
      <div id="td-money" class="gia-tien">Giá tiền:<div class="money">${numberWithCommas(
        money
      )} Đ</div></div>
      <div class="dia-chi">
        Địa chỉ:
        <a id="td-address" class="link-dia-chi" href=""
          >${capitalize_Words(address + " " + "Thành Phố" + " " + city)}</a
        >
        </div>
        <i class="fas fa-heart">${like}</i>
      
    </div>
    
    <td>
    <img class="ava" src="${photoUrl}" alt="" />
    <div class="name-review">${capitalize_Words(user)}</div>
    <div class="comment">${capitalize_Words(review)}</div>
    <span class="chitiet" href="">Xem Chi Tiết <i class="fas fa-angle-double-right"></i></span>
  </td>
</tr>

  `;
      postContainer.innerHTML += html;
    }
    for (let post of posts) {
      let postId = post.id;
      let postCard = document.getElementById(postId);
      postCard.onclick = async function() {
        let postCardId = postCard.id;
        view.id = postCardId;

        view.showComponents("detail");
        // console.log(postCard.id);
        // let result = await db
        //   .collection("post")
        //   .doc(postCard.id)
        //   .get();
        // view.transformDoc(result);
        // console.log(view.transformDoc(result));
      };
    }
  }
  console.log(postContainer.children.length);
  if (postContainer.children.length == 0) {
    let noResult = document.getElementById("no-result");
    noResult.style.display = "block";
  } else {
    let noResult = document.getElementById("no-result");
    noResult.style.display = "none";
  }
};
view.cmt = async function() {
  let commentDetail = document.getElementById("comment-detail");
  // console.log(model.detail.comments);
  // controller.postDetailCmt();
  // view.showComponents("detail");
  commentDetail.innerHTML = "";
  let { comments } = model.detail;

  for (comment of comments) {
    let html = `<div class="media cmt">
      <img
        src="${comment.userPhoto}"
        class=""
        alt="..."
        style="width: 30px;
        height: 30px;
        border-radius: 50%;"
      />
      <div class="media-body content-comment">
      <h5 class="mt-0">${comment.userName}</h5>
      <p class="">${capitalize_Words(comment.content)}</p>
      </div>
    </div>`;

    commentDetail.innerHTML += html;
  }
};
