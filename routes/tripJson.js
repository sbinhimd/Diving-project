const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TripData = require("../model/trips");

router.get("/", (req, res) => {
  TripData.find({},(error, data)=>{
    res.render("Trip/index", { Trips: data });
  })
});
// new Trip
router.get("/create", (req, res) => {
  res.render("Trip/Create");
});

router.post("/", (req, res) => {
  var newTrip = req.body;
  var trip = new TripData(newTrip);
  trip
    .save()
    .then(data => {
      res.redirect("/trips");
    })
    .catch(err => {
      console.log("error in post /");
    });
});

//get single trip
router.get("/:id", (req, res) => {
  TripData.findById(req.params.id).then(data => {
    res.render("Trip/show", { trip: data });
  });
});

//delet
router.delete("/:id", (req, res) => {
    TripData.findByIdAndDelete(req.params.id)
    .then(data => {
    res.redirect("/trips");
  });
});

//update
router.get("/edit/:id", (req, res) => {
    TripData.findById(req.params.id)
    .then(data => {
      res.render("Trip/edit", { trip : data });
    })
    .catch(err => console.log(" error in get/:id "));
});

router.put("/edit/:id", (req, res) => {
  var updateTrip = req.body;
  TripData.findByIdAndUpdate(req.params.id, updateTrip)
    .then(data => {
    res.redirect("/trips");
  });
});

module.exports = router;
