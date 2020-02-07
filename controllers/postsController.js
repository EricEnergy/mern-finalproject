const db = require("../models");

module.exports = {

  // getMemberPosts: function(req, res) {
  //   console.log("get member posts")
  //   db.posts // use "posts" model
  //   //   .findByID(req.params.accountID) // need account ID
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  addPost: function (req, res) {
    console.log(req.body)
    db.UserPosts // use "posts" model
      .create(req.body) // body requires:
      // accountID, postImageCaption, postImageURL
      //this should come from add a post form
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getPosts: function (req, res) {
    console.log(req.query)
    db.UserPosts
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.UserPosts.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.UserPosts.findOneAndUpdate({ accountID: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getimages: function (req, res) {
    console.log(req.query)
    db.UserPosts.findById({ accountID: req.params.id }, (req.body))
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};