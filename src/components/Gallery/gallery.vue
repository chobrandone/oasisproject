<template>
<!--? Blog Area Start -->

<div class="">
    <div class=" head">

        <Head />
    </div>
    <!--gallery section-->

   <div class="container">
  <b-card-group deck>
    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      
    </b-card>

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
     
    </b-card>

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      
    </b-card>
  </b-card-group>
</div>
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
