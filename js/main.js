const products = {
  product: [
    {
      id: 1,
      img: "../img/Product/product_1.webp",
      name: "IPhone 14 Pro Max 128GB",
      price: "23.890.000",
      start: 4.6,
      brand: "iphone",
      link: "../html/product_detail.html"
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
  addHTML();

  function addHTML() {
    fetch("../html/--header.html")
      .then((response) => response.text())
      .then((data) => {
        const headerElements = document.querySelector(".header");
        headerElements.innerHTML = data;
      });

    fetch("../html/--footer.html")
      .then((response) => response.text())
      .then((data) => {
        const footerElements = document.querySelector(".footer");
        footerElements.innerHTML = data;
      });
  }
});

const home = async () => {
  const productList1 = document.querySelector(".product_list_1");
  const productList2 = document.querySelector(".product_list_2");
  const productList3 = document.querySelector(".product_list_3");
  const items = products.product.map((item, index) => {
    if (index <= 4) {
      return `<li class="list-group-item">
    <a href="${item.link}">
      <img
        style="width: 207px; height: 207px"
        src=${item.img}
        alt=""
    /></a>
  </li>`;
    }
  });
  const itemsHTML = items.join("");
  productList1.innerHTML = itemsHTML;
  productList2.innerHTML = itemsHTML;
  productList3.innerHTML = itemsHTML;
};

//--- call funcition
home();
