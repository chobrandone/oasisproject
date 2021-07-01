<template>
<!--? Blog Area Start -->

<div class="">
    <div >

        <Head />
    </div>
    <div class="gallery mb-5">    <Galleryhero/></div>








<!-- Grid row -->
<div class="container"> <div class="row ">

    <!-- Grid column -->
    <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">

      <!-- Featured image -->
      <div class="view overlay rounded z-depth-2 mb-4">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg" alt="Sample image">
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

     

    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-4 col-md-6 mb-md-0 mb-4">

      <!-- Featured image -->
      <div class="view overlay rounded z-depth-2 mb-4">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Sample image">
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

      

    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-4 col-md-6 mb-0">

      <!-- Featured image -->
      <div class="view overlay rounded z-depth-2 mb-4">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg" alt="Sample image">
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

      

    </div>
    <!-- Grid column -->

  </div></div>
 
  <!-- Grid row -->







    <!--gallery section-->

   <!-- <div class="container">
  <b-card-group deck>
    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      
    </b-card>

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
     
    </b-card>

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      
    </b-card>
  </b-card-group>
</div> -->
    <!-- <div>
  <img class="image" v-for="(image, i) in images" :src="image" :key="image.id" @click="onClick(i)">
  <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
</div> -->

    <div>
        <Footer />
    </div>

</div>
<!-- Blog Area End -->
</template>

<script>
import Head from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue"
import Galleryhero from "./galleryhero.vue"
// import VueGallerySlideshow from "../../assets/js/vue-gallery-slideshow.min.js"
// import blog from "../../assets/img/blog/single_blog_5.png"
export default {
    name: "Blog",
    data() {
        return   {

        }
    },
    methods: {
        onClick(i) {
            this.index = i;
        }
    },
    components: {
        Head,

        Footer,
        Galleryhero
        // VueGallerySlideshow

    },
}
</script>

<style scoped>
.gallery {
    margin-top: 50px !important;
}

.head {
    margin-bottom: 200px !important;
}

.image {
    width: 20%;
    height: 20%;
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
}
</style>
