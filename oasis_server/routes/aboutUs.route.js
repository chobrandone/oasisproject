const aboutUs = require("../controller/aboutController");
const endpoints = require('../utils/endpoints');
var router = require("express").Router();

// // Create a new aboutUs
router.post(endpoints.createaboutUs, aboutUs.create);

 // Retrieve all aboutUs
router.get(endpoints.getaboutUs, aboutUs.findAll);

// Update a post with id
router.put(endpoints.editaboutUs, aboutUs.update);

 // Retrieve a single aboutUs with id
 router.get(endpoints.getOneaboutUs, aboutUs.findOne);
 
  // Delete a aboutUs with id
  router.delete(endpoints.deleteOneaboutUs, aboutUs.delete);
 
 // delete all aboutUs
 router.delete(endpoints.deleteAllaboutUs, aboutUs.deleteAll);

module.exports = router;