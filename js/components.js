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
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  <i class="fas fa-user-circle"></i>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button">Action</button>
                    <button class="dropdown-item" type="button">
                      Another action
                    </button>
                    <button class="dropdown-item" type="button">
                      Something else here
                    </button>
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
            </div>
          </div>
        </nav>
      </div>`;
components.home = ` <section class="home-container">
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
    <div class="carousel-item active" class="img-slide">
      <img src="image/art.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item" class="img-slide">
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
<p class="text">Khám Phá Đồ Ăn</p>

<a class="post" href="">Xem Thêm</a>
</div>
<div class="mid food-suggestion">
<p class="text">Hãy chia sẻ các món ngon bạn biết</p>

<a class="post" href="">Chia Sẻ Ngay</a>

</div>
<div class="bot food-suggestion"><p class="text">Khám Phá Đồ Uống</p>

<a class="post" href="">Xem Thêm</a>
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
        <div class="list-food-wrapper">
          <div class="food-wrapper">
            <figure class="img-food"><img src="./image/chicken.jpg" alt="" /></figure>
            <div class="food-contents">
              <div class="name-food">
                tên đồ ăn
              </div>
              <div class="address">
                địa chỉ
              </div>
            </div>
          </div>
          <div class="food-wrapper">
            <figure class="img-food"><img src="./image/spicy.jpg" alt="" /></figure>
            <div class="food-contents">
              <div class="name-food">
                tên đồ ăn
              </div>
              <div class="address">
                địa chỉ
              </div>
            </div>
          </div>
          <div class="food-wrapper">
            <figure class="img-food"><img src="./image/brooke-lark-V4MBq8kue3U-unsplash.jpg" alt=""  /></figure>
            <div class="food-contents">
              <div class="name-food">
                tên đồ ăn
              </div>
              <div class="address">
                địa chỉ
              </div>
            </div>
          </div>
        </div>
        <div id="view-extras" class="view-all"><i class="fas fa-angle-double-right">xem toàn bộ</i></div>
      </div>

</section>`;
components.extras = `
<section class="content-container">

<div class="content-wrapper">
<table class="table table-light">
  <tbody class="">
    <tr class="turn-off-rbg">
      <td class="anh">
        <img
          class="img"
          src="../foodiez/image/70389608_555107088561992_7772162248927084544_n.jpg"
          alt=""
        />
      </td>
      <td>
        <div class="detai">
          <div class="ten-quan">Pizza hut</div>
          <div class="gia-tien">Giá tiền:50.000đ</div>
          <div class="dia-chi">
            Địa chỉ:
            <a class="link-dia-chi" href="">day la dia chi</a>
          </div>
        </div>
      </td>
      <td>Day la cho nguoi ta review</td>
    </tr>
    <tr class="turn-off-rbg">
      <td>
        <img
          class="img"
          src="../foodiez/image/70389608_555107088561992_7772162248927084544_n.jpg"
          alt=""
        />
      </td>
      <td>
        <div class="detai">
          <div class="ten-quan">The coffee house</div>
          <div class="gia-tien">Giá tiền:50.000đ</div>
          <div class="dia-chi">
            Địa chỉ:
            <a class="link-dia-chi" href="">day la dia chi</a>
          </div>
        </div>
      </td>

      <td>Day la cho nguoi ta review</td>
    </tr>
    <tr class="turn-off-rbg">
      <td>
        <img
          class="img"
          src="../foodiez/image/burger-and-vegetables-placed-on-brown-wood-surface-1565982.jpg"
          alt=""
        />
      </td>
      <td>
        <div class="detai">
          <div class="ten-quan">Kafa cafe</div>
          <div class="gia-tien">Giá tiền:50.000đ</div>
          <div class="dia-chi">
            Địa chỉ:
            <a class="link-dia-chi" href="">day la dia chi</a>
          </div>
        </div>
      </td>

      <td>Day la cho nguoi ta review</td>
    </tr>
  </tbody>
</table>
</div>


</section>

`;
