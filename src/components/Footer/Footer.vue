<template>
     <div class="footer-area footer-bg">
        <div class="container">
            <div class="footer-top footer-padding">
                <!-- footer Heading -->
                <div class="footer-heading">
                    <div class="row justify-content-between pt-5">
                        <div class="col-xl-6 col-lg-8 col-md-8 text-left">
                            <div class="wantToWork-caption wantToWork-caption2">
                                <h2 class="text-left ">We Understand The Importance Knowledge!</h2>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4">
                            <span class="contact-number f-right">+ 1 212-683-9756</span>
                        </div>
                    </div>
                </div>
                <!-- Footer Menu -->
                <div class="row d-flex justify-content-between">
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle text-center">
                                <h4 class="text-center">COMPANY</h4>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#"> Press & Blog</a></li>
                                    <li><a href="#"> Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4 class="text-center">Open hour</h4>
                                <ul>
                                    <li><a href="#">Monday 11am-7pm</a></li>
                                    <li><a href="#"> Tuesday-Friday 11am-8pm</a></li>
                                    <li><a href="#"> Saturday 10am-6pm</a></li>
                                    <li><a href="#"> Sunday 11am-6pm</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4 class="text-center">RESOURCES</h4>
                                <ul>
                                    <li><a href="#">Home Insurance</a></li>
                                    <li><a href="#"> Insurance</a></li>
                                    <li><a href="#"> Insurance</a></li>
                                    <li><a href="#"> Insurance</a></li>
                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <!-- logo -->
                            <div class="footer-logo logo">
                                <a href="index.html"><img src="../../assets/img/logo/oaislogo.png" alt=""></a>
                            </div>
                            <div class="footer-tittle">
                                <div class="footer-pera">
                                    <p class="info1 text-center">GThe trade war currently ensuing between te US anfd several natxions around thdhe globe, most fiercely with.</p>
                                </div>
                            </div>
                            <!-- Footer Social -->
                            <div class="footer-social ">
                                <a href="https://www.facebook.com/sai4ull"><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fas fa-globe"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Bottom -->
          
        </div>
        <div id="back-top" >
    <a title="Go to Top" href="#"> <i class="fas fa-level-up-alt"></i></a>
</div>
    </div>
</template>
<script>
export default {
    name:"Footer",
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
    .oasislogo img{
    height: 100px;
}
#scrollUp, #back-top {
    background: #EDC750;
    height: 50px;
    width: 50px;
    right: 31px;
    bottom: 18px;
    position: fixed;
    z-index: 10;
    color: #fff;
    font-size: 20px;
    text-align: center;
    border-radius: 50%;
    line-height: 48px;
    border: 2px solid transparent;
    box-shadow: 0 0 10px 3px rgba(108, 98, 98, 0.2)
}

@media (max-width: 575px) {
    #scrollUp, #back-top {
        right: 16px
    }
}

#scrollUp a i, #back-top a i {
    display: block;
    line-height: 50px
}
.footer-area {
    background: #121212
}

.footer-area .footer-heading {
    padding-bottom: 51px;
    margin-bottom: 82px;
    border-bottom: 1px solid #1a2537
}

.footer-area .footer-heading .wantToWork-caption h2 {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.2;
    font-family: "Barlow", sans-serif;
    margin: 0
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .footer-area .footer-heading .wantToWork-caption h2 {
        font-size: 30px
    }
}

@media (max-width: 575px) {
    .footer-area .footer-heading .wantToWork-caption h2 {
        font-size: 25px;
        margin-bottom: 20px
    }
}

.footer-area .footer-heading .wantToWork-caption p {
    font-size: 18px
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

.footer-area .footer-top .single-footer-caption .footer-logo img {
    margin-bottom: 30px;
     height: 100px;
}

.footer-area .footer-top .single-footer-caption .footer-pera .info1 {
    line-height: 1.8;
    margin-bottom: 30px;
    padding-right: 0;
    color: #fff;
    font-size: 14px
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .footer-area .footer-top .single-footer-caption .footer-pera .info1 {
        padding-right: 0px
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .footer-area .footer-top .single-footer-caption .footer-pera .info1 {
        padding-right: 0px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .footer-area .footer-top .single-footer-caption .footer-pera .info1 {
        padding-right: 0px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .footer-area .footer-top .single-footer-caption .footer-pera .info1 {
        padding-right: 0px
    }
}

.footer-area .footer-top .single-footer-caption .footer-tittle h4 {
    color: #fff;
    font-family: "Barlow", sans-serif;
    font-size: 18px;
    margin-bottom: 38px;
    font-weight: 500;
    text-transform: uppercase
}

.footer-area .footer-top .single-footer-caption .footer-tittle ul li {
    color: #bbbcbc;
    margin-bottom: 15px;
    text-transform: capitalize;
    font-size: 15px;
    text-align: center;
}

.footer-area .footer-top .single-footer-caption .footer-tittle ul li a {
    color: #868c98;
    font-weight: 300
}

.footer-area .footer-top .single-footer-caption .footer-tittle ul li a:hover {
    color: #EDC750;
    padding-left: 5px
}

.footer-area .footer-bottom {
    padding-bottom: 50px;
    padding-top: 20px
}

.footer-area .footer-bottom .footer-copy-right p {
    color: #bbbcbc;
    font-weight: 300;
    font-size: 16px;
    line-height: 2;
    margin-bottom: 12px
}

.footer-area .footer-bottom .footer-copy-right p i {
    color: #EDC750;
}

.footer-area .footer-bottom .footer-copy-right p a {
    color: #EDC750;
}

.footer-area .footer-social a {
    color: #848493;
    font-size: 18px;
    text-align: center;
    margin-left: 24px
}

.footer-area .footer-social a:first-child {
    margin-left: 0px
}

.footer-area .footer-social a:hover {
    color: #fff
}

</style>