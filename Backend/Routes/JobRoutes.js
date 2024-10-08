const express = require('express');
const router = express.Router();
const jobController = require('../Controllers/JobController');


router.post('/add', jobController.AddJob);


router.delete('/delete/:id', jobController.deletejob);


router.get('/jobs', jobController.getAllJobs);




module.exports = router;

