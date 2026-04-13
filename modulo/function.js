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
    let wpp = []


    whatsapp["whats-users"].forEach(function(item){
        if(numero == item.number){
            item.contacts.forEach(function(desc){
                wpp.push({
                    nome: desc.name,
                    foto: desc.image,
                    description: desc.description
                })
            })
        }  
    })
        return wpp
}


const conversa = function(num){
    let numero = String(num)
    let wpp = []

    whatsapp["whats-users"].forEach(function(item){
        if(numero == item.number){
            item.contacts.forEach(function(mario){
                mario.messages.forEach(function(mensagem){
                    wpp.push({
                        enviado: mensagem.sender,
                        conteudo: mensagem.content,
                        tempo: mensagem.time
                    })
                })
            })
        }  
    })
        
    return wpp
}


const buscarConversa = function(num, nomeContato) {
    let numero = String(num)
    let resultado = {}

    whatsapp["whats-users"].forEach(function(item) {
        if (numero == item.number) {
            resultado.nome   = item.account
            resultado.numero = item.number

            item.contacts.forEach(function(contato) {
                if (contato.name == nomeContato) {
                    resultado.conversa = contato.messages
                }
            })
        }
    })

    return resultado
}

const pesquisarPalavra = function(num, nomeContato, palavra) {
    let numero = String(num)
    let resultado = []

    whatsapp["whats-users"].forEach(function(item) {
        if (numero == item.number) {

            item.contacts.forEach(function(desc) {
                if (desc.name == nomeContato) { 

                    let mensagensFiltradas = desc.messages.filter(function(msg) {
                        return msg.content.toLowerCase().includes(palavra.toLowerCase())
                    })

                    if (mensagensFiltradas.length > 0) {
                        resultado.push({
                            contato:   desc.name,
                            foto:      desc.image,
                            descricao: desc.description,
                            mensagens: mensagensFiltradas
                        })
                    }
                }
            })
        }
    })

    return resultado
}



console.log(pesquisarPalavra("11987876567", "Ana Maria", "a"));

