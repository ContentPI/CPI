// Dependencies
import styled from 'styled-components'
import { themeCssVars } from '@contentpi/ui-kit/dist/src/theme'

const loginContainerStyles = `
  background: ${themeCssVars.global?.background.main}
`

const loginCardStyles = `
  background: ${themeCssVars.global?.background.paper}
`

export const LoginContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${loginContainerStyles}
`

export const LoginCard = styled.div`
  max-width: 404px;
  height: 320px;
  margin: auto;
  border-radius: 5px;
  padding: 4rem;
  ${loginCardStyles}
`

export const LoginForm = styled.div`
  margin-bottom: 1.5rem;
`

export const InputControl = styled.div`
  margin-top: 1.5rem;
  & > p {
    padding-bottom: 0.5rem;
  }
`
