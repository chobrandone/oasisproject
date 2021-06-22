
/**
 * @post controller to create, findAll, fineOne, update, delete, deleteAll,
 */
 
const post = require("../model/PostSchma");


exports.create  = (req, res, next)=>{

  // validation request
  if (!req.body.postTitle || !req.body.postAuthor || !req.body.postDesc || !req.body.postContent || !req.body.PostimgUrl || !req.body.readTime){
    return res.status(400).send({
      message: "Required field Cant be empty",
    })
    
   } 
  console.log(req.body)

  // * Create a Task
  const task = new post({
    postTitle: req.body.postTitle,
    postAuthor: req.body.postAuthor,
    PostDesc: req.body.PostDesc,
    postimgUrl: req.body.postimgUrl,
    readTime: req.body.readTime,
  })

  // Save to database
task.save((err, result)=>{
  if(err){
    res.send('err')
    console.log(err)
  }
  else{
    message: "post registered successfully!",
    res.send(req.body)
  }
})
}
  /**
   * find all posts
   */

  exports.findAll = (req, res) => {
    const title = req.query.PostTitle;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    post.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving posts.",
            post:data
        });
      });
  };

   /**
   * find one posts
   */
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    post.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found post with id " + id });
        else res.send(data + "success");
      })
      .catch(err => {
        console.log(err);
        res
          .status(400)
          .send({ message: "Error retrieving post with id=" + id });
      });
  };

  /**
   * Update a post
   */

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update post with id=${id}. Maybe post was not found!`
          });
        } else res.send({ message: "post was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating post with id=" + id
        });
      });
  };


  /**
   * @Delete one post
   */

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    post.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete post with id=${id}. Maybe post was not found!`
          });
        } else {
          res.send({
            message: "post was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(400).send({
          message: "Could not delete post with id=" + id
        });
      });
  };

  /**
   * @Delete all post
   */

  exports.deleteAll = (req, res) => {
    post.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} posts were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all posts."
        });
      });
  };

  /**
   * @Find all posts published
   */

  exports.findAllPublished = (req, res) => {
    post.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving posts."
        });
      });
  };
//   module.exports = router;