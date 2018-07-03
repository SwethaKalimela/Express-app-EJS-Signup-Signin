const express = require('express');
const app = express();
var path = require('path');

/*First you need to import all the routes configured in the routes folder here to use in the express app*/
const protfolioRoutes = require('./routes/protfolio'); 
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');

app.set('view engine', 'ejs'); //Using EJS as template engine to display the protfolio page

/*Configuring the routes impoted above */
app.use('/protfolio', protfolioRoutes); //To view protfolio page route to http://localhost:3000/protfolio 
app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);

/*You will view the signup.html when you route to http://localhost:3000 */
app.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname+'/public/signup.html'));
   
});

app.use(express.static(__dirname + '/public'));

module.exports = app; //To run this express app run node server.js in cmd