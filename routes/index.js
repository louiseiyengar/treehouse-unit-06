const express = require('express');
const router = express.Router();

const myName = "Louise Iyengar"
const {projects} = require('../data.json');

router.get('/', (req, res) => {
    res.render('index', {projects, myName});
});

router.get('/about', (req, res) => {
    res.locals.noAboutLink = true;
    res.render('about', {myName});
});

router.get('/project/:id', (req, res, next) => {
    id = req.params.id;
    if (isNaN(id) || ((id < 0) || (id > (projects.length - 1)))) {
        next(create404Error());
    } 
    res.locals.project = projects[`${id}`];
    res.render('project');
});

module.exports = router;