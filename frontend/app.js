const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post('http://backend:5000/process', req.body);
        res.send(`Backend Response: ${response.data}`);
    } catch (error) {
        res.send('Error communicating with Flask backend');
    }
});

app.listen(3000, () => console.log('Frontend listening on port 3000'));
