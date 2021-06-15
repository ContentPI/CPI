// Dependencies
import express, { Application, Request, Response } from 'express'
import { resolve } from 'path'
import cookieParser from 'cookie-parser'

// HTML
import html from './html'

const app: Application = express()
const distDir = resolve('dist')
const staticDir = resolve('src', 'static')

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(cookieParser())
app.use(express.static(distDir))
app.use(express.static(staticDir))

app.get('/login', (req: Request, res: Response) => {
  res.send('LOGIN PAGE')
})

app.get('/', (req: Request, res: Response) => {
  return res.send(html({ title: 'ContentPI' }))
})

export default app
