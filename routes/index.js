const express = require('express');
const router = express.Router();

const myName = "Louise Iyengar"

//Data about projects are stored in data.json file
const {projects} = require('../data.json');

var app = require('../app.js');

router.get('/', (req, res) => {
    res.render('index', {projects, myName});
});

router.get('/about', (req, res) => {
    res.locals.noAboutLink = true;  //The 'Learn More' link should not appear in /about Route
    res.render('about', {myName});
});

router.get('/project/:id', (req, res, next) => {
    id = req.params.id;
    //if the id param is not an existing projecct, create 404 error 
    if (isNaN(id) || ((id < 0) || (id >= projects.length))) {
        next(app.create404Error);
    } else {
        res.locals.project = projects[`${id}`];
        res.render('project');
    }
});

module.exports = router;