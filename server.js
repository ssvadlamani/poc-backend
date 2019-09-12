const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const contactSearch = require('./routes/search.router');
const config = require('./config/config');
app.use(cors())
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());
app.use('/api', contactSearch)
app.listen(config.port)