const zap = require("./contatos.js")

const whatsapp = zap.contatos


const listar = function(){
    return whatsapp
}

const listarPerfil = function(num){
    let numero = String(num) 
    let wpp = {}

    whatsapp["whats-users"].forEach(function(item){
        if(numero == item.number)
        wpp = {
            nome:item.account,
            
        }
    })
}

console.log(listarPerfil());
