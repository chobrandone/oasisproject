 const posts = require("../controller/postController");
 const endpoints = require('../utils/endpoints');
 var router = require("express").Router();

// // Create a new post
 router.post(endpoints.createpost, posts.create);

// // Create a new post images
// //router.post("/images", posts.create);

// Retrieve all posts
router.get(endpoints.getPosts, posts.findAll);

// // Retrieve all images
// //router.get("/images", posts.findAll);

// // Retrieve all published posts
 router.get(endpoints.publishedPost, posts.findAllPublished);

// Retrieve a single post with id
router.get(endpoints.getPostById, posts.findOne);

  

 // Delete a post with id
 router.delete(endpoints.deletePost, posts.delete);

// Create a new post
router.delete(endpoints.deleteAll, posts.deleteAll);

// // app.use('/api/', router);


 module.exports = router;