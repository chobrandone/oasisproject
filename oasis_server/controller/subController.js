 
/**
 * @subscriber controller to create, findAll, fineOne, delete, deleteAll,
 */
 
 const subscriber = require("../model/subSchema");

exports.create  = (req, res, next)=>{

    // validation request
    if (!req.body.fullName || !req.body.email){
      return res.status(400).send({
        message: "Required field Cant be empty",
      })
      
     } 
    console.log(req.body)
  
    // * Create a Task
    const sub = new subscriber({
      fullName: req.body.fullName,
      email: req.body.email
    })
  
    // Save to database
  sub.save((err, result)=>{
    if(err){
      res.send('err')
      console.log(err)
    }
    else{
      message: "subscriber registered successfully!",
      res.send(req.body)
    }
  })
  }

   /**
   * find one subscribers
   */
    exports.findOne = (req, res) => {
        const id = req.params.id;
      
        subscriber.findById(id)
          .then(data => {
            if (!data)
              res.status(404).send({ message: "Not found subscriber with id " + id });
            else res.send(data + "success");
          })
          .catch(err => {
            console.log(err);
            res
              .status(400)
              .send({ message: "Error retrieving subscriber with id=" + id });
          });
      };

/**
   * @Find all subscribers published
   */

 exports.findAll = (req, res) => {
    subscriber.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving subscribers."
        });
      });
 }

  /**
   * @Delete one subscriber
   */

   exports.delete = (req, res) => {
    const id = req.params.id;
  
    subscriber.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete subscriber with id=${id}. Maybe subscriber was not found!`
          });
        } else {
          res.send({
            message: "subscriber was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(400).send({
          message: "Could not delete subscriber with id=" + id
        });
      });
  };

  /**
   * @Delete all subscriber
   */

   exports.deleteAll = (req, res) => {
    subscriber.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} subscribers were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all subscribers."
        });
      });
  }; 