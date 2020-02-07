const router = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated");
const accountsController = require("../../controllers/accountsController");
const auth = require("../../config/auth");

router.route("/").get(accountsController.getAccounts)


router.route("/login").post((req, res) => {
  console.log(req.body)

  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => {res.json(dbUser)
    })
    .catch(err => res.status(400).json(err));
});

router
  .route("/signup")
  .post(accountsController.addAccount); // add an account record to accounts model


  router.route("/:id").get(isAuthenticated, (req, res) => {
    db.Accounts.findById(req.params.id)
      .then(data => {
        if (data) {
          res.json(data);
        } else {
          res.status(404).send({ success: false, message: "No user found" });
        }
      })
      .catch(err => res.status(400).send(err));
  });
  
  
  
module.exports = router;