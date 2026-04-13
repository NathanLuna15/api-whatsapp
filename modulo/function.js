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
            nome: item.account,
            nick: item.nickname,
            foto: item["profile-image"],
            numero: item.number,
            cor: item.background,
            startEnd: item["created-since"]
        }
    })
        return wpp
}

const dadosCadaUsuario = function(num){
    let numero = String(num)
    let wpp = {}

    whatsapp["whats-users"].forEach(function(item){
        if(numero == item.number){
            item.contacts.forEach(function(desc){
                wpp = {
                    nome: desc.name,
                    foto: desc.image,
                    description: desc.description
                }
            })
        }  
    })
        return wpp
}

console.log(dadosCadaUsuario("11987876567"));



