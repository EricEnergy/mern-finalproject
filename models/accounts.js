var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const states = [
    "AK","AL","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO",
    "MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
];


const accountSchema = new Schema({


    email: {
        type: String,
        required: "email is required",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    password: {
        type: String,
        required: "password is required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },


    companyName: {
        type: String,
        required: "company name is required"
    },

    companyCategory: {
        type: String,
    },

    companyDescription: String,

    companyCity: String,

    companyState: {
        type: String,
    },

    createdDate: {
        type: Date,
        default: Date.now
    }

});

// Execute before each user.save() call
accountSchema.pre("save", function(callback) {
    let user = this;
  
    // Break out if the password hasn't changed
    if (!user.isModified("password")) return callback();
  
    // Password changed so we need to hash it
    bcrypt.genSalt(5, function(err, salt) {
      if (err) return callback(err);
  
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) return callback(err);
        user.password = hash;
        callback();
      });
    });
  });
  
  accountSchema.methods.verifyPassword = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  };

var Account = mongoose.model("account", accountSchema);

module.exports = Account;