const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sutherland:gbUNh28zi6NQO75n@zenovia.ylzqyxn.mongodb.net/?retryWrites=true', { useNewUrlParser: true});

const EstacionamentoSchema = new mongoose.Schema({

    nome                    : { type:String, required: true},
    descricao               : { type:String, required: true},
    quantidade_vagas        : { type:Number, required: true},
    telefone                : { type:Number, required: true, unique: true},
    endereco                : { type:String, required: true},
    cep                     : { type:Number, required: true},
    valor_multa             : { type:Number, required: true},
    valor_vaga              : { type:Number, required: true},
    valor_hora_extra        : { type:Number, required: true},
    taxa_cancelamento       : { type:Number, required: true},
    cnpj                    : { type:Number, required: true, unique: true, select: false},
    nome_proprietario       : { type:String, required: true},
    funcionario             : { type: mongoose.Schema.Types.ObjectId, ref: "FuncioModel", require: true, },
    valor_espera            : { type:Number, required: true},
    limite_horas            : { type:Number, required: true}
});

const EstacionamentoModel = mongoose.model('estacionamentos', EstacionamentoSchema);

module.exports = {EstacionamentoModel};