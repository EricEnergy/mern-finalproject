const db = require("../models");
const axios = require("axios"); // not sure if needed

module.exports = {

  getAppts: function(req, res) {
    console.log(req.query)
    db.Appointments // use "appointments" model
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addAppt: function(req, res) {
    console.log("addAppt")
    db.Appointments
      .create(req.body) // body requires:
                          // fullName, email, phoneNumber, apptTime, contactTime, comments 
                          // this should come from add appointment form
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
