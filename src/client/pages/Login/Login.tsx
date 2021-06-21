// Dependencies
import React, { FC, useState, useContext } from 'react'
import { Text, Input, Button, RenderIf, Notification } from '@contentpi/ui-kit'
import { redirectTo } from '@contentpi/lib'

// Contexts
import { FormContext } from '~/client/contexts/form'
import { I18nContext } from '~/client/contexts/i18n'
import { UserContext } from '~/client/contexts/user'

// Types
import { IUser } from '~/client/types'

// Styles
import {
  StyledLoginCard,
  StyledLoginContainer,
  StyledLoginForm,
  StyledInputControl,
  StyledButtons
} from './Login.styled'

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
  const [notification, setNotification] = useState({
    id: Math.random(),
    message: ''
  })
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
      setNotification({
        id: Math.random(),
        message: response.message
      })
    } else {
      redirectTo(currentUrl || '/', true)
    }
  }

  return (
    <>
      <RenderIf isTrue={invalidLogin && notification.message !== ''}>
        <Notification
          notification={notification}
          type="info"
          position="top-right"
          maxNotifications={3}
          duration={5000}
        />
      </RenderIf>
      <StyledLoginContainer>
        <StyledLoginCard>
          <Text color="textSecondary" align="center" variant="h1">
            {t('Welcome Back')}
          </Text>
          <Text color="textHint" align="center" variant="caption1">
            {t('Sign in to your account')}
          </Text>
          <StyledLoginForm>
            <StyledInputControl>
              <Text color="textSecondary">{t('Email')}</Text>
              <Input
                placeholder={t('Email')}
                autoComplete="off"
                type="email"
                name="email"
                onChange={_onChange}
                value={values.email}
              />
            </StyledInputControl>
            <StyledInputControl>
              <Text color="textSecondary">{t('Password')}</Text>
              <Input
                placeholder={t('Password')}
                type="password"
                autoComplete="off"
                name="password"
                onChange={_onChange}
                value={values.password}
              />
            </StyledInputControl>
          </StyledLoginForm>

          <StyledButtons>
            <Button fullWidth onClick={(): Promise<void> => handleSubmit(values)}>
              {t('Login')}
            </Button>
          </StyledButtons>
        </StyledLoginCard>
      </StyledLoginContainer>
    </>
  )
}

export default Login
