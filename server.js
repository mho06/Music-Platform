const express = require('express');
const path = require('path');

const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Render the homepage
app.get('/', (req, res) => {
    res.render('index', { title: 'Mood-Based Music Platform' });
});

// Start the server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});
