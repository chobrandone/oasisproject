<template>
    <div class="major">
      
       
            <section class="head"><Head/></section>
            <section class="Navigation"><Navigation/></section>
            <section class="Hero"><Hero/></section>
            <section class="Program"><Program/></section>
            <section class="OurServices"><OurServices/></section>
            <section class="About mb-5"><About/></section>
          <section class="Contact"><Contact/></section>
            <section class="Team"><Team/></section>
              <section class="Showcase"><Showcase/></section>
              <section class="Testimonials"> <Testimonials/></section>
              <section class="Blog"><Blog/></section>
              <section class="Footer"><Footer/></section>
      

        
        
    </div>
</template>
<script>
import Navigation from "../Header/Navigation.vue"
import Head from "../Header/Header";
import Hero from "../Hero/hero.vue"
import Program from "../Program/Program.vue"
import OurServices from "../OurServices/Services.vue"
import About from "../About/About.vue"
import Team from "../OurTeam/Team.vue"
import Showcase from "../Showcase/Showcase.vue"
import Testimonials from "../Testimolials/Testimolials.vue"
import Blog from "../Blog/Blog.vue"
import Contact from "../Contact/Contact.vue"
import Footer from "../Footer/Footer.vue"

export default {
    name:"Home",
    components:{
        Head,
        Navigation,
        Hero,
        Program,
        OurServices,
        About,
        Team,
        Showcase,
        Testimonials,
        Blog,
        Contact,
        Footer
        
    },
    data() {
        return {
            
        }
    },
    
}
</script>
<style>



body{
        font-family: "Barlow", sans-serif;
    font-weight: normal;
    font-style: normal;
}

.white-bg {
    background: #ffffff
}

.gray-bg {
    background: #f5f5f5
}

.gray-bg {
    background: #f7f7fd
}

.white-bg {
    background: #fff
}

.black-bg {
    background: #16161a
}

.theme-bg {
    background: #f15f22
}

.brand-bg {
    background: #f1f4fa
}

.testimonial-bg {
    background: #f9fafc
}

.white-color {
    color: #fff
}

.black-color {
    color: #16161a
}

.theme-color {
    color: #f15f22
}

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
    cursor: pointer
}

.boxed-btn:hover {
    background: #f15f22;
    color: #fff !important;
    border: 1px solid #f15f22
}

.boxed-btn:focus {
    outline: none
}

.boxed-btn.large-width {
    width: 220px
}

[data-overlay] {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center
}

[data-overlay]::before {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    content: ""
}

[data-opacity="1"]::before {
    opacity: 0.1
}

[data-opacity="2"]::before {
    opacity: 0.2
}

[data-opacity="3"]::before {
    opacity: 0.3
}

[data-opacity="4"]::before {
    opacity: 0.4
}

[data-opacity="5"]::before {
    opacity: 0.5
}

[data-opacity="6"]::before {
    opacity: 0.6
}

[data-opacity="7"]::before {
    opacity: 0.7
}

[data-opacity="8"]::before {
    opacity: 0.8
}

[data-opacity="9"]::before {
    opacity: 0.9
}

body {
    font-family: "Barlow", sans-serif;
    font-weight: normal;
    font-style: normal
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Teko", sans-serif;
    color: #2c234d;
    margin-top: 0px;
    font-style: normal;
    font-weight: 500;
    text-transform: normal
}

p {
    font-family: "Barlow", sans-serif;
    color: #10285d;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 15px;
    font-weight: normal
}

    
</style>