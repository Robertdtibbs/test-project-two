const express = require("express");
const morgan = require('morgan');
const cors = require('cors');

var db = require("./models");

const PORT = process.env.PORT || 8081

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());

var routes = require("./controllers/customer_controller.js");
app.use(routes)

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("Listening now on port:", PORT);
    })
})