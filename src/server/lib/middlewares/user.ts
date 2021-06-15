// Dependencies
import { Request, Response, NextFunction } from 'express'

// Lib
import { getUserData } from '../jwt'

export const isConnected =
  (isLogged = true, privileges = ['user'], redirectTo = '/') =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = await getUserData(req.cookies.at)

    if (!user && !isLogged) {
      return next()
    }

    if (user && isLogged) {
      if (privileges.includes('owner') && user.privilege === 'owner') {
        return next()
      }

      if (privileges.includes('admin') && user.privilege === 'admin') {
        return next()
      }

      if (privileges.includes('user') && user.privilege === 'user') {
        return next()
      }

      res.redirect(redirectTo)
    } else {
      res.redirect(redirectTo)
    }
  }
