const express = require('express');
const morgan = requre('morgan');

// express app
const app = express();

app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

//middleware and static files
app.use(express.static('public'));

app.use(morgan('dev'));

// app.use((req, res) => {
//     console.log('new request made:');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     next();
// });

// app.use((req, res) => {
//     console.log('in the middleware');
//     next();
// });

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];

    // res.send('<p>homepage</p>');
    // res.sendfile('./views/index.html', { root: __dirname })
    res.render('index', { title: 'Home', blogs });

});
app.get('/about', (req, res) => {

    // res.send('<p>about page</p>');
    // res.sendfile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'about' });
});
app.get('/about-us', (req, res) => {

    res.redirect('/about');

});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
});

app.use('/', (req, res) => {

    // res.status(404).sendfile('./views/404.html', { root: __dirname });
    res.render('404', { title: '404' });

});