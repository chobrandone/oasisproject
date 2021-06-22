const subs = require("../controller/subController");
 const endpoints = require('../utils/endpoints');
 var router = require("express").Router();

// // Create a new subs
 router.post(endpoints.createSubs, subs.create);

  // Retrieve all subs
router.get(endpoints.getsubs, subs.findAll);


  // Retrieve a single subs with id
  router.get(endpoints.getOneSub, subs.findOne);
  
   // Delete a subs with id
   router.delete(endpoints.deleteOneSubs, subs.delete);
  
  // delete all subs
  router.delete(endpoints.deleteAllSubs, subs.deleteAll);

module.exports = router;