// Dependencies
import React, { FC } from 'react'
import { Text, Input, Button } from '@contentpi/ui-kit'

// Config
import * as config from '~/config'

// Styles
import { LoginCard, LoginContainer, LoginForm, InputControl } from './Login.styled'

type Props = {
  match: {
    params: {
      language: config.Languages
    }
  }
}

const Login: FC<Props> = ({
  match: {
    params: { language = config.languages.default }
  }
}) => {
  console.log({ language })
  return (
    <LoginContainer>
      <LoginCard>
        <Text color="secondary" align="center" variant="h1">
          Welcome Back
        </Text>
        <Text color="hint" align="center" variant="caption1">
          Sign in to your account
        </Text>
        <LoginForm>
          <InputControl>
            <Text color="secondary">Email</Text>
            <Input placeholder="Email" />
          </InputControl>
          <InputControl>
            <Text color="secondary">Password</Text>
            <Input placeholder="Password" type="password" />
          </InputControl>
        </LoginForm>
        <Button fullWidth>Login</Button>
      </LoginCard>
    </LoginContainer>
  )
}

export default Login
