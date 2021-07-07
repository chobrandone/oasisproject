<template>
<div>

    <div>
        <div class="">

            <Head />
        </div>
    </div>
    <div class="">

        <Gallery />
    </div>

    <div class="container mt-5 mb-5">

        <div class="row img-thumbnails">
            <div class="col-md-6 mb-3">
                <a href="#">
                    <img src="../../assets/img/gallery/G1.jpeg" class="img-thumbnail">
                </a>
            </div>
            <div class="col-md-6 mb-3">
                <a href="#">
                    <img src="../../assets/img/gallery/G2.jpeg" class="img-thumbnail">
                </a>
            </div>
            <div class="col-md-4 mb-4">
                <a href="#">
                    <img src="../../assets/img/gallery/G3.jpeg" class="img-thumbnail">
                </a>
            </div>
            <div class="col-md-4 mb-4">
                <a href="#">
                    <img src="../../assets/img/gallery/G4.jpeg" class="img-thumbnail">
                </a>
            </div>
            <div class="col-md-4 mb-4">
                <a href="#">
                    <img src="../../assets/img/gallery/G.jpeg" class="img-thumbnail">
                </a>
            </div>
            <div class="col-md-6">
                <a href="#">
                    <img src="../../assets/img/gallery/G6.jpeg" class="img-thumbnail">
                </a>
            </div>
            <div class="col-md-6">
                <a href="#">
                    <img src="../../assets/img/gallery/G7.jpeg" class="img-thumbnail">
                </a>
            </div>
        </div>

    </div>
    <Footer />
</div>
</template>

<script>
import Head from '../Header/Header.vue'
import Gallery from './galleryhero.vue'
import Footer from '../Footer/Footer.vue'
// import Images from '../../assets/img/gallery/G1.jpeg'
export default {
    data() {
        return {

        }
    },
    components: {
        Gallery,
        Head,
        Footer
    }

}
</script>

<style scoped>
/* .col-md-4{ height: 200PX;} */
</style>
