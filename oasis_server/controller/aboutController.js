
/**
 * @aboutUs controller to create, findAll, updates, fineOne, delete, deleteAll,
 */
 
 const aboutUs = require("../model/aboutSchema");

exports.create  = (req, res, next)=>{

    // validation request
    if (!req.body.heading || !req.body.desc){
      return res.status(400).send({
        message: "Required field Cant be empty",
      })
      
     } 
    console.log(req.body)
  
    // * Create a Task
    const sub = new aboutUs({
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
      message: "aboutUs registered successfully!",
      res.send(req.body)
    }
  })
  }

   /**
   * find one aboutUss
   */
    exports.findOne = (req, res) => {
        const id = req.params.id;
      
        aboutUs.findById(id)
          .then(data => {
            if (!data)
              res.status(404).send({ message: "Not found aboutUs with id " + id });
            else res.send(data + "success");
          })
          .catch(err => {
            console.log(err);
            res
              .status(400)
              .send({ message: "Error retrieving aboutUs with id=" + id });
          });
      };

/**
   * @Find all aboutUss published
   */

 exports.findAll = (req, res) => {
    aboutUs.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving aboutUss."
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
  
    aboutUs.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update aboutUs with id=${id}. Maybe aboutUs was not found!`
          });
        } else res.send({ message: "aboutUs was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating aboutUs with id=" + id
        });
      });
  };

  /**
   * @Delete one aboutUs
   */

   exports.delete = (req, res) => {
    const id = req.params.id;
  
    aboutUs.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete aboutUs with id=${id}. Maybe aboutUs was not found!`
          });
        } else {
          res.send({
            message: "aboutUs was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(400).send({
          message: "Could not delete aboutUs with id=" + id
        });
      });
  };

  /**
   * @Delete all aboutUs
   */

   exports.deleteAll = (req, res) => {
    aboutUs.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} aboutUss were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all aboutUss."
        });
      });
  };