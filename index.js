const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, this is an update message simple Node.js application!');
});

app.listen(port, () => {
    console.log(`App listening at http://52.90.243.174:${port}`);
});

