const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb+srv://sutherland:gbUNh28zi6NQO75n@zenovia.ylzqyxn.mongodb.net/?retryWrites=true', { useNewUrlParser: true});

const FuncioSchema = new mongoose.Schema({

    nome        : { type:String, required: true},
    senha       : { type:String, required: true, select: false},
    email       : { type:String, required: true, unique: true},
    telefone    : { type:Number, required: true},
    funcao      : { type:String, required: true}
});

FuncioSchema.pre("save", async function (next) {
    this.senha = await bcrypt.hash(this.senha, 10);
    next();
})

const FuncioModel = mongoose.model('funcionarios', FuncioSchema);

module.exports = {FuncioModel};