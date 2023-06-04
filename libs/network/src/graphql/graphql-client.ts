import { GraphQLClient } from 'graphql-request'

export const getGraphqlClient = async () => {
  return new GraphQLClient('http://localhost:3000/graphql', {})
}
