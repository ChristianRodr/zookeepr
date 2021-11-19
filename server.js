const { animals } = require('./data/animals.json');
const express = require('express');
const app = express();

function filterByQuery(query, animalsArray)

app.get('/api/animals', (req, res) => {
    let results = animals;
    console.log(req.query)
    res.json(results);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});