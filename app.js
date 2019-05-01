/*
    Treehouse FSJS - Project 6
    This is a node.js and express project to display six of my Front-end Javascript projects
*/

const express = require('express');
const path = require('path');
const app = express();

//Public assets be requested from a path with the /static route location
app.use('/static', express.static(path.join(__dirname, 'public')));

//View Engine is Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Routes for this project are set in the /routes/index.js file
const routes = require('./routes');
app.use(routes);

/*
    This function will create a 404 error.  It is called a GET request contains
    a non-existant route.  It is also called in the routes file for project/:id - if a GET request
    calls a non-existant project. 
*/
const create404Error = () => {
    const err = new Error('Sorry! You requested a page that does not exist.');
    err.status = 404;
    return err;
}

app.use((req, res, next) => {
    next(create404Error());
});

/*
    An error will cause a console.log message to apear and an error page to be rendered.
*/
app.use((err, req, res, next) => {
    console.log(`${err.message} / Status Error #: ${err.status}`); 
    res.locals.error = err;
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, () => {
    console.log("The application is running on localhost:3000");
});

//create404Error function used in routes/index.js also
module.exports = create404Error;