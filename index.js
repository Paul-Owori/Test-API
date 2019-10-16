//calling expressnpm
const express = require('express');
const userRoutes = require("./routes/Users");
const mongoose = require('mongoose');


//creating express app
const app = express();

//add this for parsing json objects
app.use(express.json());
app.use('/users', userRoutes);


//Testing the app
app.get('/*', (req, res) => {
    res.json('Hello')
});

/**
 * const path = require("path");

 * app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/index.html"));
});
 */

//creating a port
const port = process.env.PORT || 3000;

//Starting the app
let DB_URI = "mongodb://localhost:27017/test-db"
const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}

mongoose.connect(DB_URI, opts)
    .then((res, err) => {
        if (err) {
            console.error('There is an error:', err)
            return;
        } else {
            console.log("Database online");
            app.listen(port, () => {
                console.log("App is listening on port ", port)
            })
        }
    });