// Dependencies
import React, { FC, ReactElement, useContext, useCallback } from 'react'
import { useQuery, DocumentNode, QueryResult, OperationVariables } from '@apollo/client'

type ApolloConnectorProps = {
  query: DocumentNode
  variables?: Record<string, any>
  onSuccess: (data: any) => ReactElement
}

const ApolloConnector: FC<ApolloConnectorProps> = ({ onSuccess, query, variables = {} }) => {
  const queryOptions: OperationVariables = {
    variables: {
      ...variables
    },
    errorPolicy: 'all'
  }

  const { data, error }: QueryResult = useQuery(query, queryOptions)

  if (error) {
    console.log({ error })
  }

  if (data) {
    return onSuccess(data)
  }

  return <div />
}

export default ApolloConnector
