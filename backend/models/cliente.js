const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true});

const ClienteSchema = new mongoose.Schema({
    nome:       { type: String, required: true },
    senha:      { type: String, required: true, select: false },
    telefone:   { type: Number, required: true },
    email:      { type: String, required: true, unique: true },
    modelo:     { type: String, required: true },
    placa:      { type: String, required: true, unique: true },
});

ClienteSchema.pre("save", async function (next) {
    this.senha = await bcrypt.hash(this.senha, 10);
    next();
})

var ClienteModel = mongoose.model("clientes", ClienteSchema);

module.exports = {ClienteModel};