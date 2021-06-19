<template>
    <div>
       <Header/>
  <div class="container mt-5 mb-5 main-download">
      <div class="mb-5"> <h4>How to get the App installed</h4>
   </div>
   <div>
                <iframe width="1180" height="664" src="https://www.youtube.com/embed/1Gsg3Up7GtQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

   </div>
   
   <div class="text-leftbg">
       <h3>procedure</h3>
       <ol>
           <li>start</li>
       </ol>
   </div>

       
    
   
          
     
 

      
  
  </div>
  <Footer/>
 
</div>
    
</template>
<script>
import Header from '../Header/Header.vue'
import Footer from '../Footer/Footer.vue'
export default {
    name:"Download",
    data() {
        return {
            
        }
    },
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped>
    .main-download{
        margin-top: 200px!important;
    }
</style>