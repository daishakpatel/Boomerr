const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/mac.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'mac.html'));
});

app.get('/windows.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'windows.html'));
});

app.get('/results.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'results.html'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const inputValue = req.body.inputValue;
    // Process the form data here (e.g., save to database, perform some action, etc.)
    console.log('Form submitted with value:', inputValue);

    res.send('Form submitted successfully');
});

// Basic API endpoint
app.get('/api/recommendations', (req, res) => {
    const recommendations = [
        { id: 1, name: 'MacBook Pro', category: 'Mac' },
        { id: 2, name: 'Dell XPS', category: 'Windows' },
        { id: 3, name: 'Surface Laptop', category: 'Windows' }
    ];
    res.json(recommendations);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
