// Dependencies
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { getCurrentLanguage } from '@contentpi/lib'
import fetch from 'isomorphic-fetch'

// Configuration
import * as config from '~/config'

// Lib
import { useApollo } from './lib/apolloClient'

// Contexts
import UserProvider from './contexts/user'
import FormProvider from './contexts/form'
import I18nProvider from './contexts/i18n'

// Components
import App from './pages/App'

const getI18n = async (language: string) => {
  const { localStorage } = window
  let error = false
  let i18n = {}

  if (language && language !== 'en-US' && config.languages.list.includes(language)) {
    if (!localStorage.getItem(language)) {
      // Fetching language content
      try {
        const response = await fetch(`${config.baseUrl}/i18n/${language}.json`)
        i18n = await response.json()

        localStorage.setItem(language, JSON.stringify(i18n))
      } catch {
        error = true
      }
    } else {
      // Retrieving content from cache
      i18n = JSON.parse(localStorage.getItem(language) || '')
    }
  }

  return i18n
}

const Root = () => {
  const [i18n, setI18n] = useState({})
  const apolloClient = useApollo({})
  const language: config.LanguageList = getCurrentLanguage()

  useEffect(() => {
    const response = getI18n(language)
    response.then(data => setI18n(data))
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <I18nProvider __={i18n} language={language}>
        <UserProvider>
          <FormProvider>
            <App />
          </FormProvider>
        </UserProvider>
      </I18nProvider>
    </ApolloProvider>
  )
}

render(<Root />, document.querySelector('#root'))
