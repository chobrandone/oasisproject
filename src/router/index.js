
import Home from '../components/Home/Home.vue'
import Blog from '../components/Blog/Blog.vue'
import Contact from '../components/Contact/Contact.vue'

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

]

export default routes