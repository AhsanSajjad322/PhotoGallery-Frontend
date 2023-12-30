const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to set the views directory and use EJS as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Basic route for the home page
app.get('/', (req, res) => {
    res.render('home');
});


// Basic route for the dashboard page
app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

// Basic route for the login page
app.get('/login', (req, res) => {
    res.render('login');
});

// Basic route for the signup page
app.get('/signup', (req, res) => {
    res.render('signup');
});

// Basic route for the upload page
app.get('/upload', (req, res) => {
    res.render('Upload');
});

// Basic route for the browse page
app.get('/browse', (req, res) => {
    res.render('Browse');
});

// Basic route for the delete page
app.get('/delete', (req, res) => {
    res.render('Delete');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});