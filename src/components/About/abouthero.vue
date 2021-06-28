<template >
 <div>
         <div class="slider-area ">
        <div class="slider-active">
            <!-- Single Slider -->
            <div class="single-slider slider-height ">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-9 col-lg-9">
                            <div class="hero__caption text-center">
                                <h1 class="text-center" >ABOUT    <span>OASIS</span> PLANET TECH</h1>
                            </div>
                            <!--Hero form -->
                            
                            <!-- Hero Pera -->
                           
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</div>
</template>
<script>
// import hero from "../../assets/img/hero/video.png"
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
    
.slider-active{
    /* background-image: url(../../assets/img/hero/video.jpg); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("../../assets/img/hero/video.jpg");
     min-height: 400px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover
}
.slider-area .hero__caption h1 {
 text-align: center;
    font-size: 60px;
    font-weight: 600;
  margin-top: 50px;
    color: #fff;
    line-height: 95px;
    text-transform: capitalize;
    margin-bottom: 40px
}


@media only screen and (min-width: 576px) and (max-width: 767px) {
    .slider-area .hero__caption {
        padding-top: 50px
    }
}

@media (max-width: 575px) {
    .slider-area .hero__caption {
        padding-top: 50px
    }
    .slider-active{
    /* background-image: url(../../assets/img/hero/video.jpg); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("../../assets/img/hero/video.jpg");
     min-height: 100px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover
}
}



@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .slider-area .hero__caption h1 {
        font-size: 60px;
        line-height: 1.2;
        text-align: center !important;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .slider-area .hero__caption h1 {
        font-size: 50px;
        line-height: 1.2
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .slider-area .hero__caption h1 {
        font-size: 35px;
        line-height: 1.2
    }
}

@media (max-width: 575px) {
    .slider-area .hero__caption h1 {
        font-size: 32px;
        line-height: 1.2
    }
}

.slider-area .hero__caption h1 span {
    color: #EDC750;
}

.slider-area form.search-box {
    display: flex;
    flex-wrap: wrap;
    border-radius: 50px;
    margin-bottom: 15px
}

.slider-area form.search-box .input-form {
    width: 53%;
    position: relative;
    overflow: hidden
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .slider-area form.search-box .input-form {
        width: 66%
    }
}

@media (max-width: 575px) {
    .slider-area form.search-box .input-form {
        width: 100%
    }
}

.slider-area form.search-box .input-form input {
    height: 60px;
    width: 100%;
    color: #777777;
    font-size: 18px;
    font-weight: 400;
    padding: 9px 33px 9px 32px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px
}

@media (max-width: 575px) {
    .slider-area form.search-box .input-form input {
        margin-bottom: 20px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .slider-area form.search-box .input-form input {
        padding: 9px 33px 9px 25px
    }
}

.slider-area form.search-box .input-form input::placeholder {
    color: #616875
}

@media (max-width: 575px) {
    .slider-area form.search-box .input-form input::placeholder {
        font-size: 13px
    }
}

.slider-area form.search-box .search-form {
    width: 22%;
    overflow: hidden
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .slider-area form.search-box .search-form {
        width: 34%
    }
}

@media (max-width: 575px) {
    .slider-area form.search-box .search-form {
        width: 100%
    }
}

.slider-area form.search-box .search-form a {
    width: 100%;
    height: 60px;
    background: #EDC750;
    font-size: 20px;
    line-height: 1;
    text-align: center;
    color: #fff;
    display: block;
    padding: 15px;
    border-radius: 0px;
    text-transform: uppercase;
    font-family: "Barlow", sans-serif;
    line-height: 1.2;
    line-height: 29px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.03em;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px
}

@media (max-width: 575px) {
    .slider-area form.search-box .search-form a {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px
    }
}

.slider-area .hero-pera p {
    color: #fff;
    margin-bottom: 42px;
    font-size: 14px;
    font-style: italic;
    text-transform: uppercase
}

.hero-overly {
    position: relative;
    z-index: 1
}

.hero-overly::before {
    position: absolute;
    content: "";
    background-color: rgba(1, 10, 28, 0.6);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-repeat: no-repeat
}

.slider-area .hero-cap h2 {
    color: #fff;
    font-size: 95px;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 1
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .slider-area .hero-cap h2 {
        font-size: 50px
    }
}

@media (max-width: 575px) {
    .slider-area .hero-cap h2 {
        font-size: 35px
    }
}

.slider-area .hero-cap .breadcrumb {
    background: none;
    padding: 0;
    margin: 0
}

.slider-area .hero-cap .breadcrumb a {
    color: #dcdcdc;
    font-size: 18px;
    text-transform: capitalize
}

.slider-area .hero-cap .breadcrumb-item+.breadcrumb-item::before {
    color: #dcdcdc
}

</style>