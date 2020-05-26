const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'react-playground/build')));

// First Express Endpoint returns a static list
app.get('/api/planets', (req, res) => {
    let list = ["Earth", "Mars", "Venus"];
    res.json(list);
    console.log('Hello Worlds!');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);