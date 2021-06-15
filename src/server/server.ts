// Dependencies
import express, { Application, Request, Response } from 'express'
import { resolve } from 'path'
import cookieParser from 'cookie-parser'

// HTML
import html from './html'

// Express application
const app: Application = express()
const distDir = resolve('dist')
const staticDir = resolve('src', 'static')

// Middlewares
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(cookieParser())

// Static directories
app.use(express.static(distDir))
app.use(express.static(staticDir))

// Routes
app.get('*', (req: Request, res: Response) => {
  res.send(html({ title: 'ContentPI' }))
})

export default app
