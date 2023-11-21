import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,      // To get request from this frontend_url
    credentials: true,
}))

app.use(express.json({ limit: '16kb' }))    // It means json data will be accepted, with limit of '16kb'
app.use(express.urlencoded({ extended: true, limit: '16kb' }))      // It means data from the url will be accepted, extended means objects inside objects can also be accepted
app.use(express.static('public'))     // To store public files, folders or assets
app.use(cookieParser())

import userRouter from "./routes/user.routes.js"

// Routes declaration
app.use("/api/v1/users", userRouter)


export { app }