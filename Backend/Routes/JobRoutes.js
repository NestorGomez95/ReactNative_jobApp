// routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const jobController = require('./controllers/jobController');
const applicationController = require('../controllers/applicationController');

router.get('/jobs', jobController.getAllJobs);
router.post('/jobs', jobController.createJob);
router.delete('/jobs/:id', jobController.deleteJob);
router.post('/jobs/apply', applicationController.applyForJob); // Nueva ruta para manejar aplicaciones

module.exports = router;
