
/**
 * @services controller to create, findAll, updates, fineOne, delete, deleteAll,
 */
 
 const services = require("../model/serviceSchema");

exports.create  = (req, res, next)=>{

    // validation request
    if (!req.body.heading || !req.body.desc){
      return res.status(400).send({
        message: "Required field Cant be empty",
      })
      
     } 
    console.log(req.body)
  
    // * Create a Task
    const sub = new services({
      heading: req.body.heading,
      desc: req.body.desc
    })
  
    // Save to database
  sub.save((err, result)=>{
    if(err){
      res.send('err')
      console.log(err)
    }
    else{
      message: "services registered successfully!",
      res.send(req.body)
    }
  })
  }

   /**
   * find one servicess
   */
    exports.findOne = (req, res) => {
        const id = req.params.id;
      
        services.findById(id)
          .then(data => {
            if (!data)
              res.status(404).send({ message: "Not found services with id " + id });
            else res.send(data + "success");
          })
          .catch(err => {
            console.log(err);
            res
              .status(400)
              .send({ message: "Error retrieving services with id=" + id });
          });
      };

/**
   * @Find all servicess published
   */

 exports.findAll = (req, res) => {
    services.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving servicess."
        });
      });
 }

 exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    services.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update services with id=${id}. Maybe services was not found!`
          });
        } else res.send({ message: "services was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating services with id=" + id
        });
      });
  };

  /**
   * @Delete one services
   */

   exports.delete = (req, res) => {
    const id = req.params.id;
  
    services.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete services with id=${id}. Maybe services was not found!`
          });
        } else {
          res.send({
            message: "services was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(400).send({
          message: "Could not delete services with id=" + id
        });
      });
  };

  /**
   * @Delete all services
   */

   exports.deleteAll = (req, res) => {
    services.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} servicess were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all servicess."
        });
      });
  };