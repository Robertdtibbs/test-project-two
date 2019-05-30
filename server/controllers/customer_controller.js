var express = require('express');

var router = express.Router();

var db = require("../models");

router.get("/register", function (req, res) {
    // db.Customer.findAll().then(function(customerData){
    //     res.json(customerData);
    res.send({
        message: 'Your user was registered!'
    })

});
router.post("/register", function (req, res) {
    db.Customer.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        city: req.body.city,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    }).then(function (result) {
        res.json({ id: result.insertId })
    })
})



router.post("/api/customers", function (req, res) {
    db.Customer.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        city: req.body.city,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    }).then(function (result) {
        res.json(result);
    })
})

module.exports = router;