<template>
    <div>
       <Header/>
  <div class="container mt-5 mb-5 main-download">
      <div class="mb-5"> <h4>How to get the App installed</h4>
   </div>
  <div class="row">
                <div class="col-sm-12">
                    <!-- 16:9 -->

                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="//www.youtube.com/embed/lZoeoCSXGY8"></iframe>
                    </div>
                </div>

            </div>
   
   <div class="text-left mt-5">
       <h3>OASIS PLANET TECH MOBILE APP GUIDE


</h3>
<p>This document is an initial guide to the development and deployment of the oasis planet tech mobile application. It captures our understanding/interpretation of the project. The proposed application is a mobile app that enables the user to earn from performing tasks which include watching videos etc.
App Usage (User Story)</p>
       <ol>
           <li>User registers on the app using their phone number, name and password.</li>
           <li> The user is sent a verification code via SMS.</li>
           <li> The user inputs the verification and is asked to put in banking details.</li>
           <li> (optionally)BVN is used to verify the identity of the user.</li>
           <li> When the user is let into the system, instructions on usage is given.</li>
           <li>The user selects a level they want to register for.</li>
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
   
</style>