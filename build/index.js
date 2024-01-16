"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const finalhandler_1 = __importDefault(require("finalhandler"));
const express_1 = __importDefault(require("express"));
const teste_json_1 = __importDefault(require("./teste.json"));
const app = (0, express_1.default)();
const server = http_1.default.createServer((req, res) => {
    app(req, res, (0, finalhandler_1.default)(req, res));
});
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(teste_json_1.default));
});
app.post('/teste', (req, res) => {
    console.log(req.body);
    return res.json(req.body);
});
server.listen(3000, () => {
    console.log("Iniciado na porta 3000...");
});
