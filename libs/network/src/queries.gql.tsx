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
    $searchTerm: String
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

export const votes = gql`
  query votes(
    $where: VoteWhereInput
    $orderBy: [VoteOrderByWithRelationInput!]
    $cursor: VoteWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [VoteScalarFieldEnum!]
  ) {
    votes(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      name
      personalityId
      vote
      voter
      personality {
        ...PersonalityFragment
      }
    }
    votesCount(where: $where) {
      count
    }
  }
  ${PersonalityFragment}
`

export const groupByPersonalities = gql`
  query groupByPersonalities($skip: Int!, $take: Int!) {
    groupByPersonalities(skip: $skip, take: $take) {
      personalityId
      _count
      personality {
        ...PersonalityFragment
      }
    }

    groupByPersonalitiesCount {
      count
    }
  }

  ${PersonalityFragment}
`

export const createReport = gql`
  mutation createReport($createReportInput: CreateReportInput!) {
    createReport(createReportInput: $createReportInput) {
      createdAt
      id
      personalityId
      reporter
      updatedAt
    }
  }
`

export const report = gql`
  query report($where: ReportWhereUniqueInput) {
    report(where: $where) {
      id
      createdAt
    }
  }
`
