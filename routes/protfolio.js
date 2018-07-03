const express = require('express');
const router = express.Router();

var profile = {
    "fname": "Swetha",
    "lname" : "Kalimela",
    "designation" : "Storage Admin",
    "jobdescription" : "Some one who oaths for 24/7 availability, handles clients requests effectively and always puts client first." ,
    "personalityhighlights":  ["Well organised", "A Team player","Easily adaptable to new envpironments",
      "Quick Learner", "A Practical Thinker","Can work under high pressures"],
    "contact":  [ "Contact:+91-9951296956","Email:kalimelaswetha@gmail.com", "Linkdln:https://www.linkedin.com/in/swethakalimela/"],
     "basicInfo": "I am a professional customer service Representative, with over 6 years expreince. My Unique professional experience stems from years of providing excellent customer support.",
     "education":["Graduate in Bachelor of Technology (B.TECH), Computer Science and Engineering (CSE) with an aggregate of 83.4 in the 2015 year.","Completed Intermediate from  Narayana Junior College, Chandanagar, Hyderabad with an aggregate of 96.4 in the year 2011."],
     "experiance": ["Good Experiance of Storage Admin for 6 years", "Extreame Experiance in IBM SAN, HITACHI and EMC SAN Teachnologies","Good Knowledge of NETAPP NAS products"]      
};



router.get('/', (req,res,next) => {
    res.render('protfolio', {name: profile.fname, lastname: profile.lname, designation: profile.designation, 
        description: profile.jobdescription, personal: profile, contacts: profile,basicinfo: profile.basicInfo,
        educationdetails: profile.education, experiancedetails: profile});
});

module.exports = router;