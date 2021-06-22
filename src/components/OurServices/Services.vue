<template>
<!-- services start here-->
<div> 
    <Header/>
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
                            <b-button v-b-toggle.collapse-1 class="toggle-btn">view full content</b-button>
                                <b-collapse id="collapse-1" class="mt-2">
                                    <b-card>
                                        <p class="card-text">view full content</p>

                                    </b-card>
                                </b-collapse>
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
                            <b-button v-b-toggle.collapse-1 class="toggle-btn">view full content</b-button>
                                <b-collapse id="collapse-1" class="mt-2">
                                    <b-card>
                                        <p class="card-text">view full content</p>

                                    </b-card>
                                </b-collapse>
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
                            <b-button v-b-toggle.collapse-1 class="toggle-btn">view full content</b-button>
                                <b-collapse id="collapse-1" class="mt-2">
                                    <b-card>
                                        <p class="card-text">view full content</p>

                                    </b-card>
                                </b-collapse>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
    
    <!-- services end here-->
</template>
<script>
import Header from '../Header/Header.vue'
import Footer from '../Footer/Footer.vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Header,
        Footer
    }
    
}
</script>

<style scoped>
 .service{
     margin-top: 20px;
 }   
.categories-area .single-cat {
    border: 1px solid #e1ebf7;
    border-radius: 6px;
    padding: 85px 22px;
    -webkit-transition: all .4s ease-out 0s;
    -moz-transition: all .4s ease-out 0s;
    -ms-transition: all .4s ease-out 0s;
    -o-transition: all .4s ease-out 0s;
    transition: all .4s ease-out 0s;
    position: relative;
    z-index: 1
}

@media (max-width: 575px) {
    .categories-area .single-cat {
        padding: 50px 22px
    }
}

.categories-area .single-cat::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    background: #EDC750;
    transition: .6s;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 6px
}

.categories-area .single-cat .cat-icon span {
    color: #EDC750;
    font-size: 50px;
    margin-bottom: 30px;
    display: block
}

.categories-area .single-cat .cat-cap h5>a {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 21px;
    display: block;
    -webkit-transition: all .2s ease-out 0s;
    -moz-transition: all .2s ease-out 0s;
    -ms-transition: all .2s ease-out 0s;
    -o-transition: all .2s ease-out 0s;
    transition: all .2s ease-out 0s;
    font-family: "Barlow", sans-serif
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .categories-area .single-cat .cat-cap h5>a {
        font-size: 26px
    }
}

@media (max-width: 575px) {
    .categories-area .single-cat .cat-cap h5>a {
        font-size: 26px
    }
}

.categories-area .single-cat .cat-cap p {
    margin-bottom: 36px;
    color: #57667e;
    font-size: 16px;
    -webkit-transition: all .2s ease-out 0s;
    -moz-transition: all .2s ease-out 0s;
    -ms-transition: all .2s ease-out 0s;
    -o-transition: all .2s ease-out 0s;
    transition: all .2s ease-out 0s
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .categories-area .single-cat .cat-cap p {
        font-size: 15px
    }
}

.categories-area .single-cat .cat-cap a {
    color: #1c165c;
    font-size: 16px;
    font-weight: 600;
    -webkit-transition: all .2s ease-out 0s;
    -moz-transition: all .2s ease-out 0s;
    -ms-transition: all .2s ease-out 0s;
    -o-transition: all .2s ease-out 0s;
    transition: all .2s ease-out 0s
}

.categories-area .single-cat:hover {
    border: 1px solid transparent
}

.categories-area .single-cat:hover::before {
    height: 100%
}

.categories-area .single-cat:hover .cat-icon span {
    color: #fff
}

.categories-area .single-cat:hover .cat-cap h5 {
    color: #fff
}

.categories-area .single-cat:hover .cat-cap p {
    color: #fff
}

.categories-area .single-cat:hover .cat-cap a {
    color: #fff
}

.section-padding30 {
    padding-top: 195px;
    padding-bottom: 170px
}

@media only screen and (min-width: 1200px) and (max-width: 1600px) {
    .section-padding30 {
        padding-top: 195px;
        padding-bottom: 170px
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .section-padding30 {
        padding-top: 150px;
        padding-bottom: 110px
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .section-padding30 {
        padding-top: 100px;
        padding-bottom: 70px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .section-padding30 {
        padding-top: 65px;
        padding-bottom: 30px
    }
}

@media (max-width: 575px) {
    .section-padding30 {
        padding-top: 65px;
        padding-bottom: 30px
    }
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
    font-style: normal;}
@media only screen and (min-width: 992px) and (max-width: 1199px){
.section-tittle h2 {
    font-size: 42px;
}}


@media (max-width: 575px) {

.section-tittle h2 {
    font-size: 30px;
    display: block;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 1.3;
}
}
</style>