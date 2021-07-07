import Vue from 'vue'
import App from './App.vue'
// import router from './router' 
// import Embed from 'v-video-embed'
import VueRouter from 'vue-router'
import Routes from "../src/router/index"
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/bootstrap.min.css"
// import "./assets/css/owl.carousel.min.css"

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue'
import "./assets/css/bootstrap.min.css"
import "./assets/css/flaticon.css"
import "./assets/css/animate.min.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/fontawesome-all.min.css"
import "./assets/css/themify-icons.css"
import "./assets/css/slick.css"

import "./assets/css/nice-select.css"
// import VeeValidate from "vee-validate";

// import { ValidationProvider } from 'vee-validate';

const router= new VueRouter({
 routes: Routes
})
// global register
// Vue.use(Embed);
Vue.use(BootstrapVue)
// Vue.use(VeeValidate);
Vue.use(VueRouter)
Vue.config.productionTip = false
// Vue.component('ValidationProvider', ValidationProvider);

new Vue({

  render: h => h(App),
  router:router
}).$mount('#app')
