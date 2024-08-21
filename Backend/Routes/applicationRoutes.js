const express = require('express');
const router = express.Router();
const jobController = require('../Controllers/JobController');


router.post('/apply', jobController.applyForJob);

module.exports = router;
