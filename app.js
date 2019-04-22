const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const {projects} = require('./data.json');

app.get('/', (req, res) => {
    res.render('index', {projects});
});

app.get('/about', (req, res) => {
    res.locals.noAboutLink = true;
    res.render('about');
});

app.get('/project/:id', (req, res) => {
    id = req.params.id;
    res.locals.project = projects[`${id}`];
    res.render('project');
});

app.listen(3000, () => {
    console.log("The application is running on localhost:3000");
});