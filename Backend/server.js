// server.js
const mongoose = require('mongoose');
const app = require('./app');
const { mongoURI } = require('./config');

const PORT = process.env.PORT || 3000;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
