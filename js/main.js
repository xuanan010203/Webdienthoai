const products = {
  product: [
    {
      id: 1,
      img: "../img/Product/product_1.webp",
      name: "IPhone 14 Pro Max 128GB",
      price: "23.890.000",
      start: 4.6,
      brand: "iphone",
      listImg: ["",""],
    },
    {
      id: 2,
      img: "../img/Product/product_2.webp",
      name: "Samsung Galaxy A34 5G 256GB",
      price: "6.620.000",
      start: 4.2,
      brand: "samsung",
    },
    {
      id: 3,
      img: "../img/Product/product_3.webp",
      name: "OPPO A57 128GB",
      price: "3.330.000",
      start: 4.2,
      brand: "oppo",
    },
    {
      id: 4,
      img: "../img/Product/product_4.webp",
      name: "Xiaomi Redmi Note 12 8GB",
      price: "4.270.000",
      start: 4.6,
      brand: "xiaomi",
    },
    {
      id: 5,
      img: "../img/Product/product_5.webp",
      name: "iPhone 11 64GB",
      price: "8.640.000",
      start: 4.1,
      brand: "iphone",
    },
    {
      id: 6,
      img: "../img/Product/product_6.webp",
      name: "Samsung Galaxy S23 5G 128GB",
      price: "15.510.000",
      start: 4.6,
      brand: "samsung",
    },
    {
      id: 7,
      img: "../img/Product/product_7.webp",
      name: "Xiaomi 13 Lite 5G",
      price: "7.980.000",
      start: 4.1,
      brand: "xiaomi",
    },
    {
      id: 8,
      img: "../img/Product/product_8.webp",
      name: " Vivo Y16 128GB",
      price: "3.870.000",
      start: 3.9,
      brand: "vivo",
    },
    {
      id: 9,
      img: "../img/Product/product_9.webp",
      name: "realme C55 6GB",
      price: "23.890.000",
      start: 4.6,
      brand: "realme",
    },
    {
      id: 10,
      img: "../img/Product/product_10.webp",
      name: " realme C55 6GB",
      price: "3.870.000",
      start: 4.6,
      brand: "realme",
    },
    {
      id: 11,
      img: "../img/Product/product_11.webp",
      name: "Samsung Galaxy A14 6GB",
      price: "3.460.000",
      start: 4.6,
      brand: "samsung",
    },
    {
      id: 12,
      img: "../img/Product/product_12.webp",
      name: "Samsung Galaxy A13 6GB",
      price: "2.920.000",
      start: 4.6,
      brand: "samsung",
    },
    {
      id: 13,
      img: "../img/Product/product_13.webp",
      name: "OPPO Find N2 Flip",
      price: "19.990.000",
      start: 4.6,
      brand: "oppo",
    },
    {
      id: 14,
      img: "../img/Product/product_14.webp",
      name: "Xiaomi Redmi 12C",
      price: "2.990.000",
      start: 4.6,
      brand: "xiaomi",
    },
    {
      id: 15,
      img: "../img/Product/product_15.webp",
      name: "Samsung Galaxy S23 Ultra 5",
      price: "26.990.000",
      start: 4.6,
      brand: "samsung",
    },
    {
      id: 16,
      img: "../img/Product/product_16.webp",
      name: "Vivo Y35",
      price: "6.290.000",
      start: 4.6,
      brand: "vivo",
    },
    {
      id: 17,
      img: "../img/Product/product_17.webp",
      name: "Realme C30s",
      price: "1.890.000",
      start: 4.6,
      brand: "realme",
    },
    {
      id: 18,
      img: "../img/Product/product_18.webp",
      name: "Samsung Galaxy S23+ 5G",
      price: "22.990.000",
      start: 4.6,
      brand: "samsung",
    },
    {
      id: 19,
      img: "../img/Product/product_19.webp",
      name: "Samsung Galaxy Z Fold4 5G",
      price: "34.990.000",
      start: 4.6,
      brand: "samsung",
    },
    {
      id: 20,
      img: "../img/Product/product_20.webp",
      name: "TCL 30+",
      price: "3.190.000",
      start: 4.6,
      brand: "nokia",
    },
    {
      id: 21,
      img: "../img/Product/product_21.webp",
      name: "OPPO A16K",
      price: "1.890.000",
      start: 4.6,
      brand: "oppo",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const addHTML = async () => {
    // Hàm fetch và cập nhật header
    const fetchHeader = async () => {
      const response = await fetch("../html/--header.html");
      const data = await response.text();
      const headerElements = document.querySelector(".header");
      headerElements.innerHTML = data;
    };

    // Hàm fetch và cập nhật footer
    const fetchFooter = async () => {
      const response = await fetch("../html/--footer.html");
      const data = await response.text();
      const footerElements = document.querySelector(".footer");
      footerElements.innerHTML = data;
    };

    // Gọi fetchHeader và fetchFooter lần lượt
    await fetchHeader();
    await fetchFooter();

    // Sau khi header và footer được tải xong, bạn có thể gọi các hàm khác ở đây
    Home();
    Login();
  };

  addHTML();
});

const Home = async () => {
  const productList1 = document.querySelector(".product_list_1");
  const productList2 = document.querySelector(".product_list_2");
  const productList3 = document.querySelector(".product_list_3");

  const items_1 = products.product.map((item, index) => {
    if (index <= 4) {
      return `<li class="list-group-item">
    <a href="${item.link}">
      <img
        style="width: 207px; height: 207px"
        src=${item.img}
        alt=""
    /></a>
    <div class="content-items">
      <h6 >${item.name}</h6>
      <strong class="price"> ${item.price} </strong>
      <p class="text-decoration-line-through">${item.price}</p>
      <div class="star">Đánh giá: ${item.start}</div>
    </div>
  </li>`;
    }
  });

  const items_2 = products.product.map((item, index) => {
    if (index >= 5 && index <= 9) {
      return `<li class="list-group-item">
      <a href="${item.link}">
        <img
          style="width: 207px; height: 207px"
          src=${item.img}
          alt=""
      /></a>
      <div class="content-items">
      <h6 >${item.name}</h6>
      <strong class="price"> ${item.price} </strong>
      <p class="text-decoration-line-through">${item.price}</p>
      <div class="star">Đánh giá: ${item.start}</div>
    </div>
    </li>`;
    }
  });

  const items_3 = products.product.map((item, index) => {
    if (index >= 10 && index <= 14) {
      return `<li class="list-group-item">
      <a href="${item.link}">
        <img
          style="width: 207px; height: 207px"
          src=${item.img}
          alt=""
      /></a>
      <div class="content-items">
      <h6 >${item.name}</h6>
      <strong class="price"> ${item.price} </strong>
      <p class="text-decoration-line-through">${item.price}</p>
      <div class="star">Đánh giá: ${item.start}</div>
    </div>
    </li>`;
    }
  });

  const itemsHTML_1 = items_1.join("");
  const itemsHTML_2 = items_2.join("");
  const itemsHTML_3 = items_3.join("");
  productList1.innerHTML = itemsHTML_1;
  productList2.innerHTML = itemsHTML_2;
  productList3.innerHTML = itemsHTML_3;
};

const Login = () => {
  const userName = document.querySelector(".login span");
  const userCurrent = document.querySelector(".login");
  const userLogout = document.querySelector(".logout");
  const userSelect = document.querySelector(".user-select");

  let data = JSON.parse(localStorage.getItem("user_info"));
  if (data && data.loged == 1) {
    userName.innerText = data.user;
  } else {
    userSelect.style.display = "none";
  }
  if (data.loged == 1) {
    userCurrent.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
  userLogout.addEventListener("click", () => {
    let userDataString = localStorage.getItem("user_info");
    let userData = JSON.parse(userDataString);
    if (userData) {
      userData.loged = 0;
    }
    let updatedUserDataString = JSON.stringify(userData);
    localStorage.setItem("user_info", updatedUserDataString);
    location.reload();
  });
};

//--- call funcition

// Link ảnh trong banner chuyển động
function changeSlide(slideIndex) {
  var demoCarousel = new bootstrap.Carousel(document.getElementById("demo"));
  demoCarousel.to(slideIndex);
}
