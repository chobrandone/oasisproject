<template>
<!--? Blog Area Start -->

<div class="">
    <div class=" head">

        <Head />
    </div>







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

      <!-- Category -->
      <a href="#!" class="pink-text">
        <h6 class="font-weight-bold mb-3"><i class="fas fa-map pr-2"></i>Adventure</h6>
      </a>
      <!-- Post title -->
      <h4 class="font-weight-bold mb-3"><strong>Title of the new article</strong></h4>
      <!-- Post data -->
      <p>by <a class="font-weight-bold">Billy Forester</a>, 15/07/2018</p>
      <!-- Excerpt -->
   
      <!-- Read more button -->
      <a class="btn btn-pink btn-rounded btn-md">Read more</a>

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

      <!-- Category -->
      <a href="#!" class="deep-orange-text">
        <h6 class="font-weight-bold mb-3"><i class="fas fa-graduation-cap pr-2"></i>Education</h6>
      </a>
      <!-- Post title -->
      <h4 class="font-weight-bold mb-3"><strong>Title of the new article</strong></h4>
      <!-- Post data -->
      <p>by <a class="font-weight-bold">Billy Forester</a>, 13/07/2018</p>
      <!-- Excerpt -->
      <p class="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        voluptatum deleniti atque corrupti quos dolores.</p>
      <!-- Read more button -->
      <a class="btn btn-deep-orange btn-rounded btn-md">Read more</a>

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

      <!-- Category -->
      <a href="#!" class="blue-text">
        <h6 class="font-weight-bold mb-3"><i class="fas fa-fire pr-2"></i>Culture</h6>
      </a>
      <!-- Post title -->
      <h4 class="font-weight-bold mb-3"><strong>Title of the new article</strong></h4>
      <!-- Post data -->
      <p>by <a class="font-weight-bold">Billy Forester</a>, 11/07/2018</p>
      <!-- Excerpt -->
      <p class="dark-grey-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
        quia consequuntur magni dolores eos qui ratione.</p>
      <!-- Read more button -->
      <a class="btn btn-info btn-rounded btn-md">Read more</a>

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

    <div fixed-bottom>
        <Footer />
    </div>

</div>
<!-- Blog Area End -->
</template>

<script>
import Head from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue"
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
        // VueGallerySlideshow

    },
}
</script>

<style scoped>
.gallery {
    margin-top: 200px !important;
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
