// Types
type API = {
  uri: string
  credentials: string
}

type Security = {
  secretKey: string
  expiresIn: string
}

type Session = {
  cookieDomain: string
  maxAge: number
  cookiePrefix: string
  path: string
  httpOnly: boolean
}

type Languages = {
  default: 'ar' | 'es-MX' | 'en-US' | 'ja-JP' | 'pt-BR' | 'fr-FR' | 'ru-RU' | 'it-IT' | 'de-DE'
  list: ['ar', 'es-MX', 'en-US', 'ja-JP', 'pt-BR', 'fr-FR', 'ru-RU', 'it-IT', 'de-DE']
}

// Environment Configuration
export const isProduction: boolean = process.env.NODE_ENV === 'production'
export const isDevelopment: boolean = process.env.NODE_ENV === 'development'

// Server Configuration
export const PORT: number = Number(process.env.PORT) || 3000
export const DEV_SERVER_PORT = 3001
export const GRAPHQL_PORT = 5000
export const debug: boolean = isProduction
export const cache: boolean = isProduction

// Paths Configuration
export const domain: string = isProduction ? 'contentpi.com' : 'localhost'
export const baseUrl: string = isProduction ? `https://${domain}` : `http://${domain}:${PORT}`
export const publicPath: string = isProduction ? '' : `http://${domain}:${DEV_SERVER_PORT}/`

// API Configuration
export const api: API = {
  uri: isProduction ? `https://${domain}/graphql` : `http://${domain}:${GRAPHQL_PORT}/graphql`,
  credentials: 'same-origin'
}

// Security Configuration
export const security: Security = {
  secretKey: process.env.SECURITY_SECRET_KEY || '',
  expiresIn: '7d'
}

// Session Configuration
export const session: Session = {
  cookieDomain: domain,
  maxAge: 604800,
  cookiePrefix: '',
  path: '/',
  httpOnly: true
}

// Languages Configuration
export const languages: Languages = {
  default: 'en-US',
  list: ['ar', 'es-MX', 'en-US', 'ja-JP', 'pt-BR', 'fr-FR', 'ru-RU', 'it-IT', 'de-DE']
}
