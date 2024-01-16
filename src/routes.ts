import express from 'express'
import json from './teste.json'

const routes = express.Router()

routes.get('/', (req: any, res: any) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(json))
    console.log('teste')
})

routes.post('/teste', (req: any, res: any) => {
    console.log(req.body)
    return res.json(req.body)
})

export default routes