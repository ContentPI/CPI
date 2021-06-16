// Dependencies
import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'

// Lib
import { useApollo } from './lib/apolloClient'

// Contexts
import UserProvider from './contexts/user'
import FormProvider from './contexts/form'
import I18nProvider from './contexts/i18n'

// Components
import App from './pages/App'

const Root = () => {
  const apolloClient = useApollo({})

  return (
    <ApolloProvider client={apolloClient}>
      <I18nProvider __={{}} language="en-US">
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
