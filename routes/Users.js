const express = require('express');
const router = express.Router();

//creating a get endpoint
router.get('/:name', (req,res) => {
    const recievedName = req.params.name;

    const ourMessage = "Hello" + recievedName;

    res.status(200).json({message:ourMessage});
});

router.post('/create', (req,res) =>{
    let infoRecieved = req.body.email;
    console.log(infoRecieved);

});



module.exports = router;