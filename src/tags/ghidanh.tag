<ghidanh>

        <div class="grid-middle navbar" id="header">
                <div class="col-3 no-padding logo">
                    <a href=""><img src="./src/Vector5.png" alt=""></a>
                </div>
                <div class="col-6 no-padding navbar-menu">
                    <a id="font" href="#">Các bộ môn
                        <span></span></a>
    
                    <a id="font" href="#">Đăng ký HLV
                        <span></span></a>
    
                    <a id="font" href="#">Đóng góp
                        <span></span></a>
                </div>
                <div if={!opts.displayName} class="col-3 no-padding navbar-user">
                    <span></span>
                </div>
            </div>




    <div id="background"></div>
    <div id="signIn" class="grid-middle-center">
        <div class="sign-in-content" style="position: absolute; right: 300px;" >
                <p id="h1" style="text-align: center;" class="fullwidth">Ghi Danh</p>
        
                <form action="" id="sign_up_form" >
                    <div>
                    
                        <label for="">Tên</label>
                        <input class="fullwidth" type="text" placeholder="Tên của bạn" id="name_signup" required>
                        
                        <label for="">Email</label>
                        <input class="fullwidth" type="email" placeholder="Email của bạn" id="email_signup" required>
                        
                        <label for="">Số điện thoại</label>
                        <input class="fullwidth" type="number" placeholder="Số điện thoại" id="sdt_signup" required>
                        
                        <label for="">Địa chỉ nhà riêng</label>
                        <input class="fullwidth" type="text" placeholder="Địa chỉ của bạn" id="address_signup" required>
                        
                        <label for="">Địa chỉ Facebook</label>
                        <input class="fullwidth" type="text" placeholder="Địa chỉ facebook của bạn" id="facebook_signup" required>

                        <button class=" btn fullwidth">Ghi Danh</button>
                        <p style="margin-top: 30px">*Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất*</p>
                        
                        
                    </div>
                
                </form>
        </div>
        
        
    </div>
</ghidanh>