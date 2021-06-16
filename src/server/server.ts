// Dependencies
import express, { Application, Request, Response } from 'express'
import { resolve } from 'path'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import cors from 'cors'
import { availableLanguages } from '@contentpi/lib'

// Middlewares
import { isConnected } from './lib/middlewares/user'

// Config
import * as config from '~/config'

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
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: config.security.secretKey
  })
)
app.use(cookieParser(config.security.secretKey))
app.use(cors({ credentials: true, origin: true }))

// Static directories
app.use(express.static(distDir))
app.use(express.static(staticDir))

// Routes
app.get(
  `/:language(${availableLanguages()})/login`,
  isConnected(false),
  (req: Request, res: Response) => {
    const { language = config.languages.default } = req.params

    res.send(html({ title: 'ContentPI', initialState: { language } }))
  }
)

app.get('/login', isConnected(false), (req: Request, res: Response) => {
  res.redirect(`${config.languages.default}/login`)
})

app.get(`/:language(${availableLanguages()})/logout`, (req: Request, res: Response) => {
  res.redirect('/logout')
})

app.get(`/logout`, (req: Request, res: Response) => {
  const redirect: any = req.query.redirectTo || '/'
  res.clearCookie('at')
  res.redirect(redirect)
})

app.use(
  `/:language(${availableLanguages()})/dashboard/:appId?/:stage?/:moduleName?/:section?/:model?`,
  isConnected(
    true,
    ['owner', 'admin', 'editor'],
    `/${config.languages.default}/login?redirectTo=/dashboard`
  ),
  (req: Request, res: Response) => {
    const { appId, stage, language = config.languages.default } = req.params
    const entryId = req.query.entryId ? String(req.query.entryId) : ''

    res.send(html({ initialState: { language, stage, appId, entryId } }))
  }
)

app.get(
  '/dashboard',
  isConnected(
    true,
    ['owner', 'admin', 'editor'],
    `/${config.languages.default}/login?redirectTo=/dashboard`
  ),
  (req: Request, res: Response) => {
    res.redirect(`${config.languages.default}/dashboard`)
  }
)

app.get('*', (req: Request, res: Response) => {
  res.send(html({ title: 'ContentPI' }))
})

export default app
