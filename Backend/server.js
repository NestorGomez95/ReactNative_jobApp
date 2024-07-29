// server.js
const express = require('express');
const bodyParser = require('body-parser');
const Jobapplication = require('./models/Jobapplication');
const JobApplication = require(Jobapplication); // Importa el modelo

const app = express();

app.use(bodyParser.json()); // Middleware para parsear JSON

// Ruta para manejar solicitudes POST del formulario de contacto
app.post('/jobs/apply', async (req, res) => {
  try {
    const { jobTitle, name, email, address, phoneNumber, availableHours } = req.body;
    const newApplication = new JobApplication({
      jobTitle,
      name,
      email,
      address,
      phoneNumber,
      availableHours,
    });
    await newApplication.save();
    res.status(200).send({ message: 'Application submitted successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to submit application.', error });
  }
});

module.exports = app;
