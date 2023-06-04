/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  personalityCreated?: Maybe<Personality>;
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


export type PersonalitiesQuery = { __typename?: 'Query', personalities: Array<{ __typename?: 'Personality', upvotes: number, name: string, id: number, downvotes: number, creator: string }> };


export const PersonalitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"personalities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalityScalarFieldEnum"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalityWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalityOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalityWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personalities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"creator"}}]}}]}}]} as unknown as DocumentNode<PersonalitiesQuery, PersonalitiesQueryVariables>;