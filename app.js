const express = require('express');

// express app
const app = express();

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {

    // res.send('<p>homepage</p>');
    res.sendfile('./views/index.html', { root: __dirname })

})
app.get('/about', (req, res) => {

    // res.send('<p>about page</p>');

    res.sendfile('./views/about.html', { root: __dirname })

})
app.get('/about-us', (req, res) => {

    res.redirect('/about')

})
app.use('/', (req, res) => {

    res.status(404).sendfile('./views/404.html', { root: __dirname })

})