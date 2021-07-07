<template>
   <!--? Testimonial Start -->

   <div>
          <div class="">

        <Head />
    </div>
          <div class="">

        <Testimonials />
    </div>
       
       <div class="container mt-5">
    <div class="row">
        <div class="col-md-4">
            <div class="card d-flex mx-auto">
                <div class="card-image"> <img class="img-fluid d-flex mx-auto" src="https://i.imgur.com/3TlwnLF.jpg"> </div>
                <div class="card-text">
                    <div class="card-title">Lorem Ipsum!</div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna
                </div>
                <div class="footer"> <span id="name">Micheal Smith<br></span> <span id="position">CEO of <a href="#">Google.com</a></span> </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card d-flex mx-auto">
                <div class="card-image"> <img class="img-fluid d-flex mx-auto" src="https://i.imgur.com/Uz4FjGZ.jpg"> </div>
                <div class="card-text">
                    <div class="card-title">Lorem Ipsum!</div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna
                </div>
                <div class="footer"> <span id="name">Angellia Miller<br></span> <span id="position">CEO of <a href="#">Facebook.com</a></span> </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card d-flex mx-auto ">
                <div class="card-image"> <img class="img-fluid d-flex mx-auto" src="https://i.imgur.com/udGH5tO.jpg"> </div>
                <div class="card-text">
                    <div class="card-title">Lorem Ipsum!</div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna
                </div>
                <div class="footer"> <span id="name">Christina Williams<br></span> <span id="position">UX Designer at <a href="#">Youtube.com</a></span> </div>
            </div>
        </div>
    </div>
</div></div>

    <!-- Testimonial End -->
</template>
<script>
import Testimonials from "./TestimonialHero.vue"
import Head from "../Header/Header.vue";
export default {
    name:"Testimolials",
    data() {
        return {
            
        }
    },
    components:{
        Testimonials,
        Head
    }
}
</script>
<style scoped>

.container {
    max-width: 950px
}

.card {
    border-radius: 1rem;
    box-shadow: 0px -10px 0px rgb(151, 248, 6)
}

@media(max-width:767px) {
    .card {
        margin: 1rem 0.7rem 1rem;
        max-width: 80vw
    }
}

img {
    width: 6.2rem;
    border-radius: 5rem;
    margin: 1.3rem auto 1rem auto
}

.col-md-4 {
    padding: 0 0.5rem
}

.card-title {
    font-size: 1rem;
    margin-bottom: 0;
    font-weight: bold;
    font-family: 'IM Fell French Canon SC'
}

.card-text {
    text-align: center;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    color: rgb(82, 81, 81);
    line-height: 1.4rem
}

.footer {
    border-top: none;
    text-align: center;
    line-height: 1.2rem;
    padding: 2rem 0 1.4rem 0;
    font-family: 'Varela Round'
}

#name {
    font-size: 0.8rem;
    font-weight: bold
}

#position {
    font-size: 0.7rem
}

a {
    color: rgb(151, 248, 6);
    font-weight: bold
}

a:hover {
    color: rgb(151, 248, 6)
}






/* 
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
} */
</style>