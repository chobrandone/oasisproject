<template>
<div>
    <Header />
    <Abouthero />
    <div class="about-low-area padding-bottom mb-5 main-about">
        <div class="container main-abouts">
            <div class="row">
                <div class="col-sm-12">
                    <!-- 16:9 -->

                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="//www.youtube.com/embed/lZoeoCSXGY8"></iframe>
                    </div>
                </div>

            </div>
            <div class="row about-row  ">
                <div class="col-lg-6 col-md-12">
                    <div class="about-caption mb-50">
                        <!-- Section Tittle -->
                        <div class="section-tittle mb-35 text-left">
                            <h3>ABOUT OASIS PLANET TECH</h3>
                            <h2>Our app is an independent money making networking platform</h2>
                        </div>
                        <p class="text-left">OASIS PLANET TECH is a digital marketing platform with vision to revolutionize the digital marketing world founded in 2019 by David Brian, CEO OASIS PLANET TECH LIMITED was duly registered under company and Allied Matters Act 2020. Oasis planet Tech aim at creating an independent money making networking platform (Oasis mobile App) where persons from all works of life can benefit from at a very low cost through its strategic partnership. OASIS PLANET TECH through its partnership with both the banking and telecommunication institutions will be working hand in hand to ensure its smooth running of its planet.</p>
                        <p class="text-left"> OASIS PLANET TECH is a cooperate organization that exist to equip, empower, train and develop young entrepreneurs with technological skills, positive thinking and innovative mindsets to provide solutions to Africa and the world’s economy through technology.</p>
                     
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
    <Footer />
</div>
<!--? About Area Start -->

<!-- About Area End -->
</template>

<script>
import Abouthero from "./abouthero.vue"
import Header from '../Header/Header.vue'
import Footer from '../Footer/Footer.vue'
export default {
    name: "About",
    data() {
        return {

        }
    },
    components: {
        Header,
        Footer,
        Abouthero
    }
}
</script>

<style scoped>
.about-row {
    margin-bottom: 100px;
    margin-top: 100px;
}

.main-about {
    margin-top: 30px;
}

.latest_blog_area {
    background: #f9f9ff
}

.single-recent-blog-post {
    margin-bottom: 30px
}

.single-recent-blog-post .thumb {
    overflow: hidden
}

.single-recent-blog-post .thumb img {
    transition: all 0.7s linear
}

.single-recent-blog-post .details {
    padding-top: 30px
}

.single-recent-blog-post .details .sec_h4 {
    line-height: 24px;
    padding: 10px 0px 13px;
    transition: all 0.3s linear
}

.single-recent-blog-post .date {
    font-size: 14px;
    line-height: 24px;
    font-weight: 400
}

.single-recent-blog-post:hover img {
    transform: scale(1.23) rotate(10deg)
}

.tags .tag_btn {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    border: 1px solid #eeeeee;
    display: inline-block;
    padding: 1px 18px;
    text-align: center
}

.tags .tag_btn+.tag_btn {
    margin-left: 2px
}

.blog_categorie_area {
    padding-top: 30px;
    padding-bottom: 30px
}

@media (min-width: 900px) {
    .blog_categorie_area {
        padding-top: 80px;
        padding-bottom: 80px
    }
}

@media (min-width: 1100px) {
    .blog_categorie_area {
        padding-top: 120px;
        padding-bottom: 120px
    }
}

.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.section-tittle span {
    font-size: 18px;
    display: block;
    color: #EDC750;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 17px;
}

.btn {
    background: #EDC750;
    padding: 27px 44px;
    text-transform: uppercase;
    font-family: "Barlow", sans-serif;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    border-radius: 5px;
    -moz-user-select: none;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 0;
    margin-bottom: 0;
    margin: 10px;
    cursor: pointer;
    transition: color 0.4s linear;
    position: relative;
    z-index: 1;
    border: 0;
    overflow: hidden;
    margin: 0;
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

    display: block;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 1.3;
}
.section-tittle h3 {
color: #EDC750;
    display: block;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 1.3;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Teko", sans-serif;
    color: #2c234d;
    margin-top: 0px;
    font-style: normal;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .section-tittle h2 {
        font-size: 42px;
    }
}

.about-low-area .about-caption p {
    font-size: 16px;
    color: #64676c;
    line-height: 1.6;
    margin-bottom: 35px;
    padding-right: 50px
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .about-low-area .about-caption p {
        padding-right: 20px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .about-low-area .about-caption p {
        padding-right: 0px
    }
}

@media (max-width: 575px) {
    .about-low-area .about-caption p {
        padding-right: 0px
    }

    .section-tittle h2 {
        font-size: 20px;
        display: block;
        font-weight: 600;
        text-transform: capitalize;
        line-height: 1.3;
    }
}

.about-low-area .about-img {
    position: relative
}

.about-low-area .about-img .about-font-img img {
    position: absolute;
    z-index: 1;
    right: 47px;
    top: 0px;
    height: 700px;
    width: 400px;
    margin-top: -50px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .about-low-area .about-img .about-font-img {
        position: unset
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .about-low-area .about-img .about-font-img {
        position: unset;
        display: none;
    }

    .about-row {
        margin-bottom: 50px;
    }
}

@media (max-width: 575px) {
    .about-low-area .about-img .about-font-img {
        position: unset;
        display: none;

    }

    .btn {
        margin-bottom: 50px;
    }
}

@media (max-width: 575px) {
    .about-low-area .about-img .about-font-img img {
        width: 100%;

    }
}

.about-low-area .about-img .about-back-img {
    position: absolute;
    top: -45px;
    right: 0;
    z-index: 0
}

@media (max-width: 575px) {
    .about-low-area .about-img .about-back-img img {
        width: 90%
    }
}

@media (max-width: 575px) {
    .about-caption {
        margin-bottom: 35px
    }
}
</style>
