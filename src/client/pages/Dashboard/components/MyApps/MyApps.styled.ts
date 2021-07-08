// Dependencies
import styled from 'styled-components'
import { themeCssVars } from '@contentpi/ui-kit/dist/src/theme'

const appsContainerStyles = `
  background: ${themeCssVars.global?.background.main};
`

const appsCardStyles = `
  background: ${themeCssVars.global?.background.paper};
`

const appsCardLogoStyles = `
  background: ${themeCssVars.palette.primary.main};
  color: ${themeCssVars.global?.background.paper};
`

export const StyledAppsContainer = styled.div`
  ${appsContainerStyles}
`

export const StyledAppsContent = styled.div`
  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
`
export const StyledAppsHead = styled.div`
  max-width: 400px;
  margin: 0 auto 32px;
  padding-top: 32px;
`
export const StyledAppsMain = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`
export const StyledAppsCard = styled.div`
  width: 228px;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 16px;
  ${appsCardStyles}

  &.new {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px dashed #222;
  }
`
export const StyledAppsCardLogo = styled.div`
  width: 44px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  border-radius: 8px;
  margin-bottom: 16px;
  ${appsCardLogoStyles}
`
