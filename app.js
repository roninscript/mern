const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 80;

app.use('/', express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', "index.html"));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
