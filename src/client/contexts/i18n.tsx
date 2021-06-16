// Dependencies
import React, { FC, createContext, ReactElement } from 'react'

// Configuration
import { isProduction } from '~/config'

interface II18nContext {
  __: any
  t: (key1: string, key2?: string, key3?: string) => string
  language: string
}

type Props = {
  __: any
  language: string
  children: ReactElement
}

export const I18nContext = createContext<II18nContext>({
  __: {},
  t: () => '',
  language: 'en-US'
})

const I18nProvider: FC<Props> = ({ __, language = 'en-US', children }) => {
  const t = (key1: string, key2 = '', key3 = '') => {
    if (key2) {
      key1 += ` ${key2}`
    }

    if (key3) {
      key1 += key3 === '?' || key3 === '!' ? key3 : ` ${key3}`
    }

    if (!isProduction && !__[key1] && language !== 'en-US') {
      console.log(`"${key1}": "",`) // eslint-disable-line no-console
    }
    console.log('key1', key1)
    return __[key1] || key1
  }

  const context = {
    __,
    language,
    t
  }

  return <I18nContext.Provider value={context}>{children}</I18nContext.Provider>
}

export default I18nProvider
