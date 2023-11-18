const footer =document.querySelector('.footer')
let html = `<div class="container">
<div class="mt-5 p-4 bg-light text-black ">

    <div class="row">
        <div class="col-4">
            <h4><a href="">Thông tin chính sách</a></h4>
            <ul>
                <li><a href="">Điều khoản sử dụng</a></li>
                <li><a href="">Chính sách bảo hành</a></li>
                <li><a href="">Chính sách bảo mật</a></li>
                <li><a href="">Chính sách giải quyết khiếu nại</a></li>
                <li><a href="">Câu hỏi thường gặp</a></li>
            </ul>
        </div>
        <div class="col-4">
            <h4><a href="">Thanh toán miễn phí</a></h4>
            <ul class="list-group">
                <li><a href="">
                        <img src="../img/thanhtoan/logo-master.png" alt="">
                    </a>
                    <a href="">
                        <img src="../img/thanhtoan/logo-visa.png" alt=""></a>
                </li>
                <li><a href="">
                        <img src="../img/thanhtoan/logo-jcb.png" alt="">
                    </a>
                    <a href=""><img src="../img/thanhtoan/logo-samsungpay.png" alt=""></a>
                </li>
                <li>
                    <a href="">
                        <img src="../img/thanhtoan/logo-vnpay.png" alt="">
                    </a>
                    <a href="">
                        <img src="../img/thanhtoan/logo-atm.png" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-4">
            <h4><a href="">Hình thức vận chuyển</a></h4>
            <ul>
                <li>
                    <a href="">
                        <img src="../img/vanchuyen/nhattin.jpg" alt="">
                    </a>
                    <a href="">
                        <img src="../img/vanchuyen/vnpost.jpg" alt="">
                    </a>
                </li>

            </ul>
        </div>
        
    </div>
    <!-- infor -->
    <div class="infor d-flex flex-column justify-content-center align-items-center">
        <p><strong>
                CÔNG TY CỔ PHẦN STORE
            </strong></p>
        <p>Giấy chứng nhận kinh doanh số 010203, Cấp ngày 01/01/2023</p>
    </div>
</div>



</div>


`

footer.insertAdjacentHTML("afterend", html);