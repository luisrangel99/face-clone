const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, './../public')));

app.use(require('./routes/index.route'));

require('./db');
app.listen(port, (err) => {
    if(err) return console.log(err);
    console.log(`listening on http://localhost:${port}`);
})