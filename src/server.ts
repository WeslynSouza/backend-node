import express from 'express'
import http from 'http'
import finalhandler from 'finalhandler'
import routes from './routes'

const app = express()

const server = http.createServer((req: any, res: any) => {
    app(req, res, finalhandler(req, res))
})

app.use(express.json())
app.use(routes)

server.listen(3000, () => {
    console.log("Iniciado na porta 3000...")
})

