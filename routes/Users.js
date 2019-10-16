const express = require('express');
const router = express.Router();
const User = require('./../models/User');


//Creating a get endpoint
router.get('/:userID', (req, res) => {
    const userID = req.params.userID;

    User.findOne({
            _id: userID
        })
        .then(result => {
            if (result !== null) {
                res.status(200).json({
                    result
                })
            } else {

                res.status(404).json({
                    message: "That user does not exist",
                    result
                })
            }
        })
        .catch(err => {
            let message = "An error occurred finding user with ID: " + userID
            console.error(message, err);
            // Send error message to frontend
            res.status(500).json({
                message,
                err
            });


        });

});

// Post endpoint to create new user
router.post('/create', (req, res) => {
    let info = req.body;

    // let password = info.password;
    // let email = info.email

    const {
        email,
        password
    } = info;

    // Create new user object
    let newUser = new User();

    newUser.email = email;
    newUser.password = password;

    // Save the new user
    newUser.save()
        .then(result => {
            console.log("Response", result);
            res.status(201).json({
                result
            })
        })
        .catch(err => {
            let message = "An error occurred creating a new User"
            console.error(message, err);
            // Send error message to frontend
            res.status(500).json({
                message,
                err
            });
        })


    // const User = require('./../models/User');



});



module.exports = router;