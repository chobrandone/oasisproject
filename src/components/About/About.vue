<template>
   <!--? About Area Start -->
    <div class="about-low-area padding-bottom mt-5 mb-5">
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
                        <a href="about.html" class="btn">More About Us</a>
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
</template>
<script>
export default {
    name:"About",
    data() {
        return {
            
        }
    },
}
</script>
<style scoped >
.row{
    margin-bottom: 100px;
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
h1, h2, h3, h4, h5, h6 {
    font-family: "Teko", sans-serif;
    color: #2c234d;
    margin-top: 0px;
    font-style: normal;}

@media only screen and (min-width: 992px) and (max-width: 1199px){
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
    height: 500px;
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
    .row{
    margin-bottom: 50px;
    }
}

@media (max-width: 575px) {
    .about-low-area .about-img .about-font-img {
        position: unset;
        display: none;

    }
    .btn{
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