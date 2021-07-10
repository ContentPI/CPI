// Dependencies
import React, { FC } from 'react'
import { Text, Link } from '@contentpi/ui-kit'

import {
  StyledAppsContainer,
  StyledAppsContent,
  StyledAppsHead,
  StyledAppsMain,
  StyledAppsCard,
  StyledAppsCardLogo
} from './MyApps.styled'

type App = {
  id: string
  appName: string
  identifier: string
  icon: string
  description: string
}

const Item: FC<App> = ({ id, appName, identifier, icon, description }) => {
  return (
    <Link to={`dashboard/${id}/master`}>
      <StyledAppsCard>
        <StyledAppsCardLogo style={{ backgroundColor: icon }}>
          {appName.charAt(0)}
        </StyledAppsCardLogo>
        <Text color="textPrimary" variant="h6">
          {appName}
        </Text>
        <Text color="textSecondary" variant="caption1">
          #{identifier}
        </Text>
        <br />
        <Text color="textSecondary" variant="caption1">
          {description}
        </Text>
        <br />
        <Text color="textPrimary" variant="caption1">
          2 days left
        </Text>
      </StyledAppsCard>
    </Link>
  )
}

const NewItem = () => {
  return (
    <StyledAppsCard className="new">
      <StyledAppsCardLogo>+</StyledAppsCardLogo>
      <Text color="textPrimary" align="center" variant="h6">
        New app
      </Text>
      <Text color="textSecondary" align="center" variant="caption1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </StyledAppsCard>
  )
}

type Props = {
  data: any
}

const MyApps: FC<Props> = ({ data }) => {
  return (
    <StyledAppsContainer>
      <StyledAppsContent>
        <StyledAppsHead>
          <Text color="textPrimary" align="center" variant="h1">
            Select your app
          </Text>
          <Text color="textSecondary" align="center" variant="caption1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit a assumenda perferendis
            eos suscipit possimus.
          </Text>
        </StyledAppsHead>
        <StyledAppsMain>
          {data && data.map((app: any) => <Item key={app.id} {...app} />)}
          <NewItem />
        </StyledAppsMain>
      </StyledAppsContent>
    </StyledAppsContainer>
  )
}

export default MyApps
