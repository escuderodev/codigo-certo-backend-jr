import express, { json } from "express"
import "dotenv/config"
import mongoose from "mongoose"
import { userRouter } from "../src/routes/userRoutes"

const app = express()
const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@postech.1kgukn8.mongodb.net/postech?retryWrites=true&w=majority&appName=postech`)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})
.catch(() => console.log("Conexão com banco de dados falhou!"))

app.use(json())
app.use(userRouter)