<template>
<div>
    <Head/>
    <Teamhero/>
   <div class="team-area section-padding30">
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
                            <img src="../../assets/img/team/team1.png" alt="">
                            <div class="team-caption">
                                <h3><a href="#">Mr. David Brian</a></h3>
                                <p>C.E.O</p>
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
                            <img src="../../assets/img/team/team3.png" alt="">
                            <div class="team-caption">
                                <h3><a href="#">Mrs. JOY OBOT</a></h3>
                                <p>Sectary General</p>
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
                            <img src="../../assets/img/team/team4.png" alt="">
                            <div class="team-caption">
                                <h3><a href="#">Mrs. FAITH BABALOLA</a></h3>
                                <p>Managing Director</p>
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
                            <img src="../../assets/img/team/team2.png" alt="">
                            <div class="team-caption">
                                <h3><a href="#">Mr. IMO JOSEPH</a></h3>
                                <p>Dirctor Of Operations</p>
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
    </div>
    <Footer/>
    </div>
</template>
<script>
import Head from "../Header/Header.vue"
import Teamhero from "./Teamhero.vue"
import Footer from "../Footer/Footer.vue"
export default {
    name:"Team",
    data() {
        return {
            
        }
    },
    components:{
        Head,
        Footer,
        Teamhero
    }
}
</script>
<style scoped>
    .section-tittle span {
    font-size: 30px;
    display: block;
    color: #EDC750;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 17px;
}
.team-area .single-team .team-img {
    position: relative;
    overflow: hidden
}

.team-area .single-team .team-img img {
    width: 100%;
    height: 400px;
}

.team-area .single-team .team-caption {
    position: absolute;
    bottom: -36px;
    background: rgba(255, 255, 255, 0.6);
    width: 100%;
    padding-top: 20px;
    padding-bottom: 30px;
    text-align: center;
    -webkit-transition: all .4s ease-out 0s;
    -moz-transition: all .4s ease-out 0s;
    -ms-transition: all .4s ease-out 0s;
    -o-transition: all .4s ease-out 0s;
    transition: all .4s ease-out 0s
}

.team-area .single-team .team-caption h3 {
    margin-bottom: 3px;
    line-height: 13px;
    font-family: "Barlow", sans-serif
}

.team-area .single-team .team-caption h3 a {
    color: #2c234d;
    font-weight: 700;
    font-size: 20px
}

.team-area .single-team .team-caption h3 a:hover {
    color: #EDC750;
}

.team-area .single-team .team-caption p {
    color: #2c234d;
    font-size: 16px;
    margin: 0;
    padding: 0
}

.team-area .single-team:hover .team-img .team-social a {
    transform: translateY(6px);
    opacity: 1;
    visibility: visible;
    color: #fff
}

.team-area .single-team:hover .team-caption {
    background: #EDC750;
    bottom: 0
}

.team-area .single-team:hover .team-caption h3 a {
    color: #fff
}

.team-area .single-team:hover .team-caption p {
    color: #fff
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
    font-style: normal;
    font-weight: 500;
    text-transform: normal;
}

.team-social {
    bottom: 22px;
    left: 0;
    right: 0;
    text-align: center
}

.team-social li {
    display: inline-block
}

.team-social li a {
    color: #8ba4b1;
    font-size: 14px;
    margin: 0 12px;
    display: inline-block;
    -webkit-transform: .4s;
    -ms-transform: .4s;
    transform: .4s;
    transform: translateY(60px);
    opacity: 1;
    visibility: visible
}

.team-social li a i {
    display: inline-block
}

.team-social li:nth-child(1) a {
    transition-delay: 0.0s
}

.team-social li:nth-child(2) a {
    transition-delay: 0.1s
}

.team-social li:nth-child(3) a {
    transition-delay: 0.2s
}

.team-social li:nth-child(4) a {
    transition-delay: 0.3s
}
@media only screen and (min-width: 992px) and (max-width: 1999px){
.section-padding30 {
    padding-top: 150px;
    padding-bottom: 110px;
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