import { gql } from 'graphql-request'

export const personalities = gql`
  query personalities(
    $distinct: [PersonalityScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: PersonalityWhereUniqueInput
    $orderBy: [PersonalityOrderByWithRelationInput!]
    $where: PersonalityWhereInput
  ) {
    personalities(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
      where: $where
    ) {
      upvotes
      name
      id
      downvotes
      creator
    }
  }
`
