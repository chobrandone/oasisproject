<template>
    <div class="major">
      
       <header>
    <!-- Header Start -->
    <div class="header-area">
        <div class="main-header ">
            <div class="header-top d-none d-lg-block">
                <div class="container">
                    <div class="col-xl-12">
                        <div class="row d-flex justify-content-between align-items-center">
                            <div class="header-info-left">
                                <ul>     
                                    <li>Phone: +99 (0) 101 0000 888</li>
                                    <li>Email: noreply@yourdomain.com</li>
                                </ul>
                            </div>
                            <div class="header-info-right">
                                <ul class="header-social">    
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li> <a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <div class="header-bottom">
            <b-navbar toggleable="lg" type="dark" class="header-area ">
                <div class="container">
                    <div class="oasislogo">
                        <b-navbar-brand href="#" class="logo"> <a href="index.html"><img src="../../assets/img/logo/oaislogo.png" alt=""></a></b-navbar-brand>
                    </div>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>

                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-navbar-nav>
                                <b-nav-item @click="home" class="link">Home</b-nav-item>
                                <b-nav-item href="#about" class="link">About</b-nav-item>
                                <b-nav-item href="#ervices" class="link">Services</b-nav-item>
                                <b-nav-item href="#blog" class="link">Blog</b-nav-item>
                                <b-nav-item href="#contact" class="link">Contact</b-nav-item>
                                <!-- Header-btn -->
                                <div class="header-right-btn d-none d-lg-block ml-20 text-left">
                                    <a @click="download" class="btn header-btn">Get Oasis App</a>
                                </div>
                            </b-navbar-nav>

                        </b-navbar-nav>
                    </b-collapse>

                </div>
            </b-navbar>
        </div>
        </div>
        
    </div>
    <!-- Header End -->
</header>
 <!-- Hero start -->
 <section>   <div class="slider-area ">
        <div class="slider-active">
            <!-- Single Slider -->
            <div class="single-slider slider-height d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-9 col-lg-9">
                            <div class="hero__caption">
                                <h1 >Welcome to the   <span>OASIS</span> WORLD</h1>
                            </div>
                            <!--Hero form -->
                            <form action="#" class="search-box">
                                <div class="input-form">
                                    <input type="text" placeholder="Enter your email">
                                </div>
                                <div class="search-form">
                                    <a href="#">Subscribe</a>
                                </div>	
                            </form>	
                            <!-- Hero Pera -->
                           
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div></section>
    <section>

          <div class="our-info-area pt-70 pb-40">
        <div class="container ">
            <div class="row main ">
                <div class="col-lg-4 col-md-6 col-sm-6 pb-40 ">
                    <div class="single-info mb-30">
                        <div class="info-icon">
                            <span class="flaticon-support"></span>
                        </div>
                        <div class="info-caption">
                            <p>Call Us Anytime</p>
                            <span>+ (123) 1800-567-8990</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 pb-40">
                    <div class="single-info mb-30">
                        <div class="info-icon">
                            <span class="flaticon-clock"></span>
                        </div>
                        <div class="info-caption">
                            <p>Sunday CLOSED</p>
                            <span>Mon - Sat 8.00 - 18.00</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-info mb-30">
                        <div class="info-icon">
                            <span class="flaticon-place"></span>
                        </div>
                        <div class="info-caption">
                            <p>Columbia, SC 29201</p>
                            <span>USA, New York - 10620</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <section id="service">
        <!-- services start here-->
     <div class="categories-area section-padding30">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Section Tittle -->
                    <div class="section-tittle text-center mb-80">
                        <span>Our Services</span>
                        <h2>What We Can Do For You</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 service">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-shipped"></span>
                        </div>
                        <div class="cat-cap">
                            <h5><a href="services.html">Land Transport</a></h5>
                            <p>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 service">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-ship"></span>
                        </div>
                        <div class="cat-cap">
                            <h5><a href="services.html">Ship Transport</a></h5>
                            <p>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 service">
                    <div class="single-cat text-center mb-50">
                        <div class="cat-icon">
                            <span class="flaticon-plane"></span>
                        </div>
                        <div class="cat-cap">
                            <h5><a href="services.html">Air Transport</a></h5>
                            <p>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3"> <a @click="service" class="btn text-light">See all services</a></div>
    </div>
    <!-- services end here-->
    </section>

    <section id="about">
         <!--? About Area Start -->
    <div class="about-low-area padding-bottom mt-5 mb-5 main-about">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="about-caption mb-50">
                        <!-- Section Tittle -->
                        <div class="section-tittle mb-35 text-left">
                            <span>About Our App</span>
                            <h2>Safe Logistic & Transport  Solutions That Saves our Valuable Time!</h2>
                        </div>
                        <p class="text-left">Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
                        <p class="text-left">Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
                        <div class="text-left"><a @click="about" class="btn text-light ">More About Us</a></div>
                        
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <!-- about-img -->
                    <div class="about-img ">
                        <div class="about-font-img">
                            <img src="../../assets/img/gallery/about2.png" alt="">
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About Area End -->
    </section>
         <!--? contact-form start -->
<section id="contact">

      <!--? contact-form start -->
   <div class=" contact-form">
       <div class="container">   
            <form method="post" class="contactbg">
                <h3>Drop Us a Message</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control inputs" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control inputs" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control inputs" placeholder="Your Phone Number *" value="" />
                        </div>
                       
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style="width: 100%; height: 150px;"></textarea>
                        </div>
                    </div>
                </div>
       
                                   
                                
                 <div class="form-group buton">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
            </form></div>
         
</div>
    <!-- contact-form end -->
</section >
<section id="team">  <div class="team-area section-padding30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="cl-xl-7 col-lg-8 col-md-10">
                    <!-- Section Tittle -->
                    <div class="section-tittle text-center mb-70">
                        <span>Our Team Mambers</span>
                        <h2>What We Can Do For You</h2>
                    </div> 
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 mb-5">
                    <div class="single-team mb-30 text-center">
                        <div class="team-img">
                            <img src="../../assets/img/gallery/team1.png" alt="">
                            <div class="team-caption">
                                <h3><a href="#">Mancherwan Kolin</a></h3>
                                <p>Health agent</p>
                                <!-- Blog Social -->
                                <div class="team-social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fas fa-globe"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mb-5">
                    <div class="single-team mb-30 text-center">
                        <div class="team-img">
                            <img src="../../assets/img/gallery/team2.png" alt="">
                            <div class="team-caption">
                                <h3><a href="#">Mancherwan Kolin</a></h3>
                                <p>Health agent</p>
                                <!-- Blog Social -->
                                <div class="team-social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fas fa-globe"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mb-5">
                    <div class="single-team mb-30 text-center">
                        <div class="team-img">
                            <img src="../../assets/img/gallery/team3.png" alt="">
                            <div class="team-caption">
                                <h3><a href="#">Mancherwan Kolin</a></h3>
                                <p>Health agent</p>
                                <!-- Blog Social -->
                                <div class="team-social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fas fa-globe"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></section>
    <!-- our team start  -->
     
    <!-- our team end-->
<!--testimonail start-->
      <section>
  <!--? Testimonial Start -->
    <div class="testimonial-area testimonial-padding section-bg" data-background="../../assets/img/gallery/section_bg04.jpg">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xl-7 col-lg-7 mb-5">
                    <!-- Section Tittle -->
                    <div class="section-tittle section-tittle2 mb-25">
                        <span class="text-left">Clients Testimonials</span>
                        <h2 class="text-white text-left">What Our Clients Say!</h2>
                    </div> 
                    <div class="h1-testimonial-active mb-70">
                        <!-- Single Testimonial -->
                        <div class="single-testimonial ">
                            <!-- Testimonial Content -->
                            <div class="testimonial-caption ">
                                <div class="testimonial-top-cap text-left">
                                    <p>Srem ipsum adolor dfsit amet, consectetur adipiscing elit, sed dox beiusmod tempor incci didunt ut labore et dolore magna aliqua. Quis cipsucm suspendisse ultrices gravida. Risus commodo vivercra maecenas accumsan lac.</p>
                                </div>
                                <!-- founder -->
                                <div class="testimonial-founder d-flex align-items-center">
                                    <div class="founder-img">
                                        <img src="../../assets/img/gallery/Homepage_testi.png" alt="">
                                    </div>
                                    <div class="founder-text">
                                        <span>Jhaon smith</span>
                                        <p>Creative designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                  

                        
                    </div>
                </div>
                <!-- Form Start -->
                <div class="col-xl-4 col-lg-5 col-md-8">
                    <div class="testimonial-form text-center">
                        <h3>Always  understanding.</h3>
                        <input type="text" placeholder="Email">
                        <button name="submit" class="submit-btn">Request App</button>
                    </div>
                </div>
                <!-- Form End -->
            </div>
        </div>
    </div>
    <!-- Testimonial End -->
      </section>
      <section id="blog">
           <!--? Blog Area Start -->
    <div class="home-blog-area section-padding30">
        <div class="container">
            <!-- Section Tittle -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-tittle text-center mb-5">
                        <span>Our Recent news</span>
                        <h2>Oasis Blog</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="home-blog-single mb-30">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="../../assets/img/gallery/blog01.png" alt="">
                            </div>
                        </div>
                        <div class="blog-caption">
                            <div class="blog-date text-center">
                                <span>27</span>
                                <p>SEP</p>
                            </div>
                            <div class="blog-cap text-left">
                                <ul>
                                    <li><a href="#"><i class="ti-user"></i> Jessica Temphers</a></li>
                                    <li><a href="#"><i class="ti-comment-alt"></i> 12</a></li>
                                </ul>
                                <h3 class="text-left"><a href="../../blog_details.html">Here’s what you should know before.</a></h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="home-blog-single mb-30">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="../../assets/img/gallery/blog1.png" alt="">
                            </div>
                        </div>
                        <div class="blog-caption">
                            <div class="blog-date text-center">
                                <span>27</span>
                                <p>SEP</p>
                            </div>
                            <div class="blog-cap text-left">
                                <ul>
                                    <li><a href="#"><i class="ti-user"></i> Jessica Temphers</a></li>
                                    <li><a href="#"><i class="ti-comment-alt"></i> 12</a></li>
                                </ul>
                                <h3 class="text-left"><a href="../../blog_details.html">Here’s what you should know before.</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="home-blog-single mb-30">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="../../assets/img/gallery/blog02.png" alt="">
                            </div>
                        </div>
                        <div class="blog-caption">
                            <div class="blog-date text-center">
                                <span>27</span>
                                <p>SEP</p>
                            </div>
                            <div class="blog-cap text-left">
                                <ul>
                                    <li><a href="#"><i class="ti-user"></i> Jessica Temphers</a></li>
                                    <li><a href="#"><i class="ti-comment-alt"></i> 12</a></li>
                                </ul>
                                <h3 class="text-left"><a href="blog_details.html">Here’s what you should know before.</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div> <div class="mt-3"> <a @click="log" class="btn text-light">view all blog</a></div></div>
        </div>
    </div>
    <!-- Blog Area End -->
      </section>
      <section id="footer">
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
                                      <li><a href="#home"> home</a></li>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#service">Service</a></li>
                                    <li><a href="#blog"> Blog</a></li>
                                  
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
            <hr>
            <!-- Footer Bottom -->
               <div class="header-top d-none d-lg-block">
                <div class="container">
                    <div class="col-xl-12">
                        <div class="row  foot-content">
                            <h6 class="text-center">Design by @Brandone</h6>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="back-top" >
    <a title="Go to Top" href="#"> <i class="fas fa-level-up-alt"></i></a>
</div>
    </div>
      </section>
     <!-- hero  End -->

       
             <!-- <section class="head"><Head/></section>
            <section class="Navigation"><Navigation/></section>
            <section class="Hero"><Hero/></section>
            <section class="Program"><Program/></section>
            <section class="OurServices"><OurServices/></section>
            <section class="About mb-5"><About/></section> -->
          <!-- <section class="Contact"><Contact/></section> -->
            <!-- <section class="Team"><Team/></section>
              <section class="Showcase"><Showcase/></section>
              <section class="Testimonials"> <Testimonials/></section>
              <section class="Blog"><Blog/></section>
              <section class="Footer"><Footer/></section> -->
       

        
        
    </div>
</template>
<script>
// import Navigation from "../Header/Navigation.vue"
// import Head from "../Header/Header";
// import Hero from "../Hero/hero.vue"
// import Program from "../Program/Program.vue"
// import OurServices from "../OurServices/Services.vue"
// import About from "../About/About.vue"
// import Team from "../OurTeam/Team.vue"
// import Showcase from "../Showcase/Showcase.vue"
// import Testimonials from "../Testimolials/Testimolials.vue"
// import Blog from "../Blog/Blog.vue"
// import Contact from "../Contact/Contact.vue"
// import Footer from "../Footer/Footer.vue"
// import style from "../../assets/css/style.css"

export default {
    name:"Home",
    components:{
        // Head,
        // Navigation,
        // Hero,
        // Program,
        // OurServices,
        // About,
        // Team,
        // Showcase,
        // Testimonials,
        // Blog,
        // Contact,
        // Footer
        
    },
    data() {
        return {
            
        }
    },
      methods: {
            home: function () {
      this.$router.push({
        path: "/",
      });
    },
    blog: function () {
      this.$router.push({
        path: "/blog",
      });
    },
    
       contact: function () {
      this.$router.push({
        path: "/contact",
      });
    },
      about: function () {
      this.$router.push({
        path: "/about",
      });
    },
      download: function () {
            this.$router.push({
                path: "/download",
            });
        },
  },
    
}
</script>
<style>
@import url( "../../assets/css/style.css");

    
</style>