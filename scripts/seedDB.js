const mongoose = require("mongoose");
const db = require("../models");
// const accountsSeed = require("../fakePeople.json");
// const apptsSeed = require("../appts.json");
// const postsSeed = require("../userPosts.json")

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/servproject");
 const accountsSeed = [
  {
    email: "Pasteryman@totallyrealemail.com",
    password: "Iamtherealgingerbreadman",
    companyName: "Bread Head",
    companyCategory: "Salon",
    companyDescription: "I will put yeast in your hair",
    companyCity: "Loaf Town",
    companyState: "TN"
},    {
  email: "SleepyBoy@hotemail.com",
  password: "469205",
  companyCategory: "Barbershop",
  companyName: "Clips and Snips",
  companyDescription: "Very soft and sweet boy",
  companyCity: "Middletown",
  companyState: "GA"
},
{
  email: "Email123@email.com",
  password: "Password123",
  companyCategory: "Beauty",
  companyName: "Beauty Inc",
  companyDescription: "High end Beauty Salon",
  companyCity: "Hollywood",
  companyState: "CA"
},
{
  email: "Ieatchildren@tastychildren.com",
  password: "123456",
  companyCategory: "Tattoo",
  companyName: "Dink it & Ink it",
  companyDescription: "Dink Donk",
  companyCity: "Miami",
  companyState: "FL"
},
{
  email: "Ieatchildren@one.com",
  password: "123456",
  companyCategory: "Tattoo",
  companyName: "Ink it",
  companyDescription: "Ink it",
  companyCity: "Nashville",
  companyState: "TN"
},

{
  email: "one@tastychildren.com",
  password: "123456",
  companyCategory: "Tattoo",
  companyName: "Dink Donk",
  companyDescription: "Dink Donk",
  companyCity: "Miami",
  companyState: "FL"
},    {
  email: "Email456@email.com",
  password: "Password123",
  companyCategory: "Nails",
  companyName: "Nail Salon",
  companyDescription: "We do Nails",
  companyCity: "Antioch",
  companyState: "TN"
},    {
  email: "Email789@email.com",
  password: "Password123",
  companyCategory: "Piercings",
  companyName: "Body Piercing",
  companyDescription: "We do body piercings",
  companyCity: "Azusa",
  companyState: "CA"
},    {
  email: "Number1DekuFan@googlemail.com",
  password: "GiveMeSeafoam",
  companyCategory: "Photography",
  companyName: "Snap & Smile",
  companyDescription: "That sounds like a you problem",
  companyCity: "Nashville",
  companyState: "TN"
},{
  email: "fan@googlemail.com",
  password: "GiveMeSeafoam",
  companyCategory: "Photography",
  companyName: "Smile",
  companyDescription: "That sounds like a you problem",
  companyCity: "Murfreesboro",
  companyState: "TN"
},

 ]
 const apptsSeed =[{
  fullName: "John Wick",
  apptTime: "Morning: 8am - 12pm",
}]
 const postsSeed =[
  {
    accountID: "testID",
    postImageCaption: "this is a sample caption",
    postImageURL: "https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg"
},

 ]
db.Accounts.remove({})
  .then(() => db.Accounts.collection.insertMany(accountsSeed))
  .then(data => {
    console.log(data.result.n + " account records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Appointments.remove({})
  .then(() => db.Appointments.collection.insertMany(apptsSeed))
  .then(data => {
    console.log(data.result.n + " appointment records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.UserPosts.remove({})
  .then(() => db.UserPosts.collection.insertMany(postsSeed))
  .then(data => {
    console.log(data.result.n + " user post records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
