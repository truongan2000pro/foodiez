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
              <div id="logo">
                <img
                  src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgLTI0IDUxMiA1MTIiIHdpZHRoPSIzMnB4Ij48cGF0aCBkPSJtOTUuMzM5ODQ0IDgyLjgwNDY4OGMtMTguOTEwMTU2IDEyLjA3ODEyNC0zNS4zMDQ2ODggMjcuNjk1MzEyLTQ4LjI4OTA2MyA0NS45OTIxODctMTYuMDkzNzUtMy41NjI1LTI5LjA5Mzc1LTE1LjM4NjcxOS0zNC4xNjQwNjItMzEuMDc0MjE5LTkuNTMxMjUtMzQuNjAxNTYyIDAtNjAuNjQ0NTMxLTkuNTMxMjUtODYuNTk3NjU2LS4zMDg1OTQtLjcyNjU2Mi0uNDYwOTM4LTEuNTA3ODEyLS40NDE0MDctMi4yOTY4NzUgMCAwIDczLjA4OTg0NCAyNi41NzQyMTkgOTIuNDI1NzgyIDczLjk3NjU2M3ptMCAwIiBmaWxsPSIjZmRkN2FkIi8+PHBhdGggZD0ibTEyMy41ODU5MzggNjcuNzEwOTM4Yy05LjgzNTkzOCA0LjIwMzEyNC0xOS4yODkwNjMgOS4yNTM5MDYtMjguMjQ2MDk0IDE1LjA5Mzc1LTE5LjMzNTkzOC00Ny40MDIzNDQtOTIuNDI1NzgyLTczLjk3NjU2My05Mi40MjU3ODItNzMuOTc2NTYzLS44ODI4MTItMjAuNTY2NDA2IDEwMS44NzEwOTQtNi44ODI4MTMgMTIwLjY3MTg3NiA1OC44ODI4MTN6bTAgMCIgZmlsbD0iI2NjNGI0YyIvPjxwYXRoIGQ9Im00MTYuNjYwMTU2IDgyLjgwNDY4OGMxOC45MTAxNTYgMTIuMDc4MTI0IDM1LjMwNDY4OCAyNy42OTUzMTIgNDguMjg5MDYzIDQ1Ljk5MjE4NyAxNi4wOTM3NS0zLjU2MjUgMjkuMDkzNzUtMTUuMzg2NzE5IDM0LjE2NDA2Mi0zMS4wNzQyMTkgOS41MzEyNS0zNC42MDE1NjIgMC02MC42NDQ1MzEgOS41MzEyNS04Ni41OTc2NTYuMzA4NTk0LS43MjY1NjIuNDYwOTM4LTEuNTA3ODEyLjQ0MTQwNy0yLjI5Njg3NSAwIDAtNzMuMDg5ODQ0IDI2LjU3NDIxOS05Mi40MjU3ODIgNzMuOTc2NTYzem0wIDAiIGZpbGw9IiNmZGQ3YWQiLz48cGF0aCBkPSJtMzg4LjQxNDA2MiA2Ny43MTA5MzhjOS44MzU5MzggNC4yMDMxMjQgMTkuMjg5MDYzIDkuMjUzOTA2IDI4LjI0NjA5NCAxNS4wOTM3NSAxOS4zMzU5MzgtNDcuNDAyMzQ0IDkyLjQyNTc4Mi03My45NzY1NjMgOTIuNDI1NzgyLTczLjk3NjU2My44ODI4MTItMjAuNTY2NDA2LTEwMS44NzEwOTQtNi44ODI4MTMtMTIwLjY3MTg3NiA1OC44ODI4MTN6bTAgMCIgZmlsbD0iI2NjNGI0YyIvPjxwYXRoIGQ9Im01MTIgMjk3LjMxNjQwNmMwIDEwNy43ODUxNTYtMTE0LjU4MjAzMSAxNjYuOTI5Njg4LTI1NiAxNjYuOTI5Njg4cy0yNTYtNTkuMTQ0NTMyLTI1Ni0xNjYuOTI5Njg4YzAtNzcuNDE3OTY4IDE2LjI0MjE4OC0xMzMuMDMxMjUgNDQuMTM2NzE5LTE3Mi4xNDA2MjUgMTIuOTg0Mzc1LTE4LjI5Njg3NSAyOS4zNzg5MDYtMzMuOTE0MDYyIDQ4LjI4OTA2Mi00NS45ODgyODEgOC45NjA5MzgtNS44NDM3NSAxOC40MTAxNTctMTAuODk0NTMxIDI4LjI0NjA5NC0xNS4wOTc2NTYgMzkuMjg1MTU2LTE3LjIxMDkzOCA4NS42Mjg5MDYtMjMuNTcwMzEzIDEzNS4zMjgxMjUtMjMuNTcwMzEzIDE0MS40MTc5NjkgMCAyNTYgNTEuMzc4OTA3IDI1NiAyNTYuNzk2ODc1em0wIDAiIGZpbGw9IiNmZjUzNjQiLz48cGF0aCBkPSJtNDg1LjUxNTYyNSAyOTguOTI5Njg4YzAgMTAxLjA1MDc4MS0xMDIuNzYxNzE5IDE1Ni40ODgyODEtMjI5LjUxNTYyNSAxNTYuNDg4Mjgxcy0yMjkuNTE1NjI1LTU1LjQzNzUtMjI5LjUxNTYyNS0xNTYuNDg4MjgxYzAtMTkyLjU5NzY1NyAxMDIuNzYxNzE5LTI0MC43NTM5MDcgMjI5LjUxNTYyNS0yNDAuNzUzOTA3czIyOS41MTU2MjUgNDguMTU2MjUgMjI5LjUxNTYyNSAyNDAuNzUzOTA3em0wIDAiIGZpbGw9IiNmYjdiNzYiLz48cGF0aCBkPSJtMjU2IDM0MC42NjAxNTZoNzAuNjIxMDk0YzExLjgwNDY4Ny0uMDAzOTA2IDIyLjgyODEyNS01LjkwMjM0NCAyOS4zNzUtMTUuNzI2NTYyIDYuNTQ2ODc1LTkuODIwMzEzIDcuNzUzOTA2LTIyLjI2NTYyNSAzLjIxNDg0NC0zMy4xNjAxNTZsLTE0LjcwNzAzMi0zNS4zMTI1Yy01LjQ4MDQ2OC0xMy4xNjAxNTctMTguMzM5ODQ0LTIxLjczNDM3Ni0zMi41OTc2NTYtMjEuNzM0Mzc2aC0xMTEuODEyNWMtMTQuMjU3ODEyIDAtMjcuMTE3MTg4IDguNTc0MjE5LTMyLjU5NzY1NiAyMS43MzQzNzZsLTE0LjcwNzAzMiAzNS4zMTI1Yy00LjUzOTA2MiAxMC44OTQ1MzEtMy4zMzIwMzEgMjMuMzM5ODQzIDMuMjE0ODQ0IDMzLjE2MDE1NiA2LjU0Njg3NSA5LjgyNDIxOCAxNy41NzAzMTMgMTUuNzIyNjU2IDI5LjM3NSAxNS43MjY1NjJ6bTAgMCIgZmlsbD0iI2ZkZDdhZCIvPjxwYXRoIGQ9Im0yMjAuNjkxNDA2IDMwNS4zNDc2NTZjLTQuODc4OTA2IDAtOC44MjgxMjUtMy45NTMxMjUtOC44MjgxMjUtOC44MjgxMjV2LTE3LjY1MjM0M2MwLTQuODc1IDMuOTQ5MjE5LTguODI4MTI2IDguODI4MTI1LTguODI4MTI2IDQuODc1IDAgOC44MjQyMTkgMy45NTMxMjYgOC44MjQyMTkgOC44MjgxMjZ2MTcuNjUyMzQzYzAgNC44NzUtMy45NDkyMTkgOC44MjgxMjUtOC44MjQyMTkgOC44MjgxMjV6bTAgMCIgZmlsbD0iI2FmODA2NiIvPjxwYXRoIGQ9Im0yOTEuMzA4NTk0IDMwNS4zNDc2NTZjLTQuODc1IDAtOC44MjQyMTktMy45NTMxMjUtOC44MjQyMTktOC44MjgxMjV2LTE3LjY1MjM0M2MwLTQuODc1IDMuOTQ5MjE5LTguODI4MTI2IDguODI0MjE5LTguODI4MTI2IDQuODc4OTA2IDAgOC44MjgxMjUgMy45NTMxMjYgOC44MjgxMjUgOC44MjgxMjZ2MTcuNjUyMzQzYzAgNC44NzUtMy45NDkyMTkgOC44MjgxMjUtOC44MjgxMjUgOC44MjgxMjV6bTAgMCIgZmlsbD0iI2FmODA2NiIvPjxwYXRoIGQ9Im0yMzguMzQzNzUgMTY0LjEwNTQ2OWMwIDE0LjYyODkwNi0xMS44NTU0NjkgMjYuNDg0Mzc1LTI2LjQ4MDQ2OSAyNi40ODQzNzUtMTQuNjI4OTA2IDAtMjYuNDg0Mzc1LTExLjg1NTQ2OS0yNi40ODQzNzUtMjYuNDg0Mzc1IDAtMTQuNjI1IDExLjg1NTQ2OS0yNi40ODA0NjkgMjYuNDg0Mzc1LTI2LjQ4MDQ2OSAxNC42MjUgMCAyNi40ODA0NjkgMTEuODU1NDY5IDI2LjQ4MDQ2OSAyNi40ODA0Njl6bTAgMCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0yMjAuNjkxNDA2IDE2NC4xMDU0NjljMCA0Ljg3ODkwNi0zLjk1MzEyNSA4LjgyODEyNS04LjgyODEyNSA4LjgyODEyNXMtOC44MjgxMjUtMy45NDkyMTktOC44MjgxMjUtOC44MjgxMjVjMC00Ljg3NSAzLjk1MzEyNS04LjgyNDIxOSA4LjgyODEyNS04LjgyNDIxOXM4LjgyODEyNSAzLjk0OTIxOSA4LjgyODEyNSA4LjgyNDIxOXptMCAwIiBmaWxsPSIjMmMyZjM4Ii8+PHBhdGggZD0ibTI2NC44MjgxMjUgNDAyLjQ1MzEyNWgtMTcuNjU2MjVjLTQuODc1IDAtOC44MjgxMjUtMy45NTMxMjUtOC44MjgxMjUtOC44MjgxMjVzMy45NTMxMjUtOC44MjgxMjUgOC44MjgxMjUtOC44MjgxMjVoMTcuNjU2MjVjNC44NzUgMCA4LjgyODEyNSAzLjk1MzEyNSA4LjgyODEyNSA4LjgyODEyNXMtMy45NTMxMjUgOC44MjgxMjUtOC44MjgxMjUgOC44MjgxMjV6bTAgMCIgZmlsbD0iI2ZmNTM2NCIvPjxwYXRoIGQ9Im0xMjMuNTg1OTM4IDI3OC44NjcxODhjMC0xNC42Mjg5MDctMTkuNzYxNzE5LTI2LjQ4NDM3Ni00NC4xMzY3MTktMjYuNDg0Mzc2LTI0LjM3ODkwNyAwLTQ0LjE0MDYyNSAxMS44NTU0NjktNDQuMTQwNjI1IDI2LjQ4NDM3NiAwIDE0LjYyNSAxOS43NjE3MTggMjYuNDgwNDY4IDQ0LjE0MDYyNSAyNi40ODA0NjggMjQuMzc1IDAgNDQuMTM2NzE5LTExLjg1NTQ2OCA0NC4xMzY3MTktMjYuNDgwNDY4em0wIDAiIGZpbGw9IiNmZGQ3YWQiLz48cGF0aCBkPSJtNDc2LjY5MTQwNiAyNzguODY3MTg4YzAtMTQuNjI4OTA3LTE5Ljc2MTcxOC0yNi40ODQzNzYtNDQuMTQwNjI1LTI2LjQ4NDM3Ni0yNC4zNzUgMC00NC4xMzY3MTkgMTEuODU1NDY5LTQ0LjEzNjcxOSAyNi40ODQzNzYgMCAxNC42MjUgMTkuNzYxNzE5IDI2LjQ4MDQ2OCA0NC4xMzY3MTkgMjYuNDgwNDY4IDI0LjM3ODkwNyAwIDQ0LjE0MDYyNS0xMS44NTU0NjggNDQuMTQwNjI1LTI2LjQ4MDQ2OHptMCAwIiBmaWxsPSIjZmRkN2FkIi8+PHBhdGggZD0ibTMyNi42MjEwOTQgMTY0LjEwNTQ2OWMwIDE0LjYyODkwNi0xMS44NTU0NjkgMjYuNDg0Mzc1LTI2LjQ4NDM3NSAyNi40ODQzNzUtMTQuNjI1IDAtMjYuNDgwNDY5LTExLjg1NTQ2OS0yNi40ODA0NjktMjYuNDg0Mzc1IDAtMTQuNjI1IDExLjg1NTQ2OS0yNi40ODA0NjkgMjYuNDgwNDY5LTI2LjQ4MDQ2OSAxNC42Mjg5MDYgMCAyNi40ODQzNzUgMTEuODU1NDY5IDI2LjQ4NDM3NSAyNi40ODA0Njl6bTAgMCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0zMDguOTY0ODQ0IDE2NC4xMDU0NjljMCA0Ljg3ODkwNi0zLjk1MzEyNSA4LjgyODEyNS04LjgyODEyNSA4LjgyODEyNXMtOC44MjgxMjUtMy45NDkyMTktOC44MjgxMjUtOC44MjgxMjVjMC00Ljg3NSAzLjk1MzEyNS04LjgyNDIxOSA4LjgyODEyNS04LjgyNDIxOXM4LjgyODEyNSAzLjk0OTIxOSA4LjgyODEyNSA4LjgyNDIxOXptMCAwIiBmaWxsPSIjMmMyZjM4Ii8+PC9zdmc+Cg=="
                />
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
  <div class="top food-suggestion">abc</div>
  <div class="mid food-suggestion">ád</div>
  <div class="bot food-suggestion">zxc</div>
</div>
</div>
</section>`;
