const express = require('express');
require('dotenv').config();
const app = express();
const routes = require('./routes/');
const {eggImage} = require('./eggImage');

/// MIDDLEWARE STACK

//// read stream for public directory 
app.use(express.static(__dirname + "/public"));


//// print easter egg if url includes string 'egg'
app.use((req, res, next) => {
    if (req.url.includes("egg")) console.log(eggImage);
    next();
});

/// main routing
app.use('/', routes);


// error handler
app.use((req, res, next) => {
    let err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    err.message = `${err.status} ${err.message}`
    res.send(err.message);
});


///   SERVER
// choice || default
const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});