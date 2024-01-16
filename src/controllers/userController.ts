import json from '../teste.json'
import { Request, Response } from 'express'

type User = {
    name: string,
    cpf: number,
    password: string
}

export const getUser = (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(json))
    console.log('novo')
}

export const saveUser = (req: Request, res: Response) => {
    try {
        const user: User = {
            name: req.body.name,
            cpf: req.body.cpf,
            password: req.body.password
        }

        if (!user.name || !user.cpf || !user.password) {
            throw new Error("Erro no formato do dado.")
        }

        console.log(user, "user")
        return res.json(user)
    } catch (error: any) {
        console.error(error.message)

        res.statusCode = 400
        res.send(error.message)
    }
}