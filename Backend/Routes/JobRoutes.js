const express = require('express');
const router = express.Router();
const jobController = require('../Controllers/Jobcontroller');

// Ruta para agregar un empleo
router.post('/add', jobController.addJob);

// Ruta para eliminar un empleo
router.delete('/delete/:id', jobController.deleteJob);

module.exports = router;
