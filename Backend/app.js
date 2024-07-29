// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jobRoutes = require('./Routes/JobRoutes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', jobRoutes);

module.exports = app;
