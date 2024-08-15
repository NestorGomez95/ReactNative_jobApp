const express = require('express');
const router = express.Router();
const jobController = require('../Controllers/JobController');

// Ruta para agregar un empleo
router.post('/add', jobController.AddJob);

// Ruta para eliminar un empleo
router.delete('/delete/:id', jobController.deletejob);

// Ruta para obtener todos los empleos
router.get('/jobs', jobController.getAllJobs);

module.exports = router;
