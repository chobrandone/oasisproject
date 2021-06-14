<template>
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
        </div>
    </div>
    <!-- Blog Area End -->
</template>
<script>
export default {
    name:"Blog",
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>




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
    color: #EDC750;
}

.single-post-area .blog-author p {
    margin-bottom: 0;
    font-size: 15px
}

.single-post-area .blog-author h4 {
    font-size: 16px
}
.home-blog-area .home-blog-single .blog-img {
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 30px
}

.home-blog-area .home-blog-single .blog-img img {
    width: 100%;
    -webkit-transform: scale 1;
    -ms-transform: scale 1;
    transform: scale 1;
    transition: all 0.5s ease-out 0s
}

.home-blog-area .home-blog-single .blog-caption .blog-date {
    background: #f5f5f5;
    padding: 14px 19px;
    display: block;
    float: left;
    overflow: hidden;
    border-radius: 6px
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .home-blog-area .home-blog-single .blog-caption .blog-date {
        padding: 8px 20px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .home-blog-area .home-blog-single .blog-caption .blog-date {
        padding: 8px 20px
    }
}

@media (max-width: 575px) {
    .home-blog-area .home-blog-single .blog-caption .blog-date {
        padding: 8px 20px;
        float: unset;
        display: inline-block
    }
}

.home-blog-area .home-blog-single .blog-caption .blog-date span {
    color: #EDC750;
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    margin: 0
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .home-blog-area .home-blog-single .blog-caption .blog-date span {
        font-size: 22px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .home-blog-area .home-blog-single .blog-caption .blog-date span {
        font-size: 22px
    }
}

@media (max-width: 575px) {
    .home-blog-area .home-blog-single .blog-caption .blog-date span {
        font-size: 22px
    }
}

.home-blog-area .home-blog-single .blog-caption .blog-date p {
    color: #111111;
    margin: 0;
    font-size: 14px;
    line-height: 1.1
}

.home-blog-area .home-blog-single .blog-caption .blog-cap {
    margin-left: 100px
}

@media (max-width: 575px) {
    .home-blog-area .home-blog-single .blog-caption .blog-cap {
        margin-left: 0px;
        margin-top: 10px
    }
}

.home-blog-area .home-blog-single .blog-caption .blog-cap ul {
    margin-bottom: 10px
}

.home-blog-area .home-blog-single .blog-caption .blog-cap ul li {
    display: inline-block;
    padding-right: 40px
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .home-blog-area .home-blog-single .blog-caption .blog-cap ul li {
        padding-right: 14px
    }
}

.home-blog-area .home-blog-single .blog-caption .blog-cap ul li:last-child {
    padding-right: 0px
}

.home-blog-area .home-blog-single .blog-caption .blog-cap ul li a {
    color: #717b9b;
    font-size: 13px
}

.home-blog-area .home-blog-single .blog-caption .blog-cap ul li a i {
    padding-right: 10px
}

.home-blog-area .home-blog-single .blog-caption .blog-cap h3 a {
    color: #191d34;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 20px;
    display: block
}

.home-blog-area .home-blog-single .blog-caption .blog-cap h3 a:hover {
    color: #EDC750;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .home-blog-area .home-blog-single .blog-caption .blog-cap h3 a {
        font-size: 17px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .home-blog-area .home-blog-single .blog-caption .blog-cap h3 a {
        font-size: 17px
    }
}

@media (max-width: 575px) {
    .home-blog-area .home-blog-single .blog-caption .blog-cap h3 a {
        font-size: 17px
    }
}

.home-blog-single:hover .blog-img img {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1)
}

.latest-blog-area .area-heading {
    margin-bottom: 70px
}

.blog_area a {
    color: "Teko", sans-serif !important;
    text-decoration: none;
    transition: .4s
}

.blog_area a:hover, .blog_area a :hover {
    background: -webkit-linear-gradient(131deg, #f15f22 0%, #f15f22 99%);
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
    .section-tittle h2 {
    font-size: 30px;
    display: block;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 1.3;
}
}
    
</style>