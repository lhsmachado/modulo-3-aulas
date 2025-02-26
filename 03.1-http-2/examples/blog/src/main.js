import express from "express"
import dotenv from "dotenv"
dotenv.config()

import { DatabaseConfig } from "./database/DatabaseConfig.js"
import { router as userRoutes } from "./routes/userRoutes.js"
import { router as postRoutes } from "./routes/postRoutes.js"
import { router as authRoutes } from "./routes/authRoutes.js"

DatabaseConfig.initialize()

const app = express()

app.use(express.json())

app.use(authRoutes)
app.use(userRoutes)
app.use(postRoutes)

app.listen(3333, () => console.log("Server is running"))
