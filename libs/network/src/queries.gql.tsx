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
    personalitiesCount(where: $where) {
      count
    }
  }
`

export const personalityCreated = gql`
  subscription personalityCreated {
    personalityCreated {
      id
      name
      upvotes
      downvotes
      creator
    }
  }
`

export const onVoted = gql`
  subscription onVoted($address: String!) {
    onVoted(address: $address) {
      name
      id
      personalityId
      vote
      voter
    }
  }
`

export const personality = gql`
  query personality($where: PersonalityWhereUniqueInput) {
    personality(where: $where) {
      creator
      downvotes
      id
      name
      upvotes
    }
  }
`

export const vote = gql`
  query vote($where: VoteWhereUniqueInput) {
    vote(where: $where) {
      id
      name
      personalityId
      vote
      voter
    }
  }
`
