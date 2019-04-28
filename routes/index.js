const express = require('express');
const router = express.Router();

const {projects} = require('../data.json');

router.get('/', (req, res) => {
    const myName = "Louise Iyengar"
    res.render('index', {projects, myName});
});

router.get('/about', (req, res) => {
    res.locals.noAboutLink = true;
    res.render('about');
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