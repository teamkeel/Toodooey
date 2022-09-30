import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AllTodosInput = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AllTodosQueryInput>;
};

export type AllTodosQueryInput = {
  complete?: InputMaybe<BooleanQueryInput>;
};

export type AuthenticateEmailPasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthenticateInput = {
  createIfNotExists?: InputMaybe<Scalars['Boolean']>;
  emailPassword: AuthenticateEmailPasswordInput;
};

export type AuthenticateResponse = {
  __typename?: 'AuthenticateResponse';
  identityCreated?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type BooleanQueryInput = {
  equals?: InputMaybe<Scalars['Boolean']>;
};

export type CreateTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  success: Scalars['Boolean'];
};

export type DeleteTodoInput = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate?: Maybe<AuthenticateResponse>;
  createTodo: Todo;
  deleteTodo?: Maybe<DeleteResponse>;
  setCompletion: Todo;
  updateTodo: Todo;
};


export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
};


export type MutationSetCompletionArgs = {
  input: SetCompletionInput;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  allTodos: TodoConnection;
  todo?: Maybe<Todo>;
};


export type QueryAllTodosArgs = {
  input?: InputMaybe<AllTodosInput>;
};


export type QueryTodoArgs = {
  input: TodoInput;
};

export type SetCompletionInput = {
  values: SetCompletionValuesInput;
  where: SetCompletionQueryInput;
};

export type SetCompletionQueryInput = {
  id: Scalars['ID'];
};

export type SetCompletionValuesInput = {
  complete: Scalars['Boolean'];
};

export type Timestamp = {
  __typename?: 'Timestamp';
  day: Scalars['Int'];
  /** Formatted timestamp. Uses standard datetime formats */
  formatted: Scalars['String'];
  fromNow: Scalars['String'];
  month: Scalars['Int'];
  /** Seconds since unix epoch */
  seconds: Scalars['Int'];
  year: Scalars['Int'];
};


export type TimestampFormattedArgs = {
  format: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  complete: Scalars['Boolean'];
  completedAt?: Maybe<Timestamp>;
  createdAt: Timestamp;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Timestamp;
};

export type TodoConnection = {
  __typename?: 'TodoConnection';
  edges: Array<TodoEdge>;
  pageInfo: PageInfo;
};

export type TodoEdge = {
  __typename?: 'TodoEdge';
  node: Todo;
};

export type TodoInput = {
  id: Scalars['ID'];
};

export type UpdateTodoInput = {
  values: UpdateTodoValuesInput;
  where: UpdateTodoQueryInput;
};

export type UpdateTodoQueryInput = {
  id: Scalars['ID'];
};

export type UpdateTodoValuesInput = {
  complete?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTodosQuery = { __typename?: 'Query', allTodos: { __typename?: 'TodoConnection', edges: Array<{ __typename?: 'TodoEdge', node: { __typename?: 'Todo', id: string, title: string, description?: string | null, complete: boolean, createdAt: { __typename?: 'Timestamp', seconds: number } } }> } };

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, title: string, complete: boolean } };

export type DeleteTodoMutationVariables = Exact<{
  input: DeleteTodoInput;
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'DeleteResponse', success: boolean } | null };

export type SetCompleteMutationVariables = Exact<{
  input: SetCompletionInput;
}>;


export type SetCompleteMutation = { __typename?: 'Mutation', setCompletion: { __typename?: 'Todo', id: string } };

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: string, title: string, description?: string | null, complete: boolean } };


export const AllTodosDocument = `
    query AllTodos {
  allTodos {
    edges {
      node {
        id
        title
        description
        complete
        createdAt {
          seconds
        }
      }
    }
  }
}
    `;
export const useAllTodosQuery = <
      TData = AllTodosQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: AllTodosQueryVariables,
      options?: UseQueryOptions<AllTodosQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<AllTodosQuery, TError, TData>(
      variables === undefined ? ['AllTodos'] : ['AllTodos', variables],
      fetcher<AllTodosQuery, AllTodosQueryVariables>(client, AllTodosDocument, variables, headers),
      options
    );
export const CreateTodoDocument = `
    mutation createTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    title
    complete
  }
}
    `;
export const useCreateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>(
      ['createTodo'],
      (variables?: CreateTodoMutationVariables) => fetcher<CreateTodoMutation, CreateTodoMutationVariables>(client, CreateTodoDocument, variables, headers)(),
      options
    );
export const DeleteTodoDocument = `
    mutation deleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
    success
  }
}
    `;
export const useDeleteTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteTodoMutation, TError, DeleteTodoMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteTodoMutation, TError, DeleteTodoMutationVariables, TContext>(
      ['deleteTodo'],
      (variables?: DeleteTodoMutationVariables) => fetcher<DeleteTodoMutation, DeleteTodoMutationVariables>(client, DeleteTodoDocument, variables, headers)(),
      options
    );
export const SetCompleteDocument = `
    mutation setComplete($input: SetCompletionInput!) {
  setCompletion(input: $input) {
    id
  }
}
    `;
export const useSetCompleteMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SetCompleteMutation, TError, SetCompleteMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SetCompleteMutation, TError, SetCompleteMutationVariables, TContext>(
      ['setComplete'],
      (variables?: SetCompleteMutationVariables) => fetcher<SetCompleteMutation, SetCompleteMutationVariables>(client, SetCompleteDocument, variables, headers)(),
      options
    );
export const UpdateTodoDocument = `
    mutation updateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    id
    title
    description
    complete
  }
}
    `;
export const useUpdateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateTodoMutation, TError, UpdateTodoMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateTodoMutation, TError, UpdateTodoMutationVariables, TContext>(
      ['updateTodo'],
      (variables?: UpdateTodoMutationVariables) => fetcher<UpdateTodoMutation, UpdateTodoMutationVariables>(client, UpdateTodoDocument, variables, headers)(),
      options
    );