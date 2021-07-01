<template>
<!--? Blog Area Start -->

<div class="">
    <div class="">

        <Head />
    </div>
    <Bloghero />

    <main>

        <section id="blog ">
            <!--? Blog Area Start -->
            <div class="home-blog-area mt-5">
                <div class="container">
                    <!-- Section Tittle -->
                    <div class="row mb-5">
                        <!-- Custom rounded search bars with input group -->
                        <div class="col-xs-10 col-xs-offset-1 mr-2 ml-2 ">
                            <form action="#" method="#" role="search">
                                <div class="input-group">
                                    <input class="form-control" placeholder="Search . . ." name="srch-term" id="ed-srch-term" type="text">
                                    <div class="input-group-btn">
                                        <button type="submit" id="searchbtn">
                                            search</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!-- End -->
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="home-blog-single mb-30">
                                <div class="blog-img-cap">
                                    <div class="blog-img">
                                        <img src="../../assets/img/blog/blog1.jpeg" alt="">
                                    </div>
                                </div>
                                <div class="blog-caption">
                                    <div class="blog-date text-center">
                                        <span>27</span>
                                        <p>SEP</p>
                                    </div>
                                    <div class="blog-cap text-left">
                                        <ul>
                                            <li><a href="#"><i class="ti-user"></i> C.E.O David</a></li>
                                            <li><a href="#"><i class="ti-comment-alt"></i> 12</a></li>
                                        </ul>
                                        <h3 class="text-left"><a @click="blog"> Adressing People in Conference</a></h3>
                                    </div>
                                    <div class="mb-3">
                                        <b-button v-b-toggle.collapse-1 class="toggle-btn"> Read More</b-button>
                                        <b-collapse id="collapse-1" class="mt-2">
                                            <b-card>
                                                <p class="card-text"> you areall welcome to our blog</p>

                                            </b-card>
                                        </b-collapse>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="home-blog-single mb-30">
                                <div class="blog-img-cap">
                                    <div class="blog-img">
                                        <img src="../../assets/img/blog/blog2.jpeg" alt="">
                                    </div>
                                </div>
                                <div class="blog-caption">
                                    <div class="blog-date text-center">
                                        <span>06</span>
                                        <p>JUNE</p>
                                    </div>
                                    <div class="blog-cap text-left">
                                        <ul>
                                            <li><a href="#"><i class="ti-user"></i> C.E.O David</a></li>
                                            <li><a href="#"><i class="ti-comment-alt"></i> 12</a></li>
                                        </ul>
                                        <h3 class="text-left"><a @click="blog"> Explaining The OASIS APP</a></h3>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <b-button v-b-toggle.collapse-1 class="toggle-btn">Read More</b-button>
                                    <b-collapse id="collapse-1" class="mt-2">
                                        <b-card>
                                            <p class="card-text"> you areall welcome to our blog</p>

                                        </b-card>
                                    </b-collapse>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="home-blog-single mb-30">
                                <div class="blog-img-cap">
                                    <div class="blog-img">
                                        <img src="../../assets/img/blog/blog6.jpeg" alt="">
                                    </div>
                                </div>
                                <div class="blog-caption">
                                    <div class="blog-date text-center">
                                        <span>25</span>
                                        <p>AUG</p>
                                    </div>
                                    <div class="blog-cap text-left">
                                        <ul>
                                            <li><a href="#"><i class="ti-user"></i> Secretary General</a></li>
                                            <li><a href="#"><i class="ti-comment-alt"> </i> 12</a></li>
                                        </ul>
                                        <h3 class="text-left"><a @click="blog">Managing the App Demand</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <b-button v-b-toggle.collapse-1 class="toggle-btn">Read More</b-button>
                                <b-collapse id="collapse-1" class="mt-2">
                                    <b-card>
                                        <p class="card-text"> you areall welcome to our blog</p>

                                    </b-card>
                                </b-collapse>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <!-- Blog Area End -->
        </section>

        <!--================Blog Area =================-->
        <!-- <section class="blog_area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mb-5 mb-lg-0">
                        <div class="blog_left_sidebar">
                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src="../../assets/img/blog/single_blog_1.png" alt="">
                                    <a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div class="blog_details">
                                    <a class="d-inline-block" href="blog_details.html">
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </a>
                                    <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                        he earth it first without heaven in place seed it second morning saying.</p>
                                    <ul class="blog-info-link">
                                        <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                                        <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                    </ul>
                                    <b-button v-b-toggle.collapse-1 class="toggle-btn">view full content</b-button>
                                    <b-collapse id="collapse-1" class="mt-2">
                                        <b-card>
                                            <p class="card-text">view full content</p>

                                        </b-card>
                                    </b-collapse>
                                </div>
                            </article>

                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src="../../assets/img/blog/single_blog_2.png" alt="">
                                    <a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div class="blog_details">
                                    <a class="d-inline-block" href="blog_details.html">
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </a>
                                    <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                        he earth it first without heaven in place seed it second morning saying.</p>
                                    <ul class="blog-info-link">
                                        <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                                        <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                    </ul>
                                    <b-button v-b-toggle.collapse-1 class="toggle-btn">view full content</b-button>
                                    <b-collapse id="collapse-1" class="mt-2">
                                        <b-card>
                                            <p class="card-text">view full content</p>

                                        </b-card>
                                    </b-collapse>
                                </div>
                            </article>

                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src="../../assets/img/blog/single_blog_3.png" alt="">
                                    <a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div class="blog_details">
                                    <a class="d-inline-block" href="blog_details.html">
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </a>
                                    <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                        he earth it first without heaven in place seed it second morning saying.</p>
                                    <ul class="blog-info-link">
                                        <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                                        <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                    </ul>
                                    <b-button v-b-toggle.collapse-1 class="toggle-btn">view full content</b-button>
                                    <b-collapse id="collapse-1" class="mt-2">
                                        <b-card>
                                            <p class="card-text">view full content</p>

                                        </b-card>
                                    </b-collapse>
                                </div>
                            </article>

                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src="../../assets/img/blog/single_blog_4.png" alt="">
                                    <a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div class="blog_details">
                                    <a class="d-inline-block" href="../../blog_details.html">
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </a>
                                    <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                        he earth it first without heaven in place seed it second morning saying.</p>
                                    <ul class="blog-info-link">
                                        <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                                        <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                    </ul>
                                    <b-button v-b-toggle.collapse-1 class="toggle-btn">view full content</b-button>
                                    <b-collapse id="collapse-1" class="mt-2">
                                        <b-card>
                                            <p class="card-text">view full content</p>

                                        </b-card>
                                    </b-collapse>
                                </div>
                            </article>

                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <img class="card-img rounded-0" src="../../assets/img/blog/single_blog_5.png" alt="">
                                    <a href="#" class="blog_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div class="blog_details">
                                    <a class="d-inline-block" href="blog_details.html">
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </a>
                                    <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                        he earth it first without heaven in place seed it second morning saying.</p>
                                    <ul class="blog-info-link">
                                        <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                                        <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                                    </ul>
                                    <b-button v-b-toggle.collapse-1 class="toggle-btn">view full content</b-button>
                                    <b-collapse id="collapse-1" class="mt-2">
                                        <b-card>
                                            <p class="card-text">view full content</p>

                                        </b-card>
                                    </b-collapse>
                                </div>
                            </article>

                            <nav class="blog-pagination justify-content-center d-flex">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a href="#" class="page-link" aria-label="Previous">
                                            <i class="ti-angle-left"></i>
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">1</a>
                                    </li>
                                    <li class="page-item active">
                                        <a href="#" class="page-link">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link" aria-label="Next">
                                            <i class="ti-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>

                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="blog_right_sidebar">
                            <aside class="single_sidebar_widget search_widget">
                                <form action="#">
                                    <div class="form-group">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" placeholder='Search Keyword' onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'">
                                            <div class="input-group-append">
                                                <button class="btns" type="button"><i class="ti-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
                                </form>
                            </aside>

                            <aside class="single_sidebar_widget post_category_widget">
                                <h4 class="widget_title">Category</h4>
                                <ul class="list cat-list">
                                    <li>
                                        <a href="#" class="d-flex">
                                            <p>Resaurant food</p>
                                            <p>(37)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex">
                                            <p>Travel news</p>
                                            <p>(10)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex">
                                            <p>Modern technology</p>
                                            <p>(03)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex">
                                            <p>Product</p>
                                            <p>(11)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex">
                                            <p>Inspiration</p>
                                            <p>21</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex">
                                            <p>Health Care (21)</p>
                                            <p>09</p>
                                        </a>
                                    </li>
                                </ul>
                            </aside>

                            <aside class="single_sidebar_widget popular_post_widget">
                                <h3 class="widget_title">Recent Post</h3>
                                <div class="media post_item">
                                    <img src="../../assets/img/post/post_1.png" alt="post">
                                    <div class="media-body">
                                        <a href="blog_details.html">
                                            <h3>From life was you fish...</h3>
                                        </a>
                                        <p>January 12, 2019</p>
                                    </div>
                                </div>
                                <div class="media post_item">
                                    <img src="../../assets/img/post/post_2.png" alt="post">
                                    <div class="media-body">
                                        <a href="blog_details.html">
                                            <h3>The Amazing Hubble</h3>
                                        </a>
                                        <p>02 Hours ago</p>
                                    </div>
                                </div>
                                <div class="media post_item">
                                    <img src="../../assets/img/post/post_3.png" alt="post">
                                    <div class="media-body">
                                        <a href="blog_details.html">
                                            <h3>Astronomy Or Astrology</h3>
                                        </a>
                                        <p>03 Hours ago</p>
                                    </div>
                                </div>
                                <div class="media post_item">
                                    <img src="../../assets/img/post/post_4.png" alt="post">
                                    <div class="media-body">
                                        <a href="blog_details.html">
                                            <h3>Asteroids telescope</h3>
                                        </a>
                                        <p>01 Hours ago</p>
                                    </div>
                                </div>
                            </aside>
                            <aside class="single_sidebar_widget tag_cloud_widget">
                                <h4 class="widget_title">Tag Clouds</h4>
                                <ul class="list">
                                    <li>
                                        <a href="#">project</a>
                                    </li>
                                    <li>
                                        <a href="#">love</a>
                                    </li>
                                    <li>
                                        <a href="#">technology</a>
                                    </li>
                                    <li>
                                        <a href="#">travel</a>
                                    </li>
                                    <li>
                                        <a href="#">restaurant</a>
                                    </li>
                                    <li>
                                        <a href="#">life style</a>
                                    </li>
                                    <li>
                                        <a href="#">design</a>
                                    </li>
                                    <li>
                                        <a href="#">illustration</a>
                                    </li>
                                </ul>
                            </aside>

                            <aside class="single_sidebar_widget instagram_feeds">
                                <h4 class="widget_title">Instagram Feeds</h4>
                                <ul class="instagram_row flex-wrap">
                                    <li>
                                        <a href="#">
                                            <img class="img-fluid" src="../../assets/img/post/post_5.png" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="img-fluid" src="../../assets/img/post/post_6.png" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="img-fluid" src="../../assets/img/post/post_7.png" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="img-fluid" src="../../assets/img/post/post_8.png" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="img-fluid" src="../../assets/img/post/post_9.png" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="img-fluid" src="../../assets/img/post/post_10.png" alt="">
                                        </a>
                                    </li>
                                </ul>
                            </aside>

                            <aside class="single_sidebar_widget newsletter_widget">
                                <h4 class="widget_title">Newsletter</h4>

                                <form action="#">
                                    <div class="form-group">
                                        <input type="email" class="form-control" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" placeholder='Enter email' required>
                                    </div>
                                    <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Subscribe</button>
                                </form>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <!--================Blog Area =================-->
    </main>
    <div class="mt-5">
        <Footer />
    </div>

</div>
<!-- Blog Area End -->
</template>

<script>
import Bloghero from "./bloghero.vue"
import Head from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue"
// import image from "../../assets/img/post/"
export default {
    name: "Blog",
    data() {
        return {

        }
    },
    components: {
        Head,

        Footer,

        Bloghero

    },
}
</script>

<style scoped>
.form-group {
    margin: 0;
    padding: 20px;

    &:first-child {
        border-color: transparent;
    }
}

.form-control {
    padding: 0px 10px 0 20px;
    margin-top: 10px;
    color: #EDC750;
    font-size: 20px;
    font-weight: 500;
    border: 1px solid #EDC750;
    -webkit-box-shadow: none;
    box-shadow: none;
    min-height: 40px;
    height: 30px;
    border-radius: 50px 0 0 50px !important;
}

.form-control :focus {
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: transparent;

}

#searchbtn {
    border: 0;
    padding: 0px 10px;
    margin-top: 10px;
    color: #fff;
    background: #EDC750;
    font-size: 20px;
    font-weight: 500;
    border: 1px solid #EDC750;
    border-left: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    min-height: 40px;
    height: 30px;
    border-radius: 0 50px 50px 0 !important;
}

toggle-btn {
    background: #f15f22;
    border: 0px;
    border-radius: 25px;
}

.toggle-btn:hover {
    background: #EDC750;
}

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

/* 
.boxed-btn:hover {
    background: #f15f22;
    color: #fff !important;
}

.blog-area .single-blog {
    box-shadow: 1.395px 19.951px 38px 0px rgba(0, 0, 0, 0.05);
    transition: .4s
}

.blog-area .single-blog:hover .blog-img img {
    transform: rotate(1deg) scale(1.1)
}

.blog-area .single-blog .blog-img {
    overflow: hidden
}

.blog-area .single-blog .blog-img img {
    width: 100%;
    transform: rotate(0deg) scale(1);
    -webkit-transition: all .4s ease-out 0s;
    -moz-transition: all .4s ease-out 0s;
    -ms-transition: all .4s ease-out 0s;
    -o-transition: all .4s ease-out 0s;
    transition: all .4s ease-out 0s
}

.blog-area .single-blog .blog-caption {
    padding: 22px 40px 20px 40px
}

@media (max-width: 767px) {
    .blog-area .single-blog .blog-caption {
        padding: 22px 22px 20px 20px
    }
}

.blog-area .single-blog .blog-caption .blog-cap-top span {
    color: #fff;
    background: #c6a16e;
    padding: 4px 13px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    border-radius: 5px
}

.blog-area .single-blog .blog-caption .blog-cap-top ul li {
    color: #c7c7c7;
    font-size: 14px;
    font-family: 'Lato', sans-serif
}

.blog-area .single-blog .blog-caption .blog-cap-top ul li a {
    color: #c6a16e;
    font-size: 14px
}

.blog-area .single-blog .blog-caption .blog-cap-mid p a {
    color: #444444;
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    line-height: 28px;
    margin-bottom: 30px
}

@media (max-width: 767px) {
    .blog-area .single-blog .blog-caption .blog-cap-mid p a {
        font-size: 14px
    }
}

.blog-area .single-blog .blog-caption .blog-cap-mid p a:hover {
    color: #c6a16e
}

.blog-area .single-blog .blog-caption .blog-cap-bottom {
    padding-top: 20px;
    border-top: 1px solid #f9f9f9
}

.blog-area .single-blog .blog-caption .blog-cap-bottom span {
    color: #adadad;
    font-size: 14px
}

.blog-area .single-blog .blog-caption .blog-cap-bottom span img {
    margin-right: 5px
}

.latest-blog-area .area-heading {
    margin-bottom: 70px
}
.blog_area{
    margin-top: 200px !important;
}
.blog_area a {
    color: "Josefin Sans", sans-serif !important;
    text-decoration: none;
    transition: .4s
}

.blog_area a:hover,
.blog_area a :hover {
    background: -webkit-linear-gradient(131deg, #c6a16e 0%, #c6a16e 99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
    transition: .4s
}

.single-blog {
    overflow: hidden;
    margin-bottom: 30px
}

.single-blog:hover {
    box-shadow: 0px 10px 20px 0px rgba(42, 34, 123, 0.1)
}

.single-blog .thumb {
    overflow: hidden;
    position: relative
}

.single-blog .thumb:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    -webkit-transition: all .3s ease-out 0s;
    -moz-transition: all .3s ease-out 0s;
    -ms-transition: all .3s ease-out 0s;
    -o-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s
}

.single-blog h4 {
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 34px;
    margin-bottom: 25px
}

.single-blog a {
    font-size: 20px;
    font-weight: 600
}

.single-blog .date {
    color: #666666;
    text-align: left;
    display: inline-block;
    font-size: 13px;
    font-weight: 300
}

.single-blog .tag {
    text-align: left;
    display: inline-block;
    float: left;
    font-size: 13px;
    font-weight: 300;
    margin-right: 22px;
    position: relative
}

.single-blog .tag:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 10px;
    background: #acacac;
    right: -12px;
    top: 7px
}

@media (max-width: 1199px) {
    .single-blog .tag {
        margin-right: 8px
    }

    .single-blog .tag:after {
        display: none
    }
}

.single-blog .likes {
    margin-right: 16px
}

@media (max-width: 800px) {
    .single-blog {
        margin-bottom: 30px
    }
}

.single-blog .single-blog-content {
    padding: 30px
}

.single-blog .single-blog-content .meta-bottom p {
    font-size: 13px;
    font-weight: 300
}

.single-blog .single-blog-content .meta-bottom i {
    color: #fdcb9e;
    font-size: 13px;
    margin-right: 7px
}

@media (max-width: 1199px) {
    .single-blog .single-blog-content {
        padding: 15px
    }
}

.single-blog:hover .thumb:after {
    opacity: .7;
    -webkit-transition: all .3s ease-out 0s;
    -moz-transition: all .3s ease-out 0s;
    -ms-transition: all .3s ease-out 0s;
    -o-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s
}

@media (max-width: 1199px) {
    .single-blog h4 {
        transition: all 300ms linear 0s;
        border-bottom: 1px solid #dfdfdf;
        padding-bottom: 14px;
        margin-bottom: 12px
    }

    .single-blog h4 a {
        font-size: 18px
    }
}

.full_image.single-blog {
    position: relative
}

.full_image.single-blog .single-blog-content {
    position: absolute;
    left: 35px;
    bottom: 0;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all .3s ease-out 0s;
    -moz-transition: all .3s ease-out 0s;
    -ms-transition: all .3s ease-out 0s;
    -o-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s
}

@media (min-width: 992px) {
    .full_image.single-blog .single-blog-content {
        bottom: 100px
    }
}

.full_image.single-blog h4 {
    -webkit-transition: all .3s ease-out 0s;
    -moz-transition: all .3s ease-out 0s;
    -ms-transition: all .3s ease-out 0s;
    -o-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
    border-bottom: none;
    padding-bottom: 5px
}

.full_image.single-blog a {
    font-size: 20px;
    font-weight: 600
}

.full_image.single-blog .date {
    color: #fff
}

.full_image.single-blog:hover .single-blog-content {
    opacity: 1;
    visibility: visible;
    -webkit-transition: all .3s ease-out 0s;
    -moz-transition: all .3s ease-out 0s;
    -ms-transition: all .3s ease-out 0s;
    -o-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s
}

.l_blog_item .l_blog_text .date {
    margin-top: 24px;
    margin-bottom: 15px
}

.l_blog_item .l_blog_text .date a {
    font-size: 12px
}

.l_blog_item .l_blog_text h4 {
    font-size: 18px;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 0px;
    padding-bottom: 20px;
    -webkit-transition: all .3s ease-out 0s;
    -moz-transition: all .3s ease-out 0s;
    -ms-transition: all .3s ease-out 0s;
    -o-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s
}

.l_blog_item .l_blog_text p {
    margin-bottom: 0px;
    padding-top: 20px
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

.blog_item {
    margin-bottom: 50px
}

.blog_details {
    padding: 30px 0 20px 10px;
    box-shadow: 0px 10px 20px 0px rgba(221, 221, 221, 0.3)
}

@media (min-width: 768px) {
    .blog_details {
        padding: 60px 30px 35px 35px
    }
}

.blog_details p {
    margin-bottom: 30px
}

.blog_details a {
    color: #ff8b23
}

.blog_details a:hover {
    color: #c6a16e
}

.blog_details h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px
}

@media (min-width: 768px) {
    .blog_details h2 {
        font-size: 24px;
        margin-bottom: 15px
    }
}

.blog-info-link li {
    float: left;
    font-size: 14px
}

.blog-info-link li a {
    color: #999999
}

.blog-info-link li i,
.blog-info-link li span {
    font-size: 13px;
    margin-right: 5px
}

.blog-info-link li::after {
    content: "|";
    padding-left: 10px;
    padding-right: 10px
}

.blog-info-link li:last-child::after {
    display: none
}

.blog-info-link::after {
    content: "";
    display: block;
    clear: both;
    display: table
}

.blog_item_img {
    position: relative
}

.blog_item_img .blog_item_date {
    position: absolute;
    bottom: -10px;
    left: 10px;
    display: block;
    color: #fff;
    background-color: #c6a16e;
    padding: 8px 15px;
    border-radius: 5px
}

@media (min-width: 768px) {
    .blog_item_img .blog_item_date {
        bottom: -20px;
        left: 40px;
        padding: 13px 30px
    }
}

.blog_item_img .blog_item_date h3 {
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0;
    line-height: 1.2
}

@media (min-width: 768px) {
    .blog_item_img .blog_item_date h3 {
        font-size: 30px
    }
}

.blog_item_img .blog_item_date p {
    font-size: 18px;
    margin-bottom: 0;
    color: #fff
}

@media (min-width: 768px) {
    .blog_item_img .blog_item_date p {
        font-size: 18px
    }
}

.blog_right_sidebar .widget_title {
    font-size: 20px;
    margin-bottom: 40px
}

.blog_right_sidebar .widget_title::after {
    content: "";
    display: block;
    padding-top: 15px;
    border-bottom: 1px solid #f0e9ff
}

.blog_right_sidebar .single_sidebar_widget {
    background: #fbf9ff;
    padding: 30px;
    margin-bottom: 30px
}

.blog_right_sidebar .single_sidebar_widget .btn_1 {
    margin-top: 0px
}

.blog_right_sidebar .search_widget .form-control {
    height: 50px;
    border-color: #f0e9ff;
    font-size: 13px;
    color: #999999;
    padding-left: 20px;
    border-radius: 0;
    border-right: 0
}

.blog_right_sidebar .search_widget .form-control::placeholder {
    color: #999999
}

.blog_right_sidebar .search_widget .form-control:focus {
    border-color: #f0e9ff;
    outline: 0;
    box-shadow: none
}

.blog_right_sidebar .search_widget .input-group button {
    background: #c6a16e;
    border-left: 0;
    border: 1px solid #f0e9ff;
    padding: 4px 15px;
    border-left: 0;
    cursor: pointer
}

.blog_right_sidebar .search_widget .input-group button i {
    color: #fff
}

.blog_right_sidebar .search_widget .input-group button span {
    font-size: 14px;
    color: #999999
}

.blog_right_sidebar .newsletter_widget .form-control {
    height: 50px;
    border-color: #f0e9ff;
    font-size: 13px;
    color: #999999;
    padding-left: 20px;
    border-radius: 0
}

.blog_right_sidebar .newsletter_widget .form-control::placeholder {
    color: #999999
}

.blog_right_sidebar .newsletter_widget .form-control:focus {
    border-color: #f0e9ff;
    outline: 0;
    box-shadow: none
}

.blog_right_sidebar .newsletter_widget .input-group button {
    background: #fff;
    border-left: 0;
    border: 1px solid #f0e9ff;
    padding: 4px 15px;
    border-left: 0
}

.blog_right_sidebar .newsletter_widget .input-group button i,
.blog_right_sidebar .newsletter_widget .input-group button span {
    font-size: 14px;
    color: #fff
}

.blog_right_sidebar .post_category_widget .cat-list li {
    border-bottom: 1px solid #f0e9ff;
    transition: all 0.3s ease 0s;
    padding-bottom: 12px
}

.blog_right_sidebar .post_category_widget .cat-list li:last-child {
    border-bottom: 0
}

.blog_right_sidebar .post_category_widget .cat-list li a {
    font-size: 14px;
    line-height: 20px;
    color: #888888
}

.blog_right_sidebar .post_category_widget .cat-list li a p {
    margin-bottom: 0px
}

.blog_right_sidebar .post_category_widget .cat-list li+li {
    padding-top: 15px
}

.blog_right_sidebar .popular_post_widget .post_item .media-body {
    justify-content: center;
    align-self: center;
    padding-left: 20px
}

.blog_right_sidebar .popular_post_widget .post_item .media-body h3 {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 6px;
    transition: all 0.3s linear
}

.blog_right_sidebar .popular_post_widget .post_item .media-body a:hover {
    color: #fff
}

.blog_right_sidebar .popular_post_widget .post_item .media-body p {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 0px
}

.blog_right_sidebar .popular_post_widget .post_item+.post_item {
    margin-top: 20px
}

.blog_right_sidebar .tag_cloud_widget ul li {
    display: inline-block
}

.blog_right_sidebar .tag_cloud_widget ul li a {
    display: inline-block;
    border: 1px solid #eeeeee;
    background: #fff;
    padding: 4px 20px;
    margin-bottom: 8px;
    margin-right: 3px;
    transition: all 0.3s ease 0s;
    color: #888888;
    font-size: 13px
}

.blog_right_sidebar .tag_cloud_widget ul li a:hover {
    background: #c6a16e;
    color: #fff !important;
    -webkit-text-fill-color: #fff;
    text-decoration: none;
    -webkit-transition: 0.5s;
    transition: 0.5s
}

.blog_right_sidebar .instagram_feeds .instagram_row {
    display: flex;
    margin-right: -6px;
    margin-left: -6px
}

.blog_right_sidebar .instagram_feeds .instagram_row li {
    width: 33.33%;
    float: left;
    padding-right: 6px;
    padding-left: 6px;
    margin-bottom: 15px
}

.blog_right_sidebar .br {
    width: 100%;
    height: 1px;
    background: #eee;
    margin: 30px 0px
}

.blog-pagination {
    margin-top: 80px
}

.blog-pagination .page-link {
    font-size: 14px;
    position: relative;
    display: block;
    padding: 0;
    text-align: center;
    margin-left: -1px;
    line-height: 45px;
    width: 45px;
    height: 45px;
    border-radius: 0 !important;
    color: #8a8a8a;
    border: 1px solid #f0e9ff;
    margin-right: 10px
}

.blog-pagination .page-link i,
.blog-pagination .page-link span {
    font-size: 13px
}

.blog-pagination .page-item.active .page-link {
    background-color: #fbf9ff;
    border-color: #f0e9ff;
    color: #888888
}

.blog-pagination .page-item:last-child .page-link {
    margin-right: 0
}

.single-post-area .blog_details {
    box-shadow: none;
    padding: 0
}

.single-post-area .social-links {
    padding-top: 10px
}

.single-post-area .social-links li {
    display: inline-block;
    margin-bottom: 10px
}

.single-post-area .social-links li a {
    color: #cccccc;
    padding: 7px;
    font-size: 14px;
    transition: all 0.2s linear
}

.single-post-area .blog_details {
    padding-top: 26px
}

.single-post-area .blog_details p {
    margin-bottom: 20px;
    font-size: 15px
}

.single-post-area .blog-author {
    padding: 40px 30px;
    background: #fbf9ff;
    margin-top: 50px
}

@media (max-width: 600px) {
    .single-post-area .blog-author {
        padding: 20px 8px
    }
}

.single-post-area .blog-author img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-right: 30px
}

@media (max-width: 600px) {
    .single-post-area .blog-author img {
        margin-right: 15px;
        width: 45px;
        height: 45px
    }
}

.single-post-area .blog-author a {
    display: inline-block
}

.single-post-area .blog-author a:hover {
    color: #c6a16e
}

.single-post-area .blog-author p {
    margin-bottom: 0;
    font-size: 15px
}

.single-post-area .blog-author h4 {
    font-size: 16px
} */
</style>
