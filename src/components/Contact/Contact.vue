<template>
  <div>
      <div class="">
          <Head/>
      </div>
      <div class="mb-5">

          <Contacthero/>
      </div>

       <main>
        
        <!-- ================ contact section start ================= -->
        <section class=" container contact-section">
        
                <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">Get in Touch</h2>
                    </div>
                    <div class="col-lg-8">
                        <form class="form-contact contact_form" id="contactForm" novalidate="novalidate">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea 
                                        class="form-control w-100" 
                                        name="message" 
                                        id="message" cols="30" rows="9" 
                                        onfocus="this.placeholder = ''" 
                                        v-model="sendMessage.message"
                                        onblur="this.placeholder = 'Enter Message'" 
                                        placeholder=" Enter Message" required>
                                        </textarea>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" 
                                        type="text"
                                        name="contactName" 
                                        id="contactName"
                                        v-model="sendMessage.contactName"
                                        onfocus="this.placeholder = ''" 
                                        onblur="this.placeholder = 'Enter your name'" 
                                        placeholder="Enter your name" required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input 
                                        class="form-control valid" 
                                        type="email"
                                        name="contactEmail" 
                                        id="contactEmail"
                                        v-model="sendMessage.contactEmail" 
                                        onfocus="this.placeholder = ''" 
                                        onblur="this.placeholder = 'Enter email address'" 
                                        placeholder="Email" required>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input 
                                        type="number"
                                        class="form-control" 
                                        name="contactPhone"
                                        id="contactPhone"
                                        v-model="sendMessage.contactPhone" 
                                        onfocus="this.placeholder = ''" 
                                        onblur="this.placeholder = 'Enter phone'" 
                                        placeholder="Enter phone">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button 
                                type="submit" 
                                name="btnSubmit" 
                                @click="saveContact"
                                class="button button-contactForm boxed-btn"
                                >Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                                <h3>Mararaba, Nigeria</h3>
                                <p>Heart plaza 2nd floor , suit C24.2nd floor Karu Local government</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                                <h3> +234 813 597 9932</h3>
                                <p>Mon - Sat 8.00Am - 6.00Pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                <h3>oasisplanettech21@gmail.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </section>
        <!-- ================ contact section end ================= -->
    </main>
    <div class=""><Footer/></div>
  </div>
    <!-- contact-form end -->
        
</template>
<script>
//import axios from "axios";
import Head from "../../components/Header/Header.vue"
import Footer from "../Footer/Footer.vue"
import Contacthero from "./Contacthero.vue"
import ContactDataService from "../../services/contact.service";

export default {
    name:"Contact",
    data() {
        return {
             sendMessage: {
                   contactName: '',
                   contactEmail: '',
                   contactPhone: '',
                   message:''
                },
                submitted: false
        }
    },
    methods: {
        retrieveContact() {
                ContactDataService.getAll()
                    .then(response => {
                    let contacts = this.sendMessage = response.data;
                    console.log(contacts, "This is all contact save to database");
                    })
                    .catch(e => {
                    console.log(e);
                    });
                },
                saveContact() {
                var data = {
                    name: this.sendMessage.contactName,
                    phone: this.sendMessage.contactPhone,
                    email: this.sendMessage.contactEmail,
                    message: this.sendMessage.message
                }
            
               ContactDataService.create(data)
                .then(response => {
                let sendId = this.sendMessage.id = response.data._id;
                console.log(response.data);
                console.log(sendId, "Contact save successfully");
                this.submitted = true;
                this.$toasted.show("Meassage sent. Contact save successfully");
                })
                .catch(e => {
                console.log(e);
                });
                },
            newContact() {
                this.submitted = false;
                this.tutorial = {};
            }
    },
    components:{
        Head,
        Footer,
        Contacthero
    },
     mounted() {
    this.retrieveContact();
  }
}
</script>
<style scoped>

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

.contact-info {
    margin-bottom: 25px
}

.contact-info__icon {
    margin-right: 20px
}

.contact-info__icon i, .contact-info__icon span {
    color: #8f9195;
    font-size: 27px
}

.contact-info .media-body h3 {
    font-size: 16px;
    margin-bottom: 0;
    font-size: 16px;
    color: #2a2a2a
}

.contact-info .media-body h3 a:hover {
    color: #222
}

.contact-info .media-body p {
    color: #8a8a8a
}

.contact-title {
    font-size: 27px;
    font-weight: 600;
    margin-bottom: 20px
}

.form-contact label {
    font-size: 14px
}

.form-contact .form-group {
    margin-bottom: 30px
}

.form-contact .form-control {
    border: 1px solid #e5e6e9;
    border-radius: 0px;
    height: 48px;
    padding-left: 18px;
    font-size: 13px;
    background: transparent
}

.form-contact .form-control:focus {
    outline: 0;
    box-shadow: none
}

.form-contact .form-control::placeholder {
    font-weight: 300;
    color: #999999
}

.form-contact textarea {
    border-radius: 0px;
    height: 100% !important
}

.contact-section {
   
   
}

@media (max-width: 991px) {
    .contact-section {
     
    }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .contact-section {
      
    }
}

.contact-section .btn_2 {
    background-color: #191d34;
    padding: 18px 60px;
    border-radius: 50px;
    margin-top: 0
}

.contact-section .btn_2:hover {
    background-color: #222
}

</style>