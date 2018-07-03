const express = require("express");
const router = express.Router();


router.post('/login-success', (req,res,next) => { //on successfull signup posted using get method  reffer login.html file with action /login we will display below msg
        res.send("You have been logged in successfully!Explore your Dashboard!");
});

module.exports = router;