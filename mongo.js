const mongoose = require('mongoose');
mongoose
  .connect('mongo://localhost:27017/login')
  .then(() => {
    console.log('mongodb conectado');
  })
  .catch(() => {
    console.log('Falhou');
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model('collection', newSchema);

module.exports = collection;
