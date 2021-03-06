// Types
export type App = {
  appName: string
  identifier: string
  icon: string
  description: string
}

export type User = {
  username?: string
  password: string
  email: string
  privilege?: string
  active?: boolean
}

// Interfaces
export interface IApp extends App {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface IUser extends User {
  id?: string
  token?: string
  createdAt?: Date
  updatedAt?: Date
}
