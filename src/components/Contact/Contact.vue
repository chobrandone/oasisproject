<template>
    <div>
        <!--? contact-form start -->
    <section class="contact-form-area section-bg  pt-115 pb-120 fix mt-5 mb-5" data-background="../../assets/img/gallery/section_bg02.jpg">
        <div class="container">
            <div class="row justify-content-end">
                <!-- Contact wrapper -->
                <div class="col-xl-8 col-lg-9 mt-5 mb-5">
                    <div class="contact-form-wrapper">
                        <!-- From tittle -->
                        <div class="row">
                            <div class="col-lg-12">
                                <!-- Section Tittle -->
                                <div class="section-tittle mb-50 text-left">
                                    <span>Contact us</span>
                                    <h2>Request for App Download</h2>
                                    <p>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for.</p>
                                </div>
                            </div>
                        </div>
                        <!-- form -->
                        <form action="#" class="contact-form">
                            <div class="row ">
                                <div class="col-lg-6 col-md-6">
                                    <div class="input-form">
                                        <input type="text" placeholder="Name">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="input-form">
                                        <input type="text" placeholder="Email">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="input-form">
                                        <input type="text" placeholder="Contact Number">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                      <div class="form-group">
                                        <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                                    </div>
                                </div>
                                
                                <!-- Radio Button -->
                                <div class="col-lg-12">
                                    <div class="radio-wrapper mb-30 mt-15">
                            
                                        <div class="select-radio">
                                            <div class="radio">
                                                <input id="radio-1" name="radio" type="radio" checked="">
                                                <label for="radio-1" class="radio-label">Male</label>
                                            </div>
                                            <div class="radio">
                                                <input id="radio-2" name="radio" type="radio">
                                                <label for="radio-2" class="radio-label">Female</label>
                                            </div>
                                            
                                        </div>
                                    </div> 
                                </div>
                                <!-- Button -->
                                <div class="col-lg-12">
                                    <button name="submit" class="submit-btn">Send</button>
                                </div>
                            </div>
                        </form>	
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- contact-form end -->
        
    </div>
</template>
<script>
export default {
    name:"Contact",
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
section{
    margin-top: 100px;
}
.submit-btn {
    width: 100%;
    background: #EDC750;
    padding: 19px 44px;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    font-family: "Barlow", sans-serif;
    font-size: 14px;
    border-radius: 5px;
    border: 0;
}
.section-tittle span {
    font-size: 18px;
    display: block;
    color: #EDC750;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 17px;
}
.section-tittle h2 {
    font-size: 50px;
    display: block;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 1.3;
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Teko", sans-serif;
    color: #2c234d;
    margin-top: 0px;
    font-style: normal;
    font-weight: 500;
    text-transform: normal;
}

.section-bg {
    background-image: url("../../assets/img/gallery/watch.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    
}
.contact-form-area .contact-form-wrapper {
    background: #f5f5f5;
    padding: 80px;
    border-radius: 8px
}

@media (max-width: 575px) {
    .contact-form-area .contact-form-wrapper {
        padding: 20px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .contact-form-area .contact-form-wrapper {
        padding: 30px
    }
}

.contact-form-area .contact-form-wrapper form.contact-form input {
    height: 60px;
    width: 100%;
    color: #777777;
    font-size: 18px;
    font-weight: 400;
    padding: 9px 33px 9px 32px;
    border-radius: 5px;
    border: 1px solid #efebeb;
    background: #fff;
    margin-bottom: 20px
}
.contact-form-area .contact-form-wrapper form.contact-form textarea {
    height: auto;
    width: 100%;
    color: #777777;
    font-size: 18px;
    font-weight: 400;
    padding: 9px 33px 9px 32px;
    border-radius: 5px;
    border: 1px solid #efebeb;
    background: #fff;
    margin-bottom: 20px
}

@media (max-width: 575px) {
    .contact-form-area .contact-form-wrapper form.contact-form input {
        margin-bottom: 20px
    }
    section{
    margin-top: 10px;
}
.section-tittle h2 {
    font-size: 30px;
    display: block;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 1.3;
}
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .contact-form-area .contact-form-wrapper form.contact-form input {
        padding: 9px 33px 9px 25px;
        margin-bottom: 20px
    }
}

.contact-form-area .contact-form-wrapper form.contact-form input::placeholder {
    color: #616875
}

@media (max-width: 575px) {
    .contact-form-area .contact-form-wrapper form.contact-form input::placeholder {
        font-size: 14px
    }
}




.contact-form-area .contact-form-wrapper form.contact-form .nice-select::after {
    border-bottom: 1px solid #a9b6cd;
    border-right: 1px solid #a9b6cd;
    height: 12px;
    width: 12px;
    margin-top: -7px;
    right: 29px
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper {
    display: flex
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper>label {
    position: relative;
    bottom: -8px;
    color: #2c234d;
    font-weight: 700
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper {
        display: block
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper {
        display: block
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper {
        display: block
    }
}

@media (max-width: 575px) {
    .contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper {
        display: block
    }
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper .select-radio .radio {
    margin: 0.5rem;
    display: inline-block
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper .select-radio .radio label {
    cursor: pointer;
    margin-left: -2px;
    font-size: 14px;
    color: #677294
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper .select-radio .radio label {
        font-size: 15px
    }
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper .select-radio .radio input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper .select-radio .radio input[type="radio"]+.radio-label:before {
    content: '';
    background: #f4f4f4;
    border-radius: 100%;
    border: 1px solid #b4b4b4;
    display: inline-block;
    width: 1.4em;
    height: 1.4em;
    position: relative;
    top: 3px;
    margin-right: 17px;
    vertical-align: top;
    cursor: pointer;
    text-align: center;
    transition: all 250ms ease
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper .select-radio .radio input[type="radio"]:checked+.radio-label:before {
    background-color: #EDC750;
    box-shadow: inset 0 0 0 4px #f4f4f4
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper .select-radio .radio input[type="radio"]:focus+.radio-label:before {
    outline: none;
    border-color: #EDC750;
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper .select-radio .radio input[type="radio"]:disabled+.radio-label:before {
    box-shadow: inset 0 0 0 4px #f4f4f4;
    border-color: #b4b4b4;
    background: #b4b4b4
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper .select-radio .radio input[type="radio"]+.radio-label:empty:before {
    margin-right: 0
}


.footer-area .footer-heading .contact-number {
    color: #EDC750;
    font-size: 36px;
    font-weight: 700
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .footer-area .footer-heading .contact-number {
        float: left;
        margin-top: 30px
    }
}

@media (max-width: 575px) {
    .footer-area .footer-heading .contact-number {
        float: left;
        margin-top: 20px;
        font-size: 30px
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .footer-area .footer-heading .contact-number {
        float: left;
        margin-top: 30px
    }
}

.contact-info {
    margin-bottom: 25px
}

.contact-info__icon {
    margin-right: 20px
}

.contact-info__icon i, .contact-info__icon span {
    color: #8f9195;
    font-size: 27px
}

.contact-info .media-body h3 {
    font-size: 16px;
    margin-bottom: 0;
    font-size: 16px;
    color: #2a2a2a
}

.contact-info .media-body h3 a:hover {
    color: #1f2b7b
}

.contact-info .media-body p {
    color: #8a8a8a
}

.contact-title {
    font-size: 27px;
    font-weight: 600;
    margin-bottom: 20px
}

.form-contact label {
    font-size: 14px
}

.form-contact .form-group {
    margin-bottom: 30px
}

.form-contact .form-control {
    border: 1px solid #e5e6e9;
    border-radius: 0px;
    height: 48px;
    padding-left: 18px;
    font-size: 13px;
    background: transparent
}

.form-contact .form-control:focus {
    outline: 0;
    box-shadow: none
}

.form-contact .form-control::placeholder {
    font-weight: 300;
    color: #999999
}

.form-contact textarea {
    border-radius: 0px;
    height: 100% !important
}

.contact-section {
    padding: 130px 0 100px
}

@media (max-width: 991px) {
    .contact-section {
        padding: 70px 0 40px
    }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .contact-section {
        padding: 80px 0 50px
    }
}

.contact-section .btn_2 {
    background-color: #191d34;
    padding: 18px 60px;
    border-radius: 50px;
    margin-top: 0
}

.contact-section .btn_2:hover {
    background-color: #1f2b7b
}


</style>