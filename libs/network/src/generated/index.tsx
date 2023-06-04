import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AggregateCountOutput = {
  __typename?: 'AggregateCountOutput';
  count: Scalars['Int'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Scalars['Int']>;
};

export type Personality = {
  __typename?: 'Personality';
  creator: Scalars['String'];
  downvotes: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  upvotes: Scalars['Int'];
};

export type PersonalityOrderByWithRelationInput = {
  creator?: InputMaybe<SortOrder>;
  downvotes?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  upvotes?: InputMaybe<SortOrder>;
  votes?: InputMaybe<VoteOrderByRelationAggregateInput>;
};

export type PersonalityRelationFilter = {
  is?: InputMaybe<PersonalityWhereInput>;
  isNot?: InputMaybe<PersonalityWhereInput>;
};

export enum PersonalityScalarFieldEnum {
  Creator = 'creator',
  Downvotes = 'downvotes',
  Id = 'id',
  Name = 'name',
  Upvotes = 'upvotes'
}

export type PersonalityWhereInput = {
  AND?: InputMaybe<Array<PersonalityWhereInput>>;
  NOT?: InputMaybe<Array<PersonalityWhereInput>>;
  OR?: InputMaybe<Array<PersonalityWhereInput>>;
  creator?: InputMaybe<StringFilter>;
  downvotes?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  upvotes?: InputMaybe<IntFilter>;
  votes?: InputMaybe<VoteListRelationFilter>;
};

export type PersonalityWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  personalities: Array<Personality>;
  personalitiesCount: AggregateCountOutput;
  personality: Personality;
  vote: Vote;
  votes: Array<Vote>;
};


export type QueryPersonalitiesArgs = {
  cursor?: InputMaybe<PersonalityWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonalityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonalityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonalityWhereInput>;
};


export type QueryPersonalitiesCountArgs = {
  where?: InputMaybe<PersonalityWhereInput>;
};


export type QueryPersonalityArgs = {
  where?: InputMaybe<PersonalityWhereUniqueInput>;
};


export type QueryVoteArgs = {
  where?: InputMaybe<VoteWhereUniqueInput>;
};


export type QueryVotesArgs = {
  cursor?: InputMaybe<VoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<VoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onVoted?: Maybe<Vote>;
  personalityCreated?: Maybe<Personality>;
};


export type SubscriptionOnVotedArgs = {
  address: Scalars['String'];
};

export type Vote = {
  __typename?: 'Vote';
  id: Scalars['Int'];
  name: Scalars['String'];
  personalityId: Scalars['Int'];
  vote: Scalars['Int'];
  voter: Scalars['String'];
};

export type VoteListRelationFilter = {
  every?: InputMaybe<VoteWhereInput>;
  none?: InputMaybe<VoteWhereInput>;
  some?: InputMaybe<VoteWhereInput>;
};

export type VoteNameVoterCompoundUniqueInput = {
  name: Scalars['String'];
  voter: Scalars['String'];
};

export type VoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VoteOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  personality?: InputMaybe<PersonalityOrderByWithRelationInput>;
  personalityId?: InputMaybe<SortOrder>;
  vote?: InputMaybe<SortOrder>;
  voter?: InputMaybe<SortOrder>;
};

export enum VoteScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  PersonalityId = 'personalityId',
  Vote = 'vote',
  Voter = 'voter'
}

export type VoteWhereInput = {
  AND?: InputMaybe<Array<VoteWhereInput>>;
  NOT?: InputMaybe<Array<VoteWhereInput>>;
  OR?: InputMaybe<Array<VoteWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  personality?: InputMaybe<PersonalityRelationFilter>;
  personalityId?: InputMaybe<IntFilter>;
  vote?: InputMaybe<IntFilter>;
  voter?: InputMaybe<StringFilter>;
};

export type VoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name_voter?: InputMaybe<VoteNameVoterCompoundUniqueInput>;
};

export type PersonalitiesQueryVariables = Exact<{
  distinct?: InputMaybe<Array<PersonalityScalarFieldEnum> | PersonalityScalarFieldEnum>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<PersonalityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PersonalityOrderByWithRelationInput> | PersonalityOrderByWithRelationInput>;
  where?: InputMaybe<PersonalityWhereInput>;
}>;


export type PersonalitiesQuery = { __typename?: 'Query', personalities: Array<{ __typename?: 'Personality', upvotes: number, name: string, id: number, downvotes: number, creator: string }>, personalitiesCount: { __typename?: 'AggregateCountOutput', count: number } };

export type PersonalityCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PersonalityCreatedSubscription = { __typename?: 'Subscription', personalityCreated?: { __typename?: 'Personality', id: number, name: string, upvotes: number, downvotes: number, creator: string } | null };

export type OnVotedSubscriptionVariables = Exact<{
  address: Scalars['String'];
}>;


export type OnVotedSubscription = { __typename?: 'Subscription', onVoted?: { __typename?: 'Vote', name: string, id: number, personalityId: number, vote: number, voter: string } | null };

export type PersonalityQueryVariables = Exact<{
  where?: InputMaybe<PersonalityWhereUniqueInput>;
}>;


export type PersonalityQuery = { __typename?: 'Query', personality: { __typename?: 'Personality', creator: string, downvotes: number, id: number, name: string, upvotes: number } };

export type VoteQueryVariables = Exact<{
  where?: InputMaybe<VoteWhereUniqueInput>;
}>;


export type VoteQuery = { __typename?: 'Query', vote: { __typename?: 'Vote', id: number, name: string, personalityId: number, vote: number, voter: string } };

export const namedOperations = {
  Query: {
    personalities: 'personalities',
    personality: 'personality',
    vote: 'vote'
  },
  Subscription: {
    personalityCreated: 'personalityCreated',
    onVoted: 'onVoted'
  }
}

export const PersonalitiesDocument = /*#__PURE__*/ gql`
    query personalities($distinct: [PersonalityScalarFieldEnum!], $skip: Int, $take: Int, $cursor: PersonalityWhereUniqueInput, $orderBy: [PersonalityOrderByWithRelationInput!], $where: PersonalityWhereInput) {
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
    `;

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
 *   },
 * });
 */
export function usePersonalitiesQuery(baseOptions?: Apollo.QueryHookOptions<PersonalitiesQuery, PersonalitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonalitiesQuery, PersonalitiesQueryVariables>(PersonalitiesDocument, options);
      }
export function usePersonalitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonalitiesQuery, PersonalitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonalitiesQuery, PersonalitiesQueryVariables>(PersonalitiesDocument, options);
        }
export type PersonalitiesQueryHookResult = ReturnType<typeof usePersonalitiesQuery>;
export type PersonalitiesLazyQueryHookResult = ReturnType<typeof usePersonalitiesLazyQuery>;
export type PersonalitiesQueryResult = Apollo.QueryResult<PersonalitiesQuery, PersonalitiesQueryVariables>;
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
    `;

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
export function usePersonalityCreatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<PersonalityCreatedSubscription, PersonalityCreatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<PersonalityCreatedSubscription, PersonalityCreatedSubscriptionVariables>(PersonalityCreatedDocument, options);
      }
export type PersonalityCreatedSubscriptionHookResult = ReturnType<typeof usePersonalityCreatedSubscription>;
export type PersonalityCreatedSubscriptionResult = Apollo.SubscriptionResult<PersonalityCreatedSubscription>;
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
    `;

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
export function useOnVotedSubscription(baseOptions: Apollo.SubscriptionHookOptions<OnVotedSubscription, OnVotedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnVotedSubscription, OnVotedSubscriptionVariables>(OnVotedDocument, options);
      }
export type OnVotedSubscriptionHookResult = ReturnType<typeof useOnVotedSubscription>;
export type OnVotedSubscriptionResult = Apollo.SubscriptionResult<OnVotedSubscription>;
export const PersonalityDocument = /*#__PURE__*/ gql`
    query personality($where: PersonalityWhereUniqueInput) {
  personality(where: $where) {
    creator
    downvotes
    id
    name
    upvotes
  }
}
    `;

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
export function usePersonalityQuery(baseOptions?: Apollo.QueryHookOptions<PersonalityQuery, PersonalityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonalityQuery, PersonalityQueryVariables>(PersonalityDocument, options);
      }
export function usePersonalityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonalityQuery, PersonalityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonalityQuery, PersonalityQueryVariables>(PersonalityDocument, options);
        }
export type PersonalityQueryHookResult = ReturnType<typeof usePersonalityQuery>;
export type PersonalityLazyQueryHookResult = ReturnType<typeof usePersonalityLazyQuery>;
export type PersonalityQueryResult = Apollo.QueryResult<PersonalityQuery, PersonalityQueryVariables>;
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
    `;

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
export function useVoteQuery(baseOptions?: Apollo.QueryHookOptions<VoteQuery, VoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VoteQuery, VoteQueryVariables>(VoteDocument, options);
      }
export function useVoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VoteQuery, VoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VoteQuery, VoteQueryVariables>(VoteDocument, options);
        }
export type VoteQueryHookResult = ReturnType<typeof useVoteQuery>;
export type VoteLazyQueryHookResult = ReturnType<typeof useVoteLazyQuery>;
export type VoteQueryResult = Apollo.QueryResult<VoteQuery, VoteQueryVariables>;