import fs from 'fs'

export const fileExists = async (file: string) => {
  try {
    await fs.promises.access(file)
    return true
  } catch {
    return false
  }
}

export const isProduction = process.env.NODE_ENV === 'production'
