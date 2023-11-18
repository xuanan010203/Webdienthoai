const header = document.querySelector(".header");

let html = `<div class=" bg-black w-100" >
<img class="container" src="../img/banner_header.webp" alt="">
</div>

<nav class="navbar navbar-expand-sm navbar-dark p-0">
<div class="container-fluid container">
    <a class="navbar-brand p-0 d-flex align-items-center" style="width:190px;height:60px"
        href="../html/index.html"><img class="w-100" src="../img/logo.png" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-between" id="mynavbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link text-dark" href="../html/index.html">Trang chủ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="../html/gioithieu.html">Giới thiệu</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="../html/tintuc.html">Tin tức</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="../html/hotro.html">Hỗ trợ</a>
            </li>
        </ul>




        <div class="search d-flex align-items-center ">
            <input class="timkiem m-2" type="text" placeholder="Bạn cần tìm gì?">
            <i class="fas fa-search"></i>
        </div>

        <ul class="navbar-nav d-flex">
            <li class="nav-item">
                <a class="nav-link text-dark" href="javascript:void(0)">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Giỏ hàng
                </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link text-dark" href="../html/login.html">
                    <i class="fa-regular fa-user"></i>
                    ${
                      JSON.parse(localStorage.getItem("user_info")).user ||
                      "Tài khoản"
                    }
                </a>
            </li>
        </ul>
    </div>
</div>
</nav>`;
header.insertAdjacentHTML("afterend", html);
