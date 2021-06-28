<template>
<header>
    <!-- Header Start -->
    <div>

        <div class="header-bottom  ">
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
                                <b-nav-item @click="about" class="link">About</b-nav-item>
                                <b-nav-item @click="service" class="link">Services</b-nav-item>
                                <b-nav-item @click="blog" class="link">Blog</b-nav-item>
                                <b-nav-item @click="contact" class="link">Contact</b-nav-item>
                                <!-- Header-btn -->
                                <div class="header-right-btn d-none d-lg-block ml-20 text-center">
                                    <a @click="download" class="btn header-btn">Get Oasis App</a>
                                </div>
                            </b-navbar-nav>

                        </b-navbar-nav>
                    </b-collapse>

                </div>
            </b-navbar>
        </div>

    </div>
    <!-- Header End -->
</header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            scrollPosition: null,
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
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
        home: function () {
            this.$router.push({
                path: "/",
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
          service: function () {
            this.$router.push({
                path: "/service",
            });
        },

    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },

}
</script>

<style scoped>
.link:hover {
    background: #f15f22;
    padding: 0px 10px;
    padding-top:3px;
    border-radius: 22px;
}

.oasislogo img {
    height: 100px;
}

.ml-20 {
    margin-left: 20px;
}

.d-lg-block {
    display: block !important;

}

.btn {
    padding: 20px;
    text-transform: uppercase;
    font-family: Barlow, sans-serif;
    color: rgb(255, 255, 255);
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 0;
    cursor: pointer;
    position: relative;
    z-index: 1;
    background: #EDC750;
    padding: 50px 44px;
    border-radius: 5px;
    transition: color 0.4s linear 0s;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    overflow: hidden;
    margin: 0px;
}
.btn:hover{
    background:#f15f22 ;
    color: wheat;
}

.header-btn {
    padding: 35px;
}
.header-btn:hover{
    background: #f15f22;
    color: white;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.mobile_menu .slicknav_menu .slicknav_btn .slicknav_icon-bar {
    background-color: #f15f22 !important
}

.mobile_menu .slicknav_menu .slicknav_nav {
    margin-top: 9px !important;
    box-shadow: 0 0 10px 3px rgba(141, 140, 140, 0.5)
}

.mobile_menu .slicknav_menu .slicknav_nav a:hover {
    background: transparent;
    color: #f15f22
}

.mobile_menu .slicknav_menu .slicknav_nav a {
    font-size: 15px;
    padding: 7px 10px
}

.mobile_menu .slicknav_menu .slicknav_nav .slicknav_item a {
    padding: 0 !important
}

.header-btn {
    padding: 25px 35px
}

.mobile_menu {
    position: absolute;
    right: 0px;
    width: 100%;
    z-index: 99
}

.mobile_menu .slicknav_menu {
    background: transparent;
    margin-top: 0px !important
}

.mobile_menu .slicknav_menu .slicknav_btn {
    top: -34px
}

.mobile_menu .slicknav_menu .slicknav_btn .slicknav_icon-bar {
    background-color: #f15f22 !important
}

.mobile_menu .slicknav_menu .slicknav_nav {
    margin-top: 9px !important;
    box-shadow: 0 0 10px 3px rgba(141, 140, 140, 0.5)
}

.mobile_menu .slicknav_menu .slicknav_nav a:hover {
    background: transparent;
    color: #f15f22
}

.mobile_menu .slicknav_menu .slicknav_nav a {
    font-size: 15px;
    padding: 7px 10px
}

.mobile_menu .slicknav_menu .slicknav_nav .slicknav_item a {
    padding: 0 !important
}

.header-btn {
    padding: 25px 35px
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .header-area .header-bottom {

        height: 50px;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .header-area .header-bottom {
        padding: 15px 0px
    }
}

@media (max-width: 575px) {
    .header-area .header-bottom {
        padding: 15px 0px
    }
}

.header-area {
    background: #000c20;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .header-area {
        box-shadow: 0 10px 15px rgba(25, 25, 25, 0.1)
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .header-area {
        box-shadow: 0 10px 15px rgba(25, 25, 25, 0.1)
    }
}

@media (max-width: 575px) {
    .header-area {
        box-shadow: 0 10px 15px rgba(25, 25, 25, 0.1)
    }
}

.header-area .header-top {
    border-bottom: 1px solid #2d2d2d;
    padding: 9px 0px
}

.header-area .header-top .header-info-left ul li {
    color: #7b8693;
    display: inline-block;
    margin-right: 70px;
    font-size: 14px
}

.header-area .header-top .header-info-left ul li:last-child {
    margin-right: 0px
}

.header-area .header-top .header-info-left ul li i {
    margin-right: 8px
}

.header-area .header-top .header-info-right .header-social li {
    display: inline-block
}

.header-area .header-top .header-info-right .header-social li a {
    color: #7b8693;
    font-size: 14px;
    padding-left: 25px
}

.header-area .header-top .header-info-right .header-social li a:hover {
    color: #EDC750;
}

.main-header {
    position: relative;
    z-index: 3
}

@media only screen and (min-width: 1200px) and (max-width: 1600px) {
    .main-header .main-menu {
        margin-right: 30px
    }
}

.main-header .main-menu ul li {
    display: inline-block;
    position: relative;
    z-index: 1;
    list-style-type: none;

}

.main-header .main-menu ul li:hover {
    background: #f15f22;
    width: inherit;
    height: 35px;
    cursor: pointer;
    border-radius: 20px;

}

.main-header .main-menu ul li a {
    color: #fff;
    font-weight: 200;
    /* padding: 39px 19px; */
    display: block;
    font-size: 16px;
    -webkit-transition: all .3s ease-out 0s;
    -moz-transition: all .3s ease-out 0s;
    -ms-transition: all .3s ease-out 0s;
    -o-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
    text-transform: capitalize;
    list-style-type: none;
    padding: 5px 15px !important;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .main-header .main-menu ul li a {
        /* padding: 39px 14px */
    }
}

.main-header .main-menu ul li:hover>a {
    color: #EDC750;
}

.header-transparent {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9
}

.header-area .header-top .header-info-right .header-social a i {
    -webkit-transition: all .4s ease-out 0s;
    -moz-transition: all .4s ease-out 0s;
    -ms-transition: all .4s ease-out 0s;
    -o-transition: all .4s ease-out 0s;
    transition: all .4s ease-out 0s;
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -o-transform: rotateY(0deg)
}

.header-area .header-top .header-info-right .header-social a:hover i {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg)
}

.header-sticky.sticky-bar {
    background: #EDC750;
}

.header-sticky.sticky-bar.sticky .main-menu ul li a {
    /* padding: 20px 20px !important */
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .header-sticky.sticky-bar.sticky {
        padding: 15px 0px
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .header-sticky.sticky-bar.sticky {
        padding: 15px 0px
    }
}

@media (max-width: 575px) {
    .header-sticky.sticky-bar.sticky {
        padding: 15px 0px
    }
}

.modal-message .modal-dialog .modal-content .modal-header h2 {
    display: block;
    text-align: center;
    padding-bottom: 10px
}

.modal-message .modal-dialog .modal-content .modal-header p {
    display: block
}
</style>
