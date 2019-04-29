const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const routes = require('./routes');
app.use(routes);

const create404Error = () => {
    const err = new Error('Sorry! You requested a page that does not exist.');
    err.status = 404
    return err;
}

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

module.exports = create404Error;