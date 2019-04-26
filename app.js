const express = require('express');
const app = express();
const myName = "Louise Iyengar"

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const {projects} = require('./data.json');

app.get('/', (req, res) => {
    res.render('index', {projects, myName});
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

app.use((req, res, next) => {
    const err = new Error('Sorry! You requested a page that does not exist.');
    err.status = 404
    next(err);
});

app.use((err, req, res, next) => {  
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(3000, () => {
    console.log("The application is running on localhost:3000");
});