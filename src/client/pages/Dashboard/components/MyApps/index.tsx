// Dependencies
import React, { FC } from 'react'
import ApolloConnector from '~/client/components/ApolloConnector'

// Component
import Component from './MyApps'

// Query
import query from '~/client/graphql/apps/getApps.query'

type PageResponse = {
  getApps: any
}

const Page: FC = () => {
  const onSuccess = ({ getApps }: PageResponse) => <Component data={getApps} />

  return <ApolloConnector onSuccess={onSuccess} query={query} />
}

export default Page
