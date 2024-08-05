
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const JobApplication = require('./models/JobApplication'); 
const app = express();

app.use(bodyParser.json());

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
