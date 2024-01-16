import http from 'http'
import finalhandler from 'finalhandler'
import express from 'express'
import json from './teste.json'

const app = express()

const server = http.createServer((req: any, res: any) => {
    app(req, res, finalhandler(req, res))
})

app.use(express.json())

app.get('/', (req: any, res: any) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(json))
})

app.post('/teste', (req: any, res: any) => {
    console.log(req.body)
    return res.json(req.body)
})

server.listen(3000, () => {
    console.log("Iniciado na porta 3000...")
})

