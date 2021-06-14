<template>
    <div>
        <section class="Header"><Header/></section>
           <section class="Hero"><Hero/></section>
           <section>
  <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">Get in Touch</h2>
                    </div>
                    <div class="col-lg-8">
                        <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="button button-contactForm boxed-btn">Send</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                                <h3>Buttonwood, California.</h3>
                                <p>Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                                <h3>+1 253 565 2365</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                <h3>support@colorlib.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>

           </section>
            <section class="Footer"><Footer/></section>
        
    </div>
</template>
<script>
  import Header  from '../Header/Header.vue';
  import Hero from "../Hero/hero.vue"
  import Footer from "../Footer/Footer.vue"
export default {
  
    data() {
        return {
            
        }
    },
    component:{
        Header,
        Hero,
        Footer
    }
}
</script>
<style scoped>
    
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

@media (max-width: 575px) {
    .contact-form-area .contact-form-wrapper form.contact-form input {
        margin-bottom: 20px
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

.contact-form-area .contact-form-wrapper form.contact-form .nice-select {
    width: 100%;
    height: 60px;
    background: #fff;
    padding: 11px 19px 11px 31px;
    line-height: 42px;
    border-radius: 5px;
    border: 1px solid #efebeb;
    background: #fff;
    color: #a6abb0;
    font-size: 17px;
    margin-bottom: 20px
}

@media (max-width: 575px) {
    .contact-form-area .contact-form-wrapper form.contact-form .nice-select {
        margin-bottom: 20px;
        padding-left: 25px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .contact-form-area .contact-form-wrapper form.contact-form .nice-select {
        margin-bottom: 20px;
        padding-left: 25px
    }
}

.contact-form-area .contact-form-wrapper form.contact-form .nice-select .list {
    width: 100%
}

.contact-form-area .contact-form-wrapper form.contact-form .nice-select.open .list {
    width: 100%;
    border-radius: 0;
    border: 0
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
    background-color: #f15f22;
    box-shadow: inset 0 0 0 4px #f4f4f4
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper .select-radio .radio input[type="radio"]:focus+.radio-label:before {
    outline: none;
    border-color: #f15f22
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper .select-radio .radio input[type="radio"]:disabled+.radio-label:before {
    box-shadow: inset 0 0 0 4px #f4f4f4;
    border-color: #b4b4b4;
    background: #b4b4b4
}

.contact-form-area .contact-form-wrapper form.contact-form .radio-wrapper .select-radio .radio input[type="radio"]+.radio-label:empty:before {
    margin-right: 0
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