const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set storage engine for multer
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload with multer settings
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }, // 10MB limit
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('song');

// Check file type
function checkFileType(file, cb) {
    const filetypes = /mp3|mpeg|wav/; // Accept only these file types
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Error: Audio files only!');
    }
}

// Serve static files
app.use(express.static('public'));

// Render the homepage
app.get('/', (req, res) => {
    res.render('index', { title: 'Mood-Based Music Platform', msg: '', file: '' }); // Pass title, msg, and file variables
});

// Search route
app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(query));

    if (filteredSongs.length > 0) {
        res.render('searchResults', { title: 'Search Results', songs: filteredSongs, msg: '' }); // Pass title, songs, and msg variable
    } else {
        res.render('searchResults', { title: 'Search Results', msg: 'No songs found.' });
    }
});

// Route to handle file upload
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('index', { title: 'Mood-Based Music Platform', msg: err, file: '' });
        } else {
            if (req.file === undefined) {
                res.render('index', { title: 'Mood-Based Music Platform', msg: 'No file selected!', file: '' });
            } else {
                // Pass the uploaded file info to the front end
                res.render('index', { 
                    title: 'Mood-Based Music Platform', 
                    msg: 'File uploaded!',
                    file: `/uploads/${req.file.filename}` // Correctly pass the file variable
                });
            }
        }
    });
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
