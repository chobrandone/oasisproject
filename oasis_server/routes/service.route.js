const service = require("../controller/aboutController");
const endpoints = require('../utils/endpoints');
var router = require("express").Router();

// // Create a new service
router.post(endpoints.createservice, service.create);

 // Retrieve all service
router.get(endpoints.getservice, service.findAll);

// Update a post with id
router.put(endpoints.editservice, service.update);

 // Retrieve a single service with id
 router.get(endpoints.getOneservice, service.findOne);
 
  // Delete a service with id
  router.delete(endpoints.deleteOneservice, service.delete);
 
 // delete all service
 router.delete(endpoints.deleteAllservice, service.deleteAll);

module.exports = router;