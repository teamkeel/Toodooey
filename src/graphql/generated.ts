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
  Any: any;
  ISO8601: any;
};

export type AllTodosInput = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AllTodosWhere>;
};

export type AllTodosWhere = {
  complete?: InputMaybe<BooleanQueryInput>;
  projectId?: InputMaybe<IdQueryInput>;
};

export type AuthenticateInput = {
  createIfNotExists?: InputMaybe<Scalars['Boolean']>;
  emailPassword: EmailPasswordInput;
};

export type AuthenticateResponse = {
  __typename?: 'AuthenticateResponse';
  identityCreated: Scalars['Boolean'];
  token: Scalars['String'];
};

export type BooleanQueryInput = {
  equals?: InputMaybe<Scalars['Boolean']>;
};

export type CreateProjectInput = {
  title: Scalars['String'];
};

export type CreateTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<CreateTodoProjectInput>;
  title: Scalars['String'];
};

export type CreateTodoProjectInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type DeleteProjectInput = {
  id: Scalars['ID'];
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  success: Scalars['Boolean'];
};

export type DeleteTodoInput = {
  id: Scalars['ID'];
};

export type EmailPasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type GetProjectInput = {
  id: Scalars['ID'];
};

export type IdQueryInput = {
  equals?: InputMaybe<Scalars['ID']>;
  notEquals?: InputMaybe<Scalars['ID']>;
  oneOf?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Identity = {
  __typename?: 'Identity';
  createdAt: Timestamp;
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  updatedAt: Timestamp;
};

export type ListProjectsInput = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate?: Maybe<AuthenticateResponse>;
  createProject: Project;
  createTodo: Todo;
  deleteProject?: Maybe<DeleteResponse>;
  deleteTodo?: Maybe<DeleteResponse>;
  requestPasswordReset?: Maybe<RequestPasswordResetResponse>;
  resetPassword?: Maybe<ResetPasswordResponse>;
  setCompletion: Todo;
  updateProject: Project;
  updateTodo: Todo;
};


export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
};


export type MutationRequestPasswordResetArgs = {
  input: RequestPasswordResetInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSetCompletionArgs = {
  input: SetCompletionInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes on the current page. */
  count: Scalars['Int'];
  /** The ID cursor of the last node on the current page. */
  endCursor: Scalars['String'];
  /** Whether there are results after the current page. */
  hasNextPage: Scalars['Boolean'];
  /** The ID cursor of the first node on the current page. */
  startCursor: Scalars['String'];
  /** Total count of nodes across all pages. */
  totalCount: Scalars['Int'];
};

export type Project = {
  __typename?: 'Project';
  createdAt: Timestamp;
  id: Scalars['ID'];
  owner: Identity;
  ownerId: Scalars['ID'];
  tasks: TodoConnection;
  title: Scalars['String'];
  updatedAt: Timestamp;
};


export type ProjectTasksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  node: Project;
};

export type Query = {
  __typename?: 'Query';
  _health?: Maybe<Scalars['Boolean']>;
  allTodos: TodoConnection;
  getProject?: Maybe<Project>;
  listProjects: ProjectConnection;
  todo?: Maybe<Todo>;
};


export type QueryAllTodosArgs = {
  input?: InputMaybe<AllTodosInput>;
};


export type QueryGetProjectArgs = {
  input: GetProjectInput;
};


export type QueryListProjectsArgs = {
  input?: InputMaybe<ListProjectsInput>;
};


export type QueryTodoArgs = {
  input: TodoInput;
};

export type RequestPasswordResetInput = {
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
};

export type RequestPasswordResetResponse = {
  __typename?: 'RequestPasswordResetResponse';
  success?: Maybe<Scalars['Boolean']>;
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type ResetPasswordResponse = {
  __typename?: 'ResetPasswordResponse';
  success?: Maybe<Scalars['Boolean']>;
};

export type SetCompletionInput = {
  values: SetCompletionValues;
  where: SetCompletionWhere;
};

export type SetCompletionValues = {
  complete: Scalars['Boolean'];
};

export type SetCompletionWhere = {
  id: Scalars['ID'];
};

export type Timestamp = {
  __typename?: 'Timestamp';
  /** Formatted timestamp. Uses standard datetime formats */
  formatted: Scalars['String'];
  fromNow: Scalars['String'];
  /** ISO8601 representation of the timestamp */
  iso8601: Scalars['String'];
  /** Seconds since unix epoch */
  seconds: Scalars['Int'];
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
  owner: Identity;
  ownerId: Scalars['ID'];
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['ID']>;
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

export type UpdateProjectInput = {
  values: UpdateProjectValues;
  where: UpdateProjectWhere;
};

export type UpdateProjectValues = {
  title: Scalars['String'];
};

export type UpdateProjectWhere = {
  id: Scalars['ID'];
};

export type UpdateTodoInput = {
  values?: InputMaybe<UpdateTodoValues>;
  where: UpdateTodoWhere;
};

export type UpdateTodoProjectInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UpdateTodoValues = {
  description?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<UpdateTodoProjectInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateTodoWhere = {
  id: Scalars['ID'];
};

export type AllTodosQueryVariables = Exact<{
  input?: InputMaybe<AllTodosInput>;
}>;


export type AllTodosQuery = { __typename?: 'Query', allTodos: { __typename?: 'TodoConnection', edges: Array<{ __typename?: 'TodoEdge', node: { __typename?: 'Todo', id: string, title: string, description?: string | null, complete: boolean, project?: { __typename?: 'Project', id: string, title: string } | null, createdAt: { __typename?: 'Timestamp', iso8601: string }, completedAt?: { __typename?: 'Timestamp', iso8601: string } | null } }> } };

export type AuthenticateMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate?: { __typename?: 'AuthenticateResponse', token: string } | null };

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: string } };

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, title: string, complete: boolean } };

export type DeleteProjectMutationVariables = Exact<{
  input: DeleteProjectInput;
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject?: { __typename?: 'DeleteResponse', success: boolean } | null };

export type DeleteTodoMutationVariables = Exact<{
  input: DeleteTodoInput;
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'DeleteResponse', success: boolean } | null };

export type ListProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListProjectsQuery = { __typename?: 'Query', listProjects: { __typename?: 'ProjectConnection', edges: Array<{ __typename?: 'ProjectEdge', node: { __typename?: 'Project', id: string, title: string } }> } };

export type SetCompleteMutationVariables = Exact<{
  input: SetCompletionInput;
}>;


export type SetCompleteMutation = { __typename?: 'Mutation', setCompletion: { __typename?: 'Todo', id: string } };

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: string, title: string, description?: string | null, complete: boolean } };


export const AllTodosDocument = `
    query AllTodos($input: AllTodosInput) {
  allTodos(input: $input) {
    edges {
      node {
        id
        title
        description
        complete
        project {
          id
          title
        }
        createdAt {
          iso8601
        }
        completedAt {
          iso8601
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
export const AuthenticateDocument = `
    mutation authenticate($email: String!, $password: String!) {
  authenticate(
    input: {emailPassword: {email: $email, password: $password}, createIfNotExists: true}
  ) {
    token
  }
}
    `;
export const useAuthenticateMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AuthenticateMutation, TError, AuthenticateMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AuthenticateMutation, TError, AuthenticateMutationVariables, TContext>(
      ['authenticate'],
      (variables?: AuthenticateMutationVariables) => fetcher<AuthenticateMutation, AuthenticateMutationVariables>(client, AuthenticateDocument, variables, headers)(),
      options
    );
export const CreateProjectDocument = `
    mutation createProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
  }
}
    `;
export const useCreateProjectMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>(
      ['createProject'],
      (variables?: CreateProjectMutationVariables) => fetcher<CreateProjectMutation, CreateProjectMutationVariables>(client, CreateProjectDocument, variables, headers)(),
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
export const DeleteProjectDocument = `
    mutation deleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
    success
  }
}
    `;
export const useDeleteProjectMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteProjectMutation, TError, DeleteProjectMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteProjectMutation, TError, DeleteProjectMutationVariables, TContext>(
      ['deleteProject'],
      (variables?: DeleteProjectMutationVariables) => fetcher<DeleteProjectMutation, DeleteProjectMutationVariables>(client, DeleteProjectDocument, variables, headers)(),
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
export const ListProjectsDocument = `
    query listProjects {
  listProjects {
    edges {
      node {
        id
        title
      }
    }
  }
}
    `;
export const useListProjectsQuery = <
      TData = ListProjectsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: ListProjectsQueryVariables,
      options?: UseQueryOptions<ListProjectsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ListProjectsQuery, TError, TData>(
      variables === undefined ? ['listProjects'] : ['listProjects', variables],
      fetcher<ListProjectsQuery, ListProjectsQueryVariables>(client, ListProjectsDocument, variables, headers),
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