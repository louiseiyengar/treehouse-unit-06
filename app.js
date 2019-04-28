const express = require('express');
const app = express();
const myName = "Louise Iyengar"

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const {projects} = require('./data.json');

const create404Error = () => {
    const err = new Error('Sorry! You requested a page that does not exist.');
    err.status = 404
    return err;
}

app.get('/', (req, res) => {
    res.render('index', {projects, myName});
});

app.get('/about', (req, res) => {
    res.locals.noAboutLink = true;
    res.render('about');
});

app.get('/project/:id', (req, res, next) => {
    id = req.params.id;
    if (isNaN(id) || ((id < 0) || (id > (projects.length - 1)))) {
        next(create404Error());
    } 
    res.locals.project = projects[`${id}`];
    res.render('project');
});

app.use((req, res, next) => {
    next(create404Error());
});

app.use((err, req, res, next) => {  
    res.locals.error = err;
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, () => {
    console.log("The application is running on localhost:3000");
});

const createError404 = () => {
    const err = new Error('Sorry! You requested a page that does not exist.');
    err.status = 404
    return err;
}