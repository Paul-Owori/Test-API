//calling expressnpm
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require("./users");
const mongoose = require('mongoose');


//creating express app
const app = express();

//add this for parsing json objects
app.use(express.json());
app.use('/users', userRoutes);


//Testing the app
app.get('/', (req, res) => {
    res.json('Hello')
});

//creating a port
const port = process.env.PORT || 3000;

//Starting the app
let DB_URI = "mongodb://localhost:27017/test-db"
mongoose.connect(DB_URI)
    .then((res, err) => {
        if (err) {
            console.error('There is an error:', err)
            return;
        } else {
            app.listen(port, () => {
                console.log("App is listening on port ", port)
            })
        }
    });