const express = require("express");
const router = express.Router();
var path = require('path');
var fs  = require('fs');


router.get('/success', (req,res,next) => { //on successfull signup posted using get method  reffer signup.html file with action /signup/success
    fs.readFile('./public/login.html',null, function(error,data){ //we will render login.html using fs module
        if(error) {
            res.writeHead(404);
            res.write('File Not Found');
        } else {
            res.write(data);            
        }
        res.end();
    });
    
});

module.exports = router;