<template>
  <div>
      <div class="mb-5">
          <Head/>
      </div>
       <main>
        
        <!-- ================ contact section start ================= -->
        <section class=" container contact-section">
        
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
        <!-- ================ contact section end ================= -->
    </main>
    <div class=""><Footer/></div>
  </div>
    <!-- contact-form end -->
        
</template>
<script>
import Head from "../../components/Header/Header.vue"
import Footer from "../Footer/Footer.vue"
export default {
    name:"Contact",
    data() {
        return {
            
        }
    },
    components:{
        Head,
        Footer
    }
}
</script>
<style scoped>

.boxed-btn {
    background: #fff;
    color: #f15f22 !important;
    display: inline-block;
    padding: 18px 44px;
    font-family: "Teko", sans-serif;
    font-size: 14px;
    font-weight: 400;
    border: 0;
    border: 1px solid #f15f22;
    letter-spacing: 3px;
    text-align: center;
    color: #f15f22;
    text-transform: uppercase;
    cursor: pointer;
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
    color: #222
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
    padding: 130px 0 100px;
   
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
    background-color: #222
}

</style>