import express,{ Request, Response, NextFunction } from "express";
import { router } from "./routes";
import "express-async-errors"
import "reflect-metadata";
import "./database/index";
 
// Importando funções de rotas
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
app.use(router);
 
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
       
        if (err instanceof Error ){
            return response.status(400).json({
                error: err.message,
            });
        }
 
        return response.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
)
// Inicializando o servidor
console.log("Start Server At:3000");
app.listen(3000, "0.0.0.0");