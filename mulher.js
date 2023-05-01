const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: 'Sophia Loren' ,
    imagem: 'https://www.instagram.com/p/Cn79a5KsFlu/?utm_source=ig_web_copy_link',
    minibio: 'maquiadora e aluna de programação'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get ('/mulher' ,mostraMulher))
app.listen(porta, mostraPorta)