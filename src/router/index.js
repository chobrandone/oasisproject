
import Home from '../components/Home/Home.vue'
import Blog from '../components/Blog/Blog.vue'
import Contact from '../components/Contact/Contact.vue'
import Aboutus from '../components/About/About.vue';
import Download from '../components/Download/Download.vue'
import Service from '../components/OurServices/Services.vue'
import Gallery from '../components/Gallery/gallery.vue'


const routes =[

    {
        path :'/',
        name:'Home',
        component: Home
    },
    {
        path :'/contact',
        name:'contact',
        component: Contact
    },
    {
        path :'/blog',
        name:'Blog',
        component: Blog
    },
    {
        path :'/about',
        name:'Aboutus',
        component: Aboutus
    },
    {
        path :'/download',
        name:'Download',
        component: Download
    },
    {
        path :'/service',
        name:'Service',
        component: Service
    },
    {
        path :'/gallery',
        name:'Gallery',
        component: Gallery
    },


]

export default routes