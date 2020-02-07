const router = require("express").Router();
const postsController = require("../../controllers/postsController");


  router
  .route("/")
    .post(postsController.addPost) // add a userPosts record with the stored account ID
    .get(postsController.getPosts) // get all userPosts records

    router
  .route("/:id") // ":id"=accountID from userposts
    .delete(postsController.remove)
    .put(postsController.update) 


module.exports = router;
