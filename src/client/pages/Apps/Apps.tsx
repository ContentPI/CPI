import React from 'react'

import { Text } from '@contentpi/ui-kit'

import {
  StyledAppsContainer,
  StyledAppsContent,
  StyledAppsHead,
  StyledAppsMain,
  StyledAppsCard,
  StyledAppsCardLogo
} from './Apps.styled'

const Item = () => {
  return (
    <StyledAppsCard>
      <StyledAppsCardLogo>B</StyledAppsCardLogo>
      <Text color="textPrimary" variant="h6">
        Sports interactive
      </Text>
      <Text color="textSecondary" variant="caption1">
        Standar plan
      </Text>
      <br />
      <Text color="textSecondary" variant="caption1">
        Web resource which contains all about transfers in the world of sports
      </Text>
      <br />
      <Text color="textPrimary" variant="caption1">
        2 days left
      </Text>
    </StyledAppsCard>
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

const Apps = () => {
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
          <NewItem />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </StyledAppsMain>
      </StyledAppsContent>
    </StyledAppsContainer>
  )
}

export default Apps
