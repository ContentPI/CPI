// Dependencies
import React, { FC } from 'react'
import ApolloConnector from '~/client/components/ApolloConnector'
import MyApps from './MyApps'

// Query
import query from '~/client/graphql/apps/getApps.query'

type MyAppsPageResponse = {
  getApps: any
}

const MyAppsPage: FC = () => {
  const onSuccess = ({ getApps }: MyAppsPageResponse) => <MyApps data={getApps} />

  return <ApolloConnector onSuccess={onSuccess} query={query} />
}

export default MyAppsPage
