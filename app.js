const express = require('./modulo/node_modules/express')
const func    = require('./modulo/function.js')

const app  = express()

const whatsapp = require("./modulo/function.js")

app.get("/v1/whatsapp/listar", function(request, response){
    let lista = whatsapp.listar()
    response.json(lista)
    response.status(200)
})


app.get('/v1/whatsapp/listarPerfil/:num', function(request, response){
    let numero = request.params.num
    let zap = whatsapp.listarPerfil(numero)
    if(zap){
        response.status(200)
        response.json(zap)
    }else{
        response.status(404)
        response.json({"mensage": "nenhum dado foi encomtrado."})
    }
})

app.get('/v1/whatsapp/dadosCadaUsuario/:num', function(request, response){
    let numero = request. params.num
    let zap = whatsapp.dadosCadaUsuario(numero)
    if(zap){
        response.json(zap)
        response.status(200)
    }else{
        response.status(404)
        response.json({"mensage": "nenhum dado foi encomtado."})
    }
})


app.get('/v1/whatsapp/conversa/:num', function(request, response){
    let numero = request. params.num
    let zap = whatsapp.conversa(numero)
    if(zap){
        response.json(zap)
        response.status(200)
    }else{
        response.status(404)
        response.json({"mensage": "nenhum dado foi encomtado."})
    }
})


app.get('/v1/whatsapp/buscarConversa/:numero/:contato', function(request, response){

    let num = request.params.numero
    let nome = request.params.contato
    
    let zap = whatsapp.buscarConversa(num, nome)
    
    if(zap){
        response.json(zap)
        response.status(200)
    }else{
        response.status(404)
        response.json({"mensage": "nenhum dado foi encomtado."})
    }
})

app.get('/v1/whatsapp/pesquisarPalavra/:numero/:contato/:chave', function(request, response){

    let num = request.params.numero
    let nome = request.params.contato
    let chave = request.params.chave

    let zap = whatsapp.pesquisarPalavra(num, nome, chave)
    
    if(zap){
        response.json(zap)
        response.status(200)
    }else{
        response.status(404)
        response.json({"mensage": "nenhum dado foi encomtado."})
    }
})


app.get("/v1/whatsapp/help", function(request, response){
    let docAPI = {
        "api-descripition": "api para manipular dados de mensagens",
        "date": "2026-14-04",
        "development": "nathan",
        "vercion": 0.1,
        "endepontes": [
            {
                "router1": "/v1/whatsapp/listar",
                "descripition": "retorna a lista de todos os estados"
            },
            {
                "router2": "/v1/whatsapp/listarPerfil/:num",
                "descripition": "retorna dados especifico do perfil filtrado"
            },
            {
                "router3": "/v1/whatsapp/dadosCadaUsuario/:num",
                "descripition": "retorna dados do usuario como nome, imagem e descrição"
            },
            {
                "router4": "/v1/whatsapp/conversa/:num",
                "descripition": "retorna as ultimas conversas do usuario"
            },
            {
                "router5": "/v1/whatsapp/buscarConversa/:numero/:contato",
                "descripition": "retorna os dados do usuario como nome numero e a comverça do usuario"
            },
            {
                "router6": "/v1/whatsapp/pesquisarPalavra/:numero/:contato/:chave",
                "descripition": "é um filtro de pesquisa de palavra chave de conversa de um usuario"
            },
            
        ]
    }
            response.json(docAPI)
})



//fazer o startr na API(aguardando as requisisoes)
app.listen(8080, function(){
    console.log("API aguardando novas requisiçoes...")
})