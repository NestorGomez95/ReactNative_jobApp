// routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const jobController = require('./controllers/jobController');

router.get('/jobs', jobController.getAllJobs);
router.post('/jobs', jobController.createJob);
router.delete('/jobs/:id', jobController.deleteJob);

module.exports = router;
