<template>
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
                        <h3>Always listening, always understanding.</h3>
                        <input type="text" placeholder="Incoterms">
                        <button name="submit" class="submit-btn">Request a Quote</button>
                    </div>
                </div>
                <!-- Form End -->
            </div>
        </div>
    </div>
    <!-- Testimonial End -->
</template>
<script>
export default {
    name:"Testimolials",
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.testimonial-area{
background-image: url("../../assets/img/gallery/section_bg04.jpg");
background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.section-bg {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.testimonial-padding {
    padding-top: 140px;
    padding-bottom: 100px;
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
    
    .testimonial-area .testimonial-caption .testimonial-founder .founder-text span {
        font-size: 20px;
    color: #fff;
}
.testimonial-area .testimonial-caption .testimonial-top-cap svg {
    margin-bottom: 17px
}

.testimonial-area .testimonial-caption .testimonial-top-cap p {
    color: #a4acc3;
    font-weight: 500;
    line-height: 1.5;
    padding: 0 3px;
    margin-bottom: 50px;
    font-size: 16px
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .testimonial-area .testimonial-caption .testimonial-top-cap p {
        margin-bottom: 30px
    }
}

@media (max-width: 575px) {
    .testimonial-area .testimonial-caption .testimonial-top-cap p {
        margin-bottom: 30px
    }
    .testimonial-padding {
    padding-top: 80px;
    padding-bottom: 80px;
}
}

.testimonial-area .testimonial-caption .testimonial-founder .founder-text {
    padding-left: 20px
}

.testimonial-area .testimonial-caption .testimonial-founder .founder-text span {
    color: #fff
}

.testimonial-area .testimonial-caption .testimonial-founder .founder-text p {
    color: #677294;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 5px
}

.h1-testimonial-active button.slick-arrow {
    position: absolute;
    right: 90px;
    border: 0;
    padding: 0;
    z-index: 2;
    height: 50px;
    width: 50px;
    line-height: 50px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 20px;
    -webkit-transition: all .3s ease-out 0s;
    -moz-transition: all .3s ease-out 0s;
    -ms-transition: all .3s ease-out 0s;
    -o-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
    color: #616373;
    background: none;
    margin: 0 auto;
    bottom: 0;
    border: 1px solid #616373
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
.h1-testimonial-active button.slick-arrow:hover {
    border: 1px solid #EDC750;
    color: #EDC750;
}

.h1-testimonial-active button.slick-next {
    right: 31px
}

.h1-testimonial-active button i {
    font-size: 13px;
    position: relative;
    top: -3px
}

.slick-initialized .slick-slide {
    outline: 0
}

.testimonial-form {
    padding: 50px;
    border-radius: 10px;
    background: #fff;
    padding: 50px;
    border-radius: 10px
}

@media (max-width: 575px) {
    .testimonial-form {
        padding: 30px
    }
    .section-tittle h2 {
    font-size: 30px;
    display: block;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 1.3;
}
}





.testimonial-form h3 {
    font-size: 26px;
    display: block;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 1.3;
    margin-bottom: 30px
}

.testimonial-form input {
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
    .testimonial-form input {
        margin-bottom: 20px
    }
    .testimonial-form h3 {
    font-size: 18px;
    display: block;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 1.3;
    margin-bottom: 30px
}
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .testimonial-form input {
        padding: 9px 33px 9px 25px;
        margin-bottom: 20px
    }
}

.testimonial-form input::placeholder {
    color: #616875
}

@media (max-width: 575px) {
    .testimonial-form input::placeholder {
        font-size: 14px
    }
}
</style>