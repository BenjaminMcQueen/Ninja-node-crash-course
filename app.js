const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();
app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://benjaminmcqueen9:Open@cluster0.tdki6hs.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {app.listen(3000)})
    .then(() => {console.log('Connected')})
    .catch(err => {console.log(err)});


//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my blog'
//     });

//     blog.save()
//         .then(result => {
//             res.send(result);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then(result => {
//         res.send(result)
//     })
//     .catch(err => {
//         console.log(err);
//     });
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('64ea3492a383b700681f372e')
//     .then((result) => res.send(result))
// })

app.get('/', (req, res) => {
    // const blogs = [
    //     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    // ];

    // // res.send('<p>homepage</p>');
    // // res.sendfile('./views/index.html', { root: __dirname })
    // res.render('index', { title: 'Home', blogs });
    res.redirect('/blogs');
});
app.get('/about', (req, res) => {

    // res.send('<p>about page</p>');
    // res.sendfile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'about' });
});
app.get('/about-us', (req, res) => {

    res.redirect('/about');

});

app.use('/blogs', blogRoutes);

app.use('/', (req, res) => {

    // res.status(404).sendfile('./views/404.html', { root: __dirname });
    res.render('404', { title: '404' });

});