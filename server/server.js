
const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const parkRouter = require('./routes/parks.router');


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** ---------- ROUTES ---------- **/
app.use('/parks', parkRouter);

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
