// Dependencies
import styled from 'styled-components'
import { themeCssVars } from '@contentpi/ui-kit/dist/src/theme'

const loginContainerStyles = `
  background: ${themeCssVars.global?.background.main}
`

const loginCardStyles = `
  background: ${themeCssVars.global?.background.paper}
`

export const StyledLoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${loginContainerStyles}
`

export const StyledLoginCard = styled.div`
  margin: auto;
  border-radius: 5px;
  padding: 3rem;
  ${loginCardStyles}
`

export const StyledLoginForm = styled.div`
  margin-bottom: 1.5rem;
`

export const StyledInputControl = styled.div`
  margin-top: 1.5rem;
  & > p {
    padding-bottom: 0.5rem;
  }
`

export const StyledButtons = styled.div`
  margin: 0 auto;
  text-align: center;
`
