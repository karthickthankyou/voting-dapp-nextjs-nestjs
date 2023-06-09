import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type AggregateCountOutput = {
  __typename?: 'AggregateCountOutput'
  count: Scalars['Int']
}

export type CreateReportInput = {
  personalityId: Scalars['Int']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
}

export type GroupByPersonalities = {
  __typename?: 'GroupByPersonalities'
  _count?: Maybe<Scalars['Int']>
  personality?: Maybe<Personality>
  personalityId?: Maybe<Scalars['Int']>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Scalars['Int']>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Scalars['Int']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createReport: Report
}

export type MutationCreateReportArgs = {
  createReportInput: CreateReportInput
}

export type Personality = {
  __typename?: 'Personality'
  creator: Scalars['String']
  downvotes: Scalars['Int']
  id: Scalars['Int']
  myVote?: Maybe<Vote>
  name: Scalars['String']
  upvotes: Scalars['Int']
}

export type PersonalityOrderByWithRelationInput = {
  Report?: InputMaybe<ReportOrderByRelationAggregateInput>
  creator?: InputMaybe<SortOrder>
  downvotes?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  upvotes?: InputMaybe<SortOrder>
  votes?: InputMaybe<VoteOrderByRelationAggregateInput>
}

export type PersonalityRelationFilter = {
  is?: InputMaybe<PersonalityWhereInput>
  isNot?: InputMaybe<PersonalityWhereInput>
}

export enum PersonalityScalarFieldEnum {
  Creator = 'creator',
  Downvotes = 'downvotes',
  Id = 'id',
  Name = 'name',
  Upvotes = 'upvotes',
}

export type PersonalityWhereInput = {
  AND?: InputMaybe<Array<PersonalityWhereInput>>
  NOT?: InputMaybe<Array<PersonalityWhereInput>>
  OR?: InputMaybe<Array<PersonalityWhereInput>>
  Report?: InputMaybe<ReportListRelationFilter>
  creator?: InputMaybe<StringFilter>
  downvotes?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  upvotes?: InputMaybe<IntFilter>
  votes?: InputMaybe<VoteListRelationFilter>
}

export type PersonalityWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  groupByPersonalities: Array<GroupByPersonalities>
  groupByPersonalitiesCount: AggregateCountOutput
  personalities: Array<Personality>
  personalitiesCount: AggregateCountOutput
  personality: Personality
  report: Report
  reports: Array<Report>
  vote?: Maybe<Vote>
  votes: Array<Vote>
  votesCount: AggregateCountOutput
}

export type QueryGroupByPersonalitiesArgs = {
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryPersonalitiesArgs = {
  cursor?: InputMaybe<PersonalityWhereUniqueInput>
  distinct?: InputMaybe<Array<PersonalityScalarFieldEnum>>
  orderBy?: InputMaybe<Array<PersonalityOrderByWithRelationInput>>
  searchTerm?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PersonalityWhereInput>
}

export type QueryPersonalitiesCountArgs = {
  where?: InputMaybe<PersonalityWhereInput>
}

export type QueryPersonalityArgs = {
  where?: InputMaybe<PersonalityWhereUniqueInput>
}

export type QueryReportArgs = {
  where?: InputMaybe<ReportWhereUniqueInput>
}

export type QueryReportsArgs = {
  cursor?: InputMaybe<ReportWhereUniqueInput>
  distinct?: InputMaybe<Array<ReportScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ReportOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ReportWhereInput>
}

export type QueryVoteArgs = {
  where?: InputMaybe<VoteWhereUniqueInput>
}

export type QueryVotesArgs = {
  cursor?: InputMaybe<VoteWhereUniqueInput>
  distinct?: InputMaybe<Array<VoteScalarFieldEnum>>
  orderBy?: InputMaybe<Array<VoteOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<VoteWhereInput>
}

export type QueryVotesCountArgs = {
  where?: InputMaybe<VoteWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Report = {
  __typename?: 'Report'
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  personalityId: Scalars['Int']
  reporter: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ReportListRelationFilter = {
  every?: InputMaybe<ReportWhereInput>
  none?: InputMaybe<ReportWhereInput>
  some?: InputMaybe<ReportWhereInput>
}

export type ReportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ReportOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  personality?: InputMaybe<PersonalityOrderByWithRelationInput>
  personalityId?: InputMaybe<SortOrder>
  reporter?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ReportReporterPersonalityIdCompoundUniqueInput = {
  personalityId: Scalars['Int']
  reporter: Scalars['String']
}

export enum ReportScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  PersonalityId = 'personalityId',
  Reporter = 'reporter',
  UpdatedAt = 'updatedAt',
}

export type ReportWhereInput = {
  AND?: InputMaybe<Array<ReportWhereInput>>
  NOT?: InputMaybe<Array<ReportWhereInput>>
  OR?: InputMaybe<Array<ReportWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  personality?: InputMaybe<PersonalityRelationFilter>
  personalityId?: InputMaybe<IntFilter>
  reporter?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ReportWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
  reporter_personalityId?: InputMaybe<ReportReporterPersonalityIdCompoundUniqueInput>
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type Subscription = {
  __typename?: 'Subscription'
  onVoted?: Maybe<Vote>
  personalityCreated?: Maybe<Personality>
}

export type SubscriptionOnVotedArgs = {
  address: Scalars['String']
}

export type Vote = {
  __typename?: 'Vote'
  id: Scalars['Int']
  name: Scalars['String']
  personality?: Maybe<Personality>
  personalityId: Scalars['Int']
  vote: Scalars['Int']
  voter: Scalars['String']
}

export type VoteListRelationFilter = {
  every?: InputMaybe<VoteWhereInput>
  none?: InputMaybe<VoteWhereInput>
  some?: InputMaybe<VoteWhereInput>
}

export type VoteNameVoterCompoundUniqueInput = {
  name: Scalars['String']
  voter: Scalars['String']
}

export type VoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type VoteOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  personality?: InputMaybe<PersonalityOrderByWithRelationInput>
  personalityId?: InputMaybe<SortOrder>
  vote?: InputMaybe<SortOrder>
  voter?: InputMaybe<SortOrder>
}

export enum VoteScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  PersonalityId = 'personalityId',
  Vote = 'vote',
  Voter = 'voter',
}

export type VoteWhereInput = {
  AND?: InputMaybe<Array<VoteWhereInput>>
  NOT?: InputMaybe<Array<VoteWhereInput>>
  OR?: InputMaybe<Array<VoteWhereInput>>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  personality?: InputMaybe<PersonalityRelationFilter>
  personalityId?: InputMaybe<IntFilter>
  vote?: InputMaybe<IntFilter>
  voter?: InputMaybe<StringFilter>
}

export type VoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
  name_voter?: InputMaybe<VoteNameVoterCompoundUniqueInput>
}

export type PersonalityFragmentFragment = {
  __typename?: 'Personality'
  creator: string
  downvotes: number
  id: number
  name: string
  upvotes: number
  myVote?: { __typename?: 'Vote'; vote: number } | null
}

export type PersonalitiesQueryVariables = Exact<{
  distinct?: InputMaybe<
    Array<PersonalityScalarFieldEnum> | PersonalityScalarFieldEnum
  >
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<PersonalityWhereUniqueInput>
  orderBy?: InputMaybe<
    | Array<PersonalityOrderByWithRelationInput>
    | PersonalityOrderByWithRelationInput
  >
  where?: InputMaybe<PersonalityWhereInput>
  searchTerm?: InputMaybe<Scalars['String']>
}>

export type PersonalitiesQuery = {
  __typename?: 'Query'
  personalities: Array<{
    __typename?: 'Personality'
    creator: string
    downvotes: number
    id: number
    name: string
    upvotes: number
    myVote?: { __typename?: 'Vote'; vote: number } | null
  }>
  personalitiesCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export type PersonalityQueryVariables = Exact<{
  where?: InputMaybe<PersonalityWhereUniqueInput>
}>

export type PersonalityQuery = {
  __typename?: 'Query'
  personality: {
    __typename?: 'Personality'
    creator: string
    downvotes: number
    id: number
    name: string
    upvotes: number
    myVote?: { __typename?: 'Vote'; vote: number } | null
  }
}

export type PersonalityCreatedSubscriptionVariables = Exact<{
  [key: string]: never
}>

export type PersonalityCreatedSubscription = {
  __typename?: 'Subscription'
  personalityCreated?: {
    __typename?: 'Personality'
    id: number
    name: string
    upvotes: number
    downvotes: number
    creator: string
  } | null
}

export type OnVotedSubscriptionVariables = Exact<{
  address: Scalars['String']
}>

export type OnVotedSubscription = {
  __typename?: 'Subscription'
  onVoted?: {
    __typename?: 'Vote'
    name: string
    id: number
    personalityId: number
    vote: number
    voter: string
  } | null
}

export type VoteQueryVariables = Exact<{
  where?: InputMaybe<VoteWhereUniqueInput>
}>

export type VoteQuery = {
  __typename?: 'Query'
  vote?: {
    __typename?: 'Vote'
    id: number
    name: string
    personalityId: number
    vote: number
    voter: string
  } | null
}

export type VotesQueryVariables = Exact<{
  where?: InputMaybe<VoteWhereInput>
  orderBy?: InputMaybe<
    Array<VoteOrderByWithRelationInput> | VoteOrderByWithRelationInput
  >
  cursor?: InputMaybe<VoteWhereUniqueInput>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<Array<VoteScalarFieldEnum> | VoteScalarFieldEnum>
}>

export type VotesQuery = {
  __typename?: 'Query'
  votes: Array<{
    __typename?: 'Vote'
    id: number
    name: string
    personalityId: number
    vote: number
    voter: string
    personality?: {
      __typename?: 'Personality'
      creator: string
      downvotes: number
      id: number
      name: string
      upvotes: number
      myVote?: { __typename?: 'Vote'; vote: number } | null
    } | null
  }>
  votesCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export type GroupByPersonalitiesQueryVariables = Exact<{
  skip: Scalars['Int']
  take: Scalars['Int']
}>

export type GroupByPersonalitiesQuery = {
  __typename?: 'Query'
  groupByPersonalities: Array<{
    __typename?: 'GroupByPersonalities'
    personalityId?: number | null
    _count?: number | null
    personality?: {
      __typename?: 'Personality'
      creator: string
      downvotes: number
      id: number
      name: string
      upvotes: number
      myVote?: { __typename?: 'Vote'; vote: number } | null
    } | null
  }>
  groupByPersonalitiesCount: {
    __typename?: 'AggregateCountOutput'
    count: number
  }
}

export type CreateReportMutationVariables = Exact<{
  createReportInput: CreateReportInput
}>

export type CreateReportMutation = {
  __typename?: 'Mutation'
  createReport: {
    __typename?: 'Report'
    createdAt: any
    id: number
    personalityId: number
    reporter: string
    updatedAt: any
  }
}

export type ReportQueryVariables = Exact<{
  where?: InputMaybe<ReportWhereUniqueInput>
}>

export type ReportQuery = {
  __typename?: 'Query'
  report: { __typename?: 'Report'; id: number; createdAt: any }
}

export const namedOperations = {
  Query: {
    personalities: 'personalities',
    personality: 'personality',
    vote: 'vote',
    votes: 'votes',
    groupByPersonalities: 'groupByPersonalities',
    report: 'report',
  },
  Mutation: {
    createReport: 'createReport',
  },
  Subscription: {
    personalityCreated: 'personalityCreated',
    onVoted: 'onVoted',
  },
  Fragment: {
    PersonalityFragment: 'PersonalityFragment',
  },
}
export const PersonalityFragmentFragmentDoc = /*#__PURE__*/ gql`
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
export const PersonalitiesDocument = /*#__PURE__*/ gql`
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
  ${PersonalityFragmentFragmentDoc}
`

/**
 * __usePersonalitiesQuery__
 *
 * To run a query within a React component, call `usePersonalitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonalitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonalitiesQuery({
 *   variables: {
 *      distinct: // value for 'distinct'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function usePersonalitiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PersonalitiesQuery,
    PersonalitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PersonalitiesQuery, PersonalitiesQueryVariables>(
    PersonalitiesDocument,
    options,
  )
}
export function usePersonalitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PersonalitiesQuery,
    PersonalitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PersonalitiesQuery, PersonalitiesQueryVariables>(
    PersonalitiesDocument,
    options,
  )
}
export type PersonalitiesQueryHookResult = ReturnType<
  typeof usePersonalitiesQuery
>
export type PersonalitiesLazyQueryHookResult = ReturnType<
  typeof usePersonalitiesLazyQuery
>
export type PersonalitiesQueryResult = Apollo.QueryResult<
  PersonalitiesQuery,
  PersonalitiesQueryVariables
>
export const PersonalityDocument = /*#__PURE__*/ gql`
  query personality($where: PersonalityWhereUniqueInput) {
    personality(where: $where) {
      ...PersonalityFragment
    }
  }
  ${PersonalityFragmentFragmentDoc}
`

/**
 * __usePersonalityQuery__
 *
 * To run a query within a React component, call `usePersonalityQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonalityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonalityQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePersonalityQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PersonalityQuery,
    PersonalityQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PersonalityQuery, PersonalityQueryVariables>(
    PersonalityDocument,
    options,
  )
}
export function usePersonalityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PersonalityQuery,
    PersonalityQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PersonalityQuery, PersonalityQueryVariables>(
    PersonalityDocument,
    options,
  )
}
export type PersonalityQueryHookResult = ReturnType<typeof usePersonalityQuery>
export type PersonalityLazyQueryHookResult = ReturnType<
  typeof usePersonalityLazyQuery
>
export type PersonalityQueryResult = Apollo.QueryResult<
  PersonalityQuery,
  PersonalityQueryVariables
>
export const PersonalityCreatedDocument = /*#__PURE__*/ gql`
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

/**
 * __usePersonalityCreatedSubscription__
 *
 * To run a query within a React component, call `usePersonalityCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePersonalityCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonalityCreatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function usePersonalityCreatedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    PersonalityCreatedSubscription,
    PersonalityCreatedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<
    PersonalityCreatedSubscription,
    PersonalityCreatedSubscriptionVariables
  >(PersonalityCreatedDocument, options)
}
export type PersonalityCreatedSubscriptionHookResult = ReturnType<
  typeof usePersonalityCreatedSubscription
>
export type PersonalityCreatedSubscriptionResult =
  Apollo.SubscriptionResult<PersonalityCreatedSubscription>
export const OnVotedDocument = /*#__PURE__*/ gql`
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

/**
 * __useOnVotedSubscription__
 *
 * To run a query within a React component, call `useOnVotedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnVotedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnVotedSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useOnVotedSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    OnVotedSubscription,
    OnVotedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<
    OnVotedSubscription,
    OnVotedSubscriptionVariables
  >(OnVotedDocument, options)
}
export type OnVotedSubscriptionHookResult = ReturnType<
  typeof useOnVotedSubscription
>
export type OnVotedSubscriptionResult =
  Apollo.SubscriptionResult<OnVotedSubscription>
export const VoteDocument = /*#__PURE__*/ gql`
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

/**
 * __useVoteQuery__
 *
 * To run a query within a React component, call `useVoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useVoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVoteQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useVoteQuery(
  baseOptions?: Apollo.QueryHookOptions<VoteQuery, VoteQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<VoteQuery, VoteQueryVariables>(VoteDocument, options)
}
export function useVoteLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<VoteQuery, VoteQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<VoteQuery, VoteQueryVariables>(
    VoteDocument,
    options,
  )
}
export type VoteQueryHookResult = ReturnType<typeof useVoteQuery>
export type VoteLazyQueryHookResult = ReturnType<typeof useVoteLazyQuery>
export type VoteQueryResult = Apollo.QueryResult<VoteQuery, VoteQueryVariables>
export const VotesDocument = /*#__PURE__*/ gql`
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
  ${PersonalityFragmentFragmentDoc}
`

/**
 * __useVotesQuery__
 *
 * To run a query within a React component, call `useVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useVotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVotesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useVotesQuery(
  baseOptions?: Apollo.QueryHookOptions<VotesQuery, VotesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<VotesQuery, VotesQueryVariables>(
    VotesDocument,
    options,
  )
}
export function useVotesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<VotesQuery, VotesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<VotesQuery, VotesQueryVariables>(
    VotesDocument,
    options,
  )
}
export type VotesQueryHookResult = ReturnType<typeof useVotesQuery>
export type VotesLazyQueryHookResult = ReturnType<typeof useVotesLazyQuery>
export type VotesQueryResult = Apollo.QueryResult<
  VotesQuery,
  VotesQueryVariables
>
export const GroupByPersonalitiesDocument = /*#__PURE__*/ gql`
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
  ${PersonalityFragmentFragmentDoc}
`

/**
 * __useGroupByPersonalitiesQuery__
 *
 * To run a query within a React component, call `useGroupByPersonalitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupByPersonalitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupByPersonalitiesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGroupByPersonalitiesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GroupByPersonalitiesQuery,
    GroupByPersonalitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GroupByPersonalitiesQuery,
    GroupByPersonalitiesQueryVariables
  >(GroupByPersonalitiesDocument, options)
}
export function useGroupByPersonalitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GroupByPersonalitiesQuery,
    GroupByPersonalitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GroupByPersonalitiesQuery,
    GroupByPersonalitiesQueryVariables
  >(GroupByPersonalitiesDocument, options)
}
export type GroupByPersonalitiesQueryHookResult = ReturnType<
  typeof useGroupByPersonalitiesQuery
>
export type GroupByPersonalitiesLazyQueryHookResult = ReturnType<
  typeof useGroupByPersonalitiesLazyQuery
>
export type GroupByPersonalitiesQueryResult = Apollo.QueryResult<
  GroupByPersonalitiesQuery,
  GroupByPersonalitiesQueryVariables
>
export const CreateReportDocument = /*#__PURE__*/ gql`
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
export type CreateReportMutationFn = Apollo.MutationFunction<
  CreateReportMutation,
  CreateReportMutationVariables
>

/**
 * __useCreateReportMutation__
 *
 * To run a mutation, you first call `useCreateReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReportMutation, { data, loading, error }] = useCreateReportMutation({
 *   variables: {
 *      createReportInput: // value for 'createReportInput'
 *   },
 * });
 */
export function useCreateReportMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateReportMutation,
    CreateReportMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateReportMutation,
    CreateReportMutationVariables
  >(CreateReportDocument, options)
}
export type CreateReportMutationHookResult = ReturnType<
  typeof useCreateReportMutation
>
export type CreateReportMutationResult =
  Apollo.MutationResult<CreateReportMutation>
export type CreateReportMutationOptions = Apollo.BaseMutationOptions<
  CreateReportMutation,
  CreateReportMutationVariables
>
export const ReportDocument = /*#__PURE__*/ gql`
  query report($where: ReportWhereUniqueInput) {
    report(where: $where) {
      id
      createdAt
    }
  }
`

/**
 * __useReportQuery__
 *
 * To run a query within a React component, call `useReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReportQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useReportQuery(
  baseOptions?: Apollo.QueryHookOptions<ReportQuery, ReportQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ReportQuery, ReportQueryVariables>(
    ReportDocument,
    options,
  )
}
export function useReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ReportQuery, ReportQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ReportQuery, ReportQueryVariables>(
    ReportDocument,
    options,
  )
}
export type ReportQueryHookResult = ReturnType<typeof useReportQuery>
export type ReportLazyQueryHookResult = ReturnType<typeof useReportLazyQuery>
export type ReportQueryResult = Apollo.QueryResult<
  ReportQuery,
  ReportQueryVariables
>
