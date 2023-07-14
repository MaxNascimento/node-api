const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(express.json())

app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(3030, () => {
    console.log(`Servidor está executando.`)
})