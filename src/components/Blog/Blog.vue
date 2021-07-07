<template>
<!--? Blog Area Start -->

<div class="">
    <div class="">

        <Head />
    </div>
    <Bloghero />

    <main>

        <!--================Blog Area =================-->
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
                                        <img src="../../assets/img/blog/blog5.png" alt="">
                                    </div>
                                </div>
                                <div class="blog-caption">
                                    <div class="blog-date text-center">
                                        <span>27</span>
                                        <p>SEP</p>
                                    </div>
                                    <div class="blog-cap text-center">
                                        <ul>
                                            <li><a href="#"><i class="ti-user"></i>C.E.O David</a></li>
                                            <li><a href="#"><i class="ti-comment-alt"></i> 12</a></li>
                                        </ul>
                                        <h3 class="text-center"><a @click="blog"> Apology for customer line unavailability</a></h3>
                                    </div>
                                    <div class="ru2n4">
                                        To all our highly esteemed customers.
                                        <br>
                                        <br>
                                        We're deeply sorry for not been able to reach us through our customer line.
                                        <br>
                                        <br>
                                        We're working hard to provide more customer line and to also ensure creditability.
                                        <br>
                                        <br>
                                        Thank you so much for your understanding.
                                        <br>
                                        <br>
                                        <strong>Oasis planet Tech </strong>  ~ Competency and intergrity.
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="home-blog-single mb-30">
                                <div class="blog-img-cap">
                                    <div class="blog-img">
                                        <img src="../../assets/img/blog/oasis.jpg" alt="">
                                    </div>
                                </div>
                                <div class="blog-caption">
                                    <div class="blog-date text-center">
                                        <span>27</span>
                                        <p>SEP</p>
                                    </div>
                                    <div class="blog-cap text-center">
                                        <ul>
                                            <li><a href="#"><i class="ti-user"></i>C.E.O David</a></li>
                                            <li><a href="#"><i class="ti-comment-alt"></i> 12</a></li>
                                        </ul>
                                        <h3 class="text-center"><a @click="blog"> Oasis Planet Tech brochure </a></h3>
                                    </div>
                                    <div class="ru2n4">
                                        Taking a look at our brochure helps you better who we are and what we have to offer.
                                        <br>
                                        <br>
                                        <strong> THE WINNING TEAM NOW 🤗🤗 </strong>
                                    </div>

                                </div>
                            </div>

                        </div>


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
                                    <div class="blog-cap text-center">
                                        <ul>
                                            <li><a href="#"><i class="ti-user"></i>C.E.O David</a></li>
                                            <li><a href="#"><i class="ti-comment-alt"></i> 12</a></li>
                                        </ul>
                                        <h3 class="text-center"><a @click="blog"> Oasis Planet Tech Packages</a></h3>
                                    </div>
                                    <div class="ru2n4">
                                        Our packages are:
                                        <br>
                                        <br>
                                        <p> Gold.... #100,000 </p>
                                        <p> Diamond...#50,000 </p>
                                        <p> Silver.......#20,000 </p>
                                        <p> Bronze....#5,000 </p>
                                        The system does not allow upgrade for now. Hence, make choices that will benefit for the first 12months.

                                    </div>

                                    <div class="mb-3">
                                      <b-button v-b-toggle.my-collapse-1 class="toggle-btn togle">Read More</b-button>
                                <b-collapse id="my-collapse-1" class="mt-2">
                                    <div>
                                        <p class="px-3 py-2"> you are all welcome to our blog Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    </div>

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
                                    <div class="blog-cap text-center">
                                        <ul>
                                            <li><a href="#"><i class="ti-user"></i> C.E.O David</a></li>
                                            <li><a href="#"><i class="ti-comment-alt"></i> 12</a></li>
                                        </ul>
                                        <h3 class="text-center"><a @click="blog"> Risk management </a></h3>
                                    </div>
                                </div>
                                <div class="ru2n4">
                                    The system has it's inbuilt mechanisms for risk..
                                    <p> We work in partnership with: </p>
                                    <p> - A Pan-african bank (UBA) and </p>
                                    <p> - A Pan-african mobile network provider(MTN) </p>
                                    <p> Instant transfer into subscribers account and can be cashed daily.... </p>
                                </div>

                                <div class="mb-3">
                                    <b-button v-b-toggle.collapse-1 class="toggle-btn togle">Read More</b-button>
                                    <b-collapse id="collapse-1" class="mt-2">
                                        <b-card>
                                            No request for withdrawal that could be rejected....
                                            <br>
                                            <br>
                                            Payment made daily into subscribers account..
                                            <br>
                                            <br>
                                            Recoupment of reg- fee and much more in one month of subscriptions...
                                            <br>
                                            <br>
                                            Hence our business is <strong> risk free. </strong>
                                        </b-card>
                                    </b-collapse>
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
                                    <div class="blog-cap text-center">
                                        <ul>
                                            <li><a href="#"><i class="ti-user"></i> C.E.O David</a></li>
                                            <li><a href="#"><i class="ti-comment-alt"></i> 12</a></li>
                                        </ul>
                                        <h3 class="text-center"><a @click="blog"> Explaining The OASIS APP</a></h3>
                                    </div>
                                </div>
                                <div class="ru2n4">
                                    Good day friends 🌻
                                    <br>
                                    <br>
                                    I welcome you all to this platform
                                    Oasis planet tech is one unique system that gives you opportunity to *learn* and *earn*
                                    <br>
                                    <br>
                                    Our world 🌍🌍 has changed and we are in a connected economy.
                                    <br>
                                    <br>
                                    This economy allow you to make money through a system and just using your phone.
                                    <br>
                                    <br>
                                    Our world is in dear need of men and women of skills.

                                </div>
                                <div class="mb-3">
                                   <b-button v-b-toggle.my-collapse-2 class="toggle-btn togle">Read More</b-button>
                                <b-collapse id="my-collapse-2" class="mt-2">
                                    <div>
                                        <p class="px-3 py-2"> you are all welcome to our blog Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    </div>

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
                                    <div class="blog-cap text-center">
                                        <ul>
                                            <li><a href="#"><i class="ti-user"></i> Secretary General</a></li>
                                            <li><a href="#"><i class="ti-comment-alt"> </i> 12</a></li>
                                        </ul>
                                        <h3 class="text-center"><a @click="blog">Managing the App Demand</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <b-button v-b-toggle.my-collapse class="toggle-btn togle">Read More</b-button>
                                <b-collapse id="my-collapse" class="mt-2">
                                    <div>
                                        <p class="px-3 py-2"> you are all welcome to our blog Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    </div>

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



.togle {
    border-radius: 25px;
    background: #EDC750;
    color: white !important;
    display: inline-block;

    font-size: 14px;
    font-weight: 400;

    border: 1px solid #EDC750;

    text-align: center;

    text-transform: uppercase;
    cursor: pointer;
}

.form-group {
    margin: 0;
    padding: 20px;

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

    border-radius: 25px !important;

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
</style>
