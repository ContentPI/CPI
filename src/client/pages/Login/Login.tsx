// Dependencies
import React, { FC, useState, useContext } from 'react'
import { Text, Input, Button, RenderIf } from '@contentpi/ui-kit'
import { redirectTo } from '@contentpi/lib'

// Contexts
import { FormContext } from '~/client/contexts/form'
import { I18nContext } from '~/client/contexts/i18n'
import { UserContext } from '~/client/contexts/user'

// Types
import { IUser } from '~/client/types'

// Styles
import { LoginCard, LoginContainer, LoginForm, InputControl } from './Login.styled'

type Props = {
  login(input: any): any
  currentUrl: string
}

const Login: FC<Props> = ({ currentUrl }) => {
  // States
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [invalidLogin, setInvalidLogin] = useState(false)

  // Contexts
  const { onChange } = useContext(FormContext)
  const { t } = useContext(I18nContext)
  const { login } = useContext(UserContext)

  // Methods
  const _onChange = (e: any): any => {
    onChange(e, setValues)
  }

  const handleSubmit = async (user: IUser): Promise<void> => {
    const response = await login(user)

    if (response.error) {
      setInvalidLogin(true)
      setErrorMessage(response.message)
    } else {
      redirectTo(currentUrl || '/', true)
    }
  }

  return (
    <>
      <RenderIf isTrue={invalidLogin}>
        <p>{errorMessage}</p>
      </RenderIf>
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
              <Input
                placeholder={t('Email')}
                autoComplete="off"
                type="email"
                name="email"
                onChange={_onChange}
                value={values.email}
              />
            </InputControl>
            <InputControl>
              <Text color="secondary">Password</Text>
              <Input
                placeholder={t('Password')}
                type="password"
                autoComplete="off"
                name="password"
                onChange={_onChange}
                value={values.password}
              />
            </InputControl>
          </LoginForm>
          <Button fullWidth onClick={(): Promise<void> => handleSubmit(values)}>
            {t('Login')}
          </Button>
        </LoginCard>
      </LoginContainer>
    </>
  )
}

export default Login
