import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Flashcard = {
  __typename?: 'Flashcard';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  scenario: Scenario;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFlashcard: Flashcard;
  createPlan: Plan;
  createPointOfInterest: PointOfInterest;
  createScenario: Scenario;
  deleteFlashcard: Scalars['Boolean']['output'];
  deletePlan: Scalars['Boolean']['output'];
  deletePointOfInterest: Scalars['Boolean']['output'];
  deleteScenario: Scalars['Boolean']['output'];
  login: Scalars['String']['output'];
  signup: Scalars['String']['output'];
};


export type MutationCreateFlashcardArgs = {
  data: NewFlashcardInput;
};


export type MutationCreatePlanArgs = {
  data: NewPlanInput;
};


export type MutationCreatePointOfInterestArgs = {
  data: NewPointOfInterestInput;
};


export type MutationCreateScenarioArgs = {
  data: NewScenarioInput;
};


export type MutationDeleteFlashcardArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeletePlanArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeletePointOfInterestArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteScenarioArgs = {
  id: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  data: NewUserInput;
};


export type MutationSignupArgs = {
  data: NewUserInput;
};

export type NewFlashcardInput = {
  dangerLevel: Scalars['Float']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  scenarioId: Scalars['Float']['input'];
  species: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type NewPlanInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  pictureUrl: Scalars['String']['input'];
  scenarioId: Scalars['Float']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NewPointOfInterestInput = {
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  planId: Scalars['Float']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NewScenarioInput = {
  bannerUrl?: InputMaybe<Scalars['String']['input']>;
  credits: Scalars['String']['input'];
  fullStory: Scalars['String']['input'];
  teaser: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type NewUserInput = {
  mail: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Plan = {
  __typename?: 'Plan';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  pictureUrl: Scalars['String']['output'];
  pointsOfInterest: Array<PointOfInterest>;
  scenario: Scenario;
  title?: Maybe<Scalars['String']['output']>;
};

export type PointOfInterest = {
  __typename?: 'PointOfInterest';
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  plan: Plan;
  title?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAllScenarios: Array<Scenario>;
  getAllUsers: Array<User>;
  getScenario: Scenario;
};


export type QueryGetScenarioArgs = {
  id: Scalars['Float']['input'];
};

/** Roles for users in this app */
export enum Roles {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Scenario = {
  __typename?: 'Scenario';
  bannerUrl?: Maybe<Scalars['String']['output']>;
  credits: Scalars['String']['output'];
  flashcards: Array<Flashcard>;
  fullStory: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  plans: Array<Plan>;
  teaser: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  hashedPassword: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  mail: Scalars['String']['output'];
  name: Scalars['String']['output'];
  roles: Array<Roles>;
};

export type SignupMutationVariables = Exact<{
  data: NewUserInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: string };

export type LoginMutationVariables = Exact<{
  data: NewUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', id: number, name: string, roles: Array<Roles> }> };

export type GetAllScenariosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllScenariosQuery = { __typename?: 'Query', getAllScenarios: Array<{ __typename?: 'Scenario', id: string, title: string, teaser: string, bannerUrl?: string | null, credits: string }> };

export type GetScenarioQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetScenarioQuery = { __typename?: 'Query', getScenario: { __typename?: 'Scenario', id: string, bannerUrl?: string | null, credits: string, fullStory: string, teaser: string, title: string, plans: Array<{ __typename?: 'Plan', id: string, title?: string | null, pictureUrl: string, description?: string | null, pointsOfInterest: Array<{ __typename?: 'PointOfInterest', id: string, title?: string | null, code: string, description?: string | null }> }>, flashcards: Array<{ __typename?: 'Flashcard', id: string, type: string, title: string, description?: string | null }> } };


export const SignupDocument = gql`
    mutation signup($data: NewUserInput!) {
  signup(data: $data)
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LoginDocument = gql`
    mutation login($data: NewUserInput!) {
  login(data: $data)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetAllUsersDocument = gql`
    query getAllUsers {
  getAllUsers {
    id
    name
    roles
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetAllScenariosDocument = gql`
    query getAllScenarios {
  getAllScenarios {
    id
    title
    teaser
    bannerUrl
    credits
  }
}
    `;

/**
 * __useGetAllScenariosQuery__
 *
 * To run a query within a React component, call `useGetAllScenariosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllScenariosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllScenariosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllScenariosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllScenariosQuery, GetAllScenariosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllScenariosQuery, GetAllScenariosQueryVariables>(GetAllScenariosDocument, options);
      }
export function useGetAllScenariosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllScenariosQuery, GetAllScenariosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllScenariosQuery, GetAllScenariosQueryVariables>(GetAllScenariosDocument, options);
        }
export function useGetAllScenariosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllScenariosQuery, GetAllScenariosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllScenariosQuery, GetAllScenariosQueryVariables>(GetAllScenariosDocument, options);
        }
export type GetAllScenariosQueryHookResult = ReturnType<typeof useGetAllScenariosQuery>;
export type GetAllScenariosLazyQueryHookResult = ReturnType<typeof useGetAllScenariosLazyQuery>;
export type GetAllScenariosSuspenseQueryHookResult = ReturnType<typeof useGetAllScenariosSuspenseQuery>;
export type GetAllScenariosQueryResult = Apollo.QueryResult<GetAllScenariosQuery, GetAllScenariosQueryVariables>;
export const GetScenarioDocument = gql`
    query getScenario($id: Float!) {
  getScenario(id: $id) {
    id
    bannerUrl
    credits
    fullStory
    teaser
    title
    plans {
      id
      title
      pictureUrl
      description
      pointsOfInterest {
        id
        title
        code
        description
      }
    }
    flashcards {
      id
      type
      title
      description
    }
  }
}
    `;

/**
 * __useGetScenarioQuery__
 *
 * To run a query within a React component, call `useGetScenarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScenarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScenarioQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetScenarioQuery(baseOptions: Apollo.QueryHookOptions<GetScenarioQuery, GetScenarioQueryVariables> & ({ variables: GetScenarioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetScenarioQuery, GetScenarioQueryVariables>(GetScenarioDocument, options);
      }
export function useGetScenarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetScenarioQuery, GetScenarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetScenarioQuery, GetScenarioQueryVariables>(GetScenarioDocument, options);
        }
export function useGetScenarioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetScenarioQuery, GetScenarioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetScenarioQuery, GetScenarioQueryVariables>(GetScenarioDocument, options);
        }
export type GetScenarioQueryHookResult = ReturnType<typeof useGetScenarioQuery>;
export type GetScenarioLazyQueryHookResult = ReturnType<typeof useGetScenarioLazyQuery>;
export type GetScenarioSuspenseQueryHookResult = ReturnType<typeof useGetScenarioSuspenseQuery>;
export type GetScenarioQueryResult = Apollo.QueryResult<GetScenarioQuery, GetScenarioQueryVariables>;