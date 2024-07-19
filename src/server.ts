import express, { json } from "express"
import "dotenv/config"
import mongoose from "mongoose"
import { userRouter } from "../src/routes/userRoutes"
import { taskRouter } from "./routes/taskRoutes"

const app = express()
const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@tarefas-api-cluster.ge8mzhh.mongodb.net/tarefas-api-cluster?retryWrites=true&w=majority&appName=tarefas-api-cluster`)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})
.catch(() => console.log("Conexão com banco de dados falhou!"))

app.use(json())
app.use(userRouter)
app.use(taskRouter)