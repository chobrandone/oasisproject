<template>
<div>
<!-- Navigation -->
<nav id="navbar"  :class="{changebackground: scrollPosition > 50}" class="navbar navbar-expand-lg py-4  fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse main" id="navbarResponsive">
      <ul class="navbar-nav ml-auto"  ref="nav">
      
        <li class="nav-item active">
          <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
           <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <div class="dropdown show">
  <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Category
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Home</a>
    <a class="dropdown-item" href="#">Services</a>
    <a class="dropdown-item" href="#">Our Team</a>
  </div>
</div>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
     
         scrollPosition: null,
    }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    },
  },
    mounted() {
    window.addEventListener('scroll', this.updateScroll);
},
}
</script>
<style scoped>
.changebackground  {
       background-color:rgb(185, 191, 247);
       box-shadow: 0px 0px 7px rgb(243, 232, 232);
       color: black;
   }
   .changebackground ul li a {
      
     
       color: black;
   }
  .navbar{
  background: transparent;
 
}
.navbar ul li a{
  color: white;
}
.dropdown-menu a:hover{
  background-color:rgb(161, 189, 241);
   transition: background-color 0.8s ease-out;
}
.main ul li a:hover{
transform: perspective(1px) translateZ(0);
  transition: background-color 0.8s ease-out;
  background-color: rgb(161, 189, 241);
  cursor: pointer;
}
.navbar .join{
  border-radius: 35%;
}
.knowledge{
  color: aliceblue;
  font-size: 70px;
  margin-top: 190px;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 0.4s ease-out;
}
.change_color{
  color: black;
}
</style>