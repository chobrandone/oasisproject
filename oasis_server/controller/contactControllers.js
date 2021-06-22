
/**
 * @contact controller to create, findAll, fineOne, delete, deleteAll,
 */
 
 const contact = require("../model/contactSchema");

exports.create  = (req, res, next)=>{

    // validation request
    if (!req.body.fullName || !req.body.email || !req.body.phone || !req.body.message){
      return res.status(400).send({
        message: "Required field Cant be empty",
      })
      
     } 
    console.log(req.body)
  
    // * Create a Task
    const sub = new contact({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message
    })
  
    // Save to database
  sub.save((err, result)=>{
    if(err){
      res.send('err')
      console.log(err)
    }
    else{
      message: "contact registered successfully!",
      res.send(req.body)
    }
  })
  }

   /**
   * find one contacts
   */
    exports.findOne = (req, res) => {
        const id = req.params.id;
      
        contact.findById(id)
          .then(data => {
            if (!data)
              res.status(404).send({ message: "Not found contact with id " + id });
            else res.send(data + "success");
          })
          .catch(err => {
            console.log(err);
            res
              .status(400)
              .send({ message: "Error retrieving contact with id=" + id });
          });
      };

/**
   * @Find all contacts published
   */

 exports.findAll = (req, res) => {
    contact.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving contacts."
        });
      });
 }

  /**
   * @Delete one contact
   */

   exports.delete = (req, res) => {
    const id = req.params.id;
  
    contact.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete contact with id=${id}. Maybe contact was not found!`
          });
        } else {
          res.send({
            message: "contact was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(400).send({
          message: "Could not delete contact with id=" + id
        });
      });
  };

  /**
   * @Delete all contact
   */

   exports.deleteAll = (req, res) => {
    contact.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} contacts were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all contacts."
        });
      });
  };