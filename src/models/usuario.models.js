const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  }
});

const Usuario = mongoose.model('teste_tb', usuarioSchema);

module.exports = Usuario;
