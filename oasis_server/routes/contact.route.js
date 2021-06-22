const contact = require("../controller/contactControllers");
 const endpoints = require('../utils/endpoints');
 var router = require("express").Router();

// // Create a new contact
 router.post(endpoints.createcontact, contact.create);

  // Retrieve all contact
router.get(endpoints.getcontacts, contact.findAll);


  // Retrieve a single contact with id
  router.get(endpoints.getOnecontact, contact.findOne);
  
   // Delete a contact with id
   router.delete(endpoints.deleteOnecontact, contact.delete);
  
  // delete all contact
  router.delete(endpoints.deleteAllcontacts, contact.deleteAll);

module.exports = router;