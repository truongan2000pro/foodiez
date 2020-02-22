const view = {
  currentScreen: null
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
      app.innerHTML = components.nav + components.home + components.post;

      let searchBtn = document.getElementById("search-btn-cover");

      let searchInput = document.getElementById("search-input");

      let logo = document.getElementById("logo");

      let viewExtras = document.getElementById("view-extras");

      let imgUploadWrapper = document.getElementById("img-upload-wrapper");

      let imgButtonUpdate = document.getElementById("img-button-update");

      let foodShare = document.getElementById("food-share");

      let modalBtn = document.getElementById("modal-btn");

      let btnPostWrapper = document.getElementById("btn-post-wrapper");

      let imgUpdate = document.getElementById("img-update");

      let profireImgTag = document.getElementById("profile-img-tag");

      let addImg = document.getElementById("add-image");

      let dropdownCitySelect = document.getElementById("dropdown-city-select");

      let dropdownMenuButtoncity = document.getElementById(
        "dropdownMenuButtoncity"
      );
      console.dir(dropdownMenuButton);

      console.dir(dropdownCitySelect.children[0]);

      for (let i = 0; i < dropdownCitySelect.children.length; i++) {
        dropdownCitySelect.children[i].onclick = function() {
          dropdownMenuButtoncity.textContent =
            dropdownCitySelect.children[i].text;
        };
      }

      addImg.onclick = function addImgHandler() {
        imgButtonUpdate.click();
      };

      imgButtonUpdate.onclick = function() {
        profireImgTag.src = "";
      };

      function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function(e) {
            $("#profile-img-tag").attr("src", e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
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
      searchBtn.onclick = function iconClickHandler() {
        console.log(searchInput.value);
      };
      let navLogInBtn = document.getElementById("btn-log-in-nav");

      let navRegisterBtn = document.getElementById("btn-register-nav");

      navLogInBtn.onclick = function logInLinkHandler() {
        view.showComponents("logIn");
      };

      navRegisterBtn.onclick = function registerLinkHandler() {
        view.showComponents("register");
      };
      viewExtras.onclick = function viewAllClickHandler() {
        view.showComponents("extras");
      };
      break;
    }
    case "extras": {
      let app = document.getElementById("app");
      app.innerHTML = components.nav + components.extras + components.post;
      let searchBtn = document.getElementById("search-btn-cover");

      let searchInput = document.getElementById("search-input");

      let logo = document.getElementById("logo");

      let imgUploadWrapper = document.getElementById("img-upload-wrapper");

      let imgButtonUpdate = document.getElementById("img-button-update");

      let addImg = document.getElementById("add-image");

      let profireImgTag = document.getElementById("profile-img-tag");

      let dropdownCitySelect = document.getElementById("dropdown-city-select");

      let dropdownMenuButtoncity = document.getElementById(
        "dropdownMenuButtoncity"
      );
      console.dir(dropdownMenuButton);

      console.dir(dropdownCitySelect.children[0]);

      for (let i = 0; i < dropdownCitySelect.children.length; i++) {
        dropdownCitySelect.children[i].onclick = function() {
          dropdownMenuButtoncity.textContent =
            dropdownCitySelect.children[i].text;
        };
      }

      addImg.onclick = function addImgHandler() {
        imgButtonUpdate.click();
      };

      imgButtonUpdate.onclick = function() {
        profireImgTag.src = "";
      };

      function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function(e) {
            $("#profile-img-tag").attr("src", e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
      $("#img-button-update").change(function() {
        readURL(this);
      });

      logo.onclick = function logoClickHandler() {
        view.showComponents("home");
      };
      // console.dir(searchInput);
      searchBtn.onclick = function iconClickHandler() {
        console.log(searchInput.value);
      };
      let navLogInBtn = document.getElementById("btn-log-in-nav");

      let navRegisterBtn = document.getElementById("btn-register-nav");

      navLogInBtn.onclick = function logInLinkHandler() {
        view.showComponents("logIn");
      };

      navRegisterBtn.onclick = function registerLinkHandler() {
        view.showComponents("register");
      };
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

view.disable = function(id) {
  document.getElementById(id).setAttribute("disabled", true);
};

view.enable = function(id) {
  document.getElementById(id).removeAttribute("disabled");
};
