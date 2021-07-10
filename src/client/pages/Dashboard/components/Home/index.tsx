// Dependencies
import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

// Apollo
import ApolloConnector from '~/client/components/ApolloConnector'

// Component
import Component from './Home'

// Query
import query from '~/client/graphql/apps/getAppById.query'

type PageResponse = {
  getAppById: any
}

interface MatchParams {
  appId: string
}

const Page: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const onSuccess = ({ getAppById }: PageResponse) => <Component data={getAppById} />

  return (
    <ApolloConnector onSuccess={onSuccess} query={query} variables={{ id: match.params.appId }} />
  )
}

export default Page
