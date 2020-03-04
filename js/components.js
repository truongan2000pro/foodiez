const components = {};
components.register = `
<section class="register-container">
  <form id="register-form" class="register-form">
    <div class="form-header">
      <h3>Member Register</h3>
    </div>
    <div class="form-content">
      <div class="name-wrapper">
        <div class="input-wrapper">
          <input type="text" name="firstname" placeholder="Firstname">
          <div id="firstname-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
          <input type="text" name="lastname" placeholder="Lastname">
          <div id="lastname-error" class="message-error"></div>
        </div>
      </div>
      <div class="input-wrapper">
        <input type="email" name="email" placeholder="Email">
        <div id="email-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="password" placeholder="Password">
        <div id="password-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="confirmPassword" placeholder="Confirm password">
        <div id="confirm-password-error" class="message-error"></div>
      </div>
      <div id="register-error" class="message-error"></div>
      <div id="register-success" class="message-success"></div>
    </div>
    <div class="form-footer">
      <a id="register-link" href="#">Already have an account? Login</a>
      <button id="register-btn" type="submit">Register</button>
    </div>
    <div id="to-home">
          <i id="back-to-home" class="fas fa-home">HomePage</i>
        </div>
  </form>
</section>
`;
components.logIn = `
<section class="log-in-container">
  <form id="log-in-form" class="log-in-form">
    <div class="form-header">
      <h3>Member Login</h3>
    </div>
    <div class="form-content">
      <div class="input-wrapper">
        <input type="email" name="email" placeholder="Email">
        <div id="email-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="password" placeholder="Password">
        <div id="password-error" class="message-error"></div>
      </div>
      <div id="log-in-error" class="message-error"></div>
    </div>
    <div class="form-footer">
      <a id="log-in-link" href="#">Not yet have an account? Register</a>
      <button id="log-in-btn" type="submit">Log in</button>
    </div>
    <div id="to-home">
          <i id="back-to-home" class="fas fa-home">HomePage</i>
        </div>
  </form>

</section>
`;

components.nav = `
<div class="nav-wrapper">
        <nav class="nav-container">
          <div class="nav-holder">
            <div class="nav-left">
            <div id="logo" >
            </div>
            
              <div class="nav-drop-down">
                <div class="dropdown drop-on-nav">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  Hà Nội
                  </button>
                  <div class="dropdown-menu " syple=position:fixed id="dropdown-menu-nav" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button">Hà Nội</button>  
                  <button class="dropdown-item" type="button">Hồ Chí Minh</button>
                    
                  </div>
                </div>
              </div>
              <div class="phone support"> <i class="fas fa-phone-alt" aria-hidden="true"> 0584681228</i> </div>
              <div class="mail support"><i class="fas fa-envelope" aria-hidden="true"> foodiez@gmail.com</i> </div>
              <div class="search">
                <span id="nav-search">Tìm Kiếm</span>
                <input type="text" name="" id="search-input" placeholder="" />
                <span id="search-btn-cover"><i class="fas fa-search" id="search-btn"></i></span>
              </div>
            </div>
            <div class="nav-right">
              <div class="nav-btn">
                <button id="btn-log-in-nav">Đăng Nhập</button>
              </div>
              <div class="nav-btn">
                <button class="" id="btn-register-nav">Đăng Ký</button>
              </div>
              <div id="user-detail" class="user-detail-wrapper"> 
              <img src="./image/dogava.png" class="" alt="..." style="width: 30px;
              height: 30px;
              border-radius: 50%;">
              <span id="user-nav"> </span>
              
              </div>
              <div class="nav-btn">
                <button class="" id="btn-log-out-nav">Đăng Xuất</button>
              </div>
              
            </div>
          </div>
        </nav>
      </div>`;
components.home = ` <section style="min-height: 100vh" class="home-container">
<div class="banner-container">
<div class="left-banner">
<div class="slide-img">
<div
  id="carouselExampleCaptions"
  class="carousel slide"
  data-ride="carousel"
>
  <ol class="carousel-indicators">
    <li
      data-target="#carouselExampleCaptions"
      data-slide-to="0"
      class="active"
    ></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item " class="img-slide">
      <img src="image/art.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item active" class="img-slide">
      <img src="./image/chicken.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item" class="img-slide">
      <img src="./image/burger.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </div>
    </div>
  </div>
  <a
    class="carousel-control-prev"
    href="#carouselExampleCaptions"
    role="button"
    data-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#carouselExampleCaptions"
    role="button"
    data-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>


</div>
<div class="right-banner">
<div class="top food-suggestion">
<p class="text">Khám Phá Đồ Ăn >></p>

</div>
<div class="mid food-suggestion">
<p class="text" id="food-share">Hãy chia sẻ các món ngon bạn biết >></p>


</div>
<div class="bot food-suggestion"><p class="text">Khám Phá Đồ Uống >></p>

</div>
</div>
</div>


<div class="article">

        <div class="title-list-food">
          <img
            src="./ảnh-test/config-tab-mobile-3-1494405112.jfif"
            alt=""
            style="height: 30px; width: 30px;"
          />
          ĐỒ ĂN
        </div>
        <div id="list-food-wrapper" class="list-food-wrapper">


        </div>
        <div id="view-extras" class="view-all"><span id="show-more-food">Xem Toàn Bộ </span><i id="show-more-food" class="fas fa-angle-double-right"></i></div>

        <div class="article">

        <div class="title-list-food">
          <img
            src="./image/binhsua.png"
            alt=""
            style="height: 30px; width: 30px;"
          />
          ĐỒ UỐNG
        </div>
        <div id="list-drink-wrapper" class="list-food-wrapper">
  
        </div>
        <div id="view-extras-drink" class="view-all"><span id="show-more-food-drinks">Xem Toàn Bộ </span><i id="show-more-food" class="fas fa-angle-double-right"></i></div>
</section>`;
components.extras = `
<section style="min-height: 100vh" class="content-container">
<div class="content-wrapper">
  <table id="tbody-container" class="table table-light">
    <tbody id="post-container" class="full-table">

      <div id="no-result" class="no-result"> 
      <img class="img-error-holder" src="./image/monster.png" alt="">

      <div class="no-result-mess">Không có món ăn như bạn tìm <i class="fas fa-frown"></i></div> </div>
    </tbody>

  </table>
</div>
</section>

`;
components.post = `

<div id="btn-post-wrapper" class="btn-post-wrapper">
<!-- Button trigger modal -->
<button
  type="button"
  class="btn btn-primary btn-post"
  data-toggle="modal"
  id="modal-btn"
  data-target="#exampleModalCenter"
>
<i class="far fa-edit"></i>
</button>

<!-- Modal -->
<div
  class="modal fade"
  id="exampleModalCenter"
  tabindex="-1"
  role="dialog"
  aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">
          Hãy Chia Sẻ Những Món Ngon Bạn Biêt Nhé ^^
        </h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <section id="post-upload-container" class="post-container">
          <div id="post-wrapper" class="post-wrapper">
          <img src="" id="profile-img-tag" width="180px" />
          
          <i id="add-image" class="fas add-image fa-plus">Thêm Ảnh</i>
          <div id="food-img-error" class="post-message-error"></div>

          <input
                type="file"
                onchange="readURL(this);" 
                id="img-button-update"
                accept="image/*"
              />
            <div class="dropdown food-type">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              <a class="main-food-type" href="#">
          
              Đồ Ăn</a
            >
              </button>
              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
                id="drink-dropdown-menu"
              >
              <a class="dropdown-item dropdown-post" href="#">
             
              Đồ Ăn</a
            >
                
                <a class="dropdown-item dropdown-post" href="#">
               
                  Đồ Uống
                </a>
              </div>
            </div>


            <div class="food-container food-name-container">
              <i class="fd-upload-name fd fas fa-file-signature"></i>
              <input
                id="food-name"
                type="text"
                name=""
                class="food-name post"
                placeholder="Tên Món Ăn"
              />
              
              </div>
              <div id="food-name-error" class="post-message-error"></div>

            <div class="food-container food-address-container">
              <i class="fas fa-map-marker-alt fd fd-upload-location"></i>
              <input
              id="food-address"
                type="text"
                class="food-address post"
                placeholder="Địa Chỉ "
              />
              
              </div>
              <div id="food-address-error" class="post-message-error"></div>
            <div class="food-container food-review-container">
              <i class="far fd fa-clipboard"></i>

              <input
              id="food-review"
                type="text"
                class="food-review post"
                placeholder="Review Của Bạn"
              />

              
              </div>
              <div id="food-review-error" class="post-message-error"></div>
              <div class="food-container food-price-container">
              <i class="fas far fd fa-dollar-sign"></i>
              <input
              id="food-price"
                type="text"
                class="food-price post"
                placeholder="Giá Tiền"
              />
              </div>
              <div id="food-price-error" class="post-message-error"></div>

            <div class="dropdown city">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButtoncity"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hà Nội
              </button>
              <div
                class="dropdown-menu "
                id="dropdown-city-select"
                aria-labelledby="dropdownMenuButton"
              >
                <a class="dropdown-item" href="#">Hồ Chí Minh</a>
                <a class="dropdown-item" href="#">Hà Nội</a>

              </div>
              
              </div>
          </div>
          <div id="upload-success" style="display:none" class="upload-success" > Bạn đã đăng bài thành công ^.^</div>
        </section>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          id="btn-cancel-upload-post"
        >
          Close
        </button>
        <button type="submit" id="btn-upload-post" class="btn btn-primary">Upload</button>
      </div>
    </div>
  </div>
</div>

</div>



`;
components.user = `
<div class="user-wrapper">
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</div>
`;
components.loading = `<div class="flex" >
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
</div>`;
components.detail = `<section id="detail-container" style="min-height: 100vh">
<div id="detail-food" class="detail-food">
  <div id="return-extras" class="detail-address">
    <i class="fas fa-backward"> Quay Lại</i>
  </div>
  <div id="detail-food-wrapper" class="detail-food-wrapper">
    <div class="photo-pics">
      <div id="img-food-detail" class="img-food-detail"></div>
     
      <div id="comment-detail" class="comment-detail"></div>
    </div>

    <div id="food-info" class="food-info"></div>
  </div>
    <form id="form-add-comment">
      <div class="cmt-box">
        <div>
          <div id="user-img"></div>
          <div class="text-box">
            <textarea
            onkeyup="textAreaAdjust(this)"
            name="commentContent"
            placeholder="Để lại bình luận của bạn ^.^ "
            style="overflow:hidden"
            ></textarea>
          </div>
        </div>
      <button id="submit-btn" class="submit-btn" type="submit">Gửi bình luận</button>
      </div>
    </form>
  </div>
</section>`;
components.footer = `<footer class="footer">
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h1>Foodiez</h1>
      Foodiez là một ứng dụng chia sẻ món ăn mang đậm trải nghiệm cá nhân, bạn còn có thể
        đăng bán miễn phí trên Foodiez tất tật những món ăn ngon. Nhận lấy bất ngờ nhỏ
        trong 4,8 giây đầu tiên đăng bán nhé!
    </div>
    <div class="col-sm-1"></div>
    <div class="col-sm">
      <ul>
        <li>
          <h1>Liên hệ</h1>
        </li>
        <li>Hòm thư góp ý: Foodiez@gmail.com</li>
        <li>Hotline: 0584681228</li>
      </ul>
    </div>
    <div class="col-sm-1"></div>
    <div class="col-sm">
      <ul>
        <li>
          <h1>Follow Us</h1>
        </li>
        <li>Vũ Phúc Trường An</li>
        <li>Hoàng Tô Việt</li>
        <li>Dẹo Dẹo</li>
      </ul>
    </div>
  </div>
</div>
</footer>`;
components.mess = `<div class="modal" tabindex="-1" role="dialog">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Modal title</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Modal body text goes here.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary">Save changes</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>`;

components.accountInformation = `
<section class="acc-info">
      <div class="aside-left">
        <div id="user-info" class="user-info">
      
        </div>

        <div id="posted" class="posted">
          
        </div>
      </div>

      <div class="aside-right">
        <div class="update-profile">
          <form id="form-update-profile" class="form-update-profile" action="">
            <h3 class="form-update-header">Chỉnh sửa thông tin cá nhân</h3>
            <div id="input-img" class="input-img">
              <input type="file" name="img" />
            </div>
            <div class="name-wrapper">
              <div class="input-wrapper">
                <input type="text" name="firstName" placeholder="Họ" />
                <div id="first-name-error" class="message-error"></div>
              </div>
              <div class="input-wrapper">
                <input type="text" name="lastName" placeholder="Tên" />
                <div id="last-name-error" class="message-error"></div>
              </div>
            </div>
            <div class="input-wrapper">
              <input type="number" name="number" placeholder="Số điện thoại" />
              <div id="number-error" class="message-error"></div>
            </div>
            <button type="submit" id="update-profile-btn" class="update-profile-btn">Lưu thay đổi</button>
          </form>
        </div>
      </div>
    </section>`;
