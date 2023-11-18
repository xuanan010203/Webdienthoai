// Chuyển tab
function showTab(tabId) {
  // Xóa lớp 'show' và 'active' từ tất cả các tab
  var tabContent = document.getElementById("tab_img_content");
  var tabs = tabContent.getElementsByClassName("tab-pane");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("show", "active");
  }
  console.log(tabs.length);

  // Thêm lớp 'show' và 'active' cho tab được bấm vào
  var activeTab = document.getElementById(tabId);
  activeTab.classList.add("show", "active");
}

// Chuyển tab
$(document).ready(function () {
  // Xử lý khi bấm nút chuyển tab sang trái
  $(".fa-circle-chevron-left").on("click", function () {
    var activeTab = $(".tab-pane.active");
    var prevTab = activeTab.prev(".tab-pane");

    if (prevTab.length) {
      activeTab.removeClass("show active");
      prevTab.addClass("show active");
    } else {
      var lastTab = $(".tab-pane:last");
      activeTab.removeClass("show active");
      lastTab.addClass("show active");
    }
  });

  // Xử lý khi bấm nút chuyển tab sang phải
  $(".fa-circle-chevron-right").on("click", function () {
    var activeTab = $(".tab-pane.active");
    var nextTab = activeTab.next(".tab-pane");

    if (nextTab.length) {
      activeTab.removeClass("show active");
      nextTab.addClass("show active");
    } else {
      var firstTab = $(".tab-pane:first");
      activeTab.removeClass("show active");
      firstTab.addClass("show active");
    }
  });
});

// Thêm bớt số lượng
document.addEventListener("DOMContentLoaded", function () {
  // Lấy phần tử input
  var inputQuantity = document.querySelector('input[name="quantity"]');

  // Lấy nút trừ và nút cộng
  var btnMinus = document.querySelector('[data-type="minus"]');
  var btnPlus = document.querySelector('[data-type="plus"]');

  // Bắt sự kiện click cho nút trừ
  btnMinus.addEventListener("click", function () {
    var currentValue = parseInt(inputQuantity.value, 10);
    if (currentValue > 1) {
      inputQuantity.value = currentValue - 1;
    }
  });

  // Bắt sự kiện click cho nút cộng
  btnPlus.addEventListener("click", function () {
    var currentValue = parseInt(inputQuantity.value, 10);
    inputQuantity.value = currentValue + 1;
  });
});

// Xem thêm
document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("specTable");
  const expandableContent = table.querySelector(".expandable-content");
  const viewMoreBtn = document.getElementById("viewMoreBtn");

  const rowsToShowInitially = 10; // Số hàng hiển thị ban đầu
  let allRows = expandableContent.querySelectorAll("tr");
  let hiddenRows = Array.from(allRows).slice(rowsToShowInitially);

  // Ẩn các hàng thừa ban đầu
  hiddenRows.forEach((row) => {
    row.style.display = "none";
  });

  viewMoreBtn.addEventListener("click", function () {
    // Hiển thị tất cả các hàng ẩn đi khi bấm vào nút "Xem thêm"
    hiddenRows.forEach((row) => {
      row.style.display = "";
    });

    // Ẩn nút "Xem thêm" sau khi hiển thị toàn bộ bảng
    viewMoreBtn.style.display = "none";
  });
});
