import { gql } from 'graphql-request'

export const PersonalityFragment = gql`
  fragment PersonalityFragment on Personality {
    creator
    downvotes
    id
    name
    upvotes
    myVote {
      vote
    }
  }
`

export const personalities = gql`
  query personalities(
    $distinct: [PersonalityScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: PersonalityWhereUniqueInput
    $orderBy: [PersonalityOrderByWithRelationInput!]
    $where: PersonalityWhereInput
    $searchTerm: String!
  ) {
    personalities(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
      where: $where
      searchTerm: $searchTerm
    ) {
      ...PersonalityFragment
    }
    personalitiesCount(where: $where) {
      count
    }
  }
  ${PersonalityFragment}
`

export const personality = gql`
  query personality($where: PersonalityWhereUniqueInput) {
    personality(where: $where) {
      ...PersonalityFragment
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
