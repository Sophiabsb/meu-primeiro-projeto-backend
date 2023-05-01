const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Sophia Loren Barros',
        imagem: 'https://www.instagram.com/p/Cn79a5KsFlu/?utm_source=ig_web_copy_link',
        minibio: 'cabeleleira maquiadora e progamadora',
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://www.instagram.com/p/Cjq702yL4_e/?utm_source=ig_web_copy_link',
        minibio: 'Fundadora da ProgaMaria',
    },
    {
        nome:'Nina da Hora',
        imagem: 'https://ogimg.infoglobo.com.br/in/24599691-04f-26c/FT1086A/89162800_El-Nina-da-Hora.jpg',
        minibio: 'Hacker antiracista',
    },
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

 app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)