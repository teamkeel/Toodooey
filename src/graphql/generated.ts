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

export type BooleanQuery_Input = {
  equals?: InputMaybe<Scalars['Boolean']>;
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  success: Scalars['Boolean'];
};

export type EmailPassword_Input = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type IdQuery_Input = {
  equals?: InputMaybe<Scalars['ID']>;
  oneOf?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Identity = {
  __typename?: 'Identity';
  createdAt: Timestamp;
  email: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Timestamp;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate?: Maybe<Authenticate_Response>;
  createProject: Project;
  createTodo: Todo;
  deleteProject?: Maybe<DeleteResponse>;
  deleteTodo?: Maybe<DeleteResponse>;
  setCompletion: Todo;
  updateProject: Project;
  updateTodo: Todo;
};


export type MutationAuthenticateArgs = {
  input: Authenticate_Input;
};


export type MutationCreateProjectArgs = {
  input: CreateProject_Input;
};


export type MutationCreateTodoArgs = {
  input: CreateTodo_Input;
};


export type MutationDeleteProjectArgs = {
  input: DeleteProject_Input;
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodo_Input;
};


export type MutationSetCompletionArgs = {
  input: SetCompletion_Input;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProject_Input;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodo_Input;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The ID cursor of the last node on the current page. */
  endCursor: Scalars['String'];
  /** Whether there are results after the current page. */
  hasNextPage: Scalars['Boolean'];
  /** The ID cursor of the first node on the current page. */
  startCursor: Scalars['String'];
  /** Total count of nodes on the current page. */
  totalCount: Scalars['Int'];
};

export type Project = {
  __typename?: 'Project';
  createdAt: Timestamp;
  id: Scalars['ID'];
  owner: Identity;
  ownerId: Scalars['ID'];
  tasks: Todo_Connection;
  title: Scalars['String'];
  updatedAt: Timestamp;
};


export type ProjectTasksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Project_Connection = {
  __typename?: 'Project_connection';
  edges: Array<Project_Edge>;
  pageInfo: PageInfo;
};

export type Project_Edge = {
  __typename?: 'Project_edge';
  node: Project;
};

export type Query = {
  __typename?: 'Query';
  allTodos: Todo_Connection;
  getProject?: Maybe<Project>;
  listProjects: Project_Connection;
  todo?: Maybe<Todo>;
};


export type QueryAllTodosArgs = {
  input?: InputMaybe<AllTodos_Input>;
};


export type QueryGetProjectArgs = {
  input: GetProject_Input;
};


export type QueryListProjectsArgs = {
  input?: InputMaybe<ListProjects_Input>;
};


export type QueryTodoArgs = {
  input: Todo_Input;
};

export type Timestamp = {
  __typename?: 'Timestamp';
  /** Formatted timestamp. Uses standard datetime formats */
  formatted: Scalars['String'];
  fromNow: Scalars['String'];
  /** ISO8601 representation of the timestamp */
  iso8601: Scalars['String'];
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

export type Todo_Connection = {
  __typename?: 'Todo_connection';
  edges: Array<Todo_Edge>;
  pageInfo: PageInfo;
};

export type Todo_Edge = {
  __typename?: 'Todo_edge';
  node: Todo;
};

export type AllTodos_Input = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AllTodos_Where>;
};

export type AllTodos_Where = {
  complete?: InputMaybe<BooleanQuery_Input>;
  projectId?: InputMaybe<IdQuery_Input>;
};

export type Authenticate_Input = {
  createIfNotExists?: InputMaybe<Scalars['Boolean']>;
  emailPassword: EmailPassword_Input;
};

export type Authenticate_Response = {
  __typename?: 'authenticate_response';
  identityCreated: Scalars['Boolean'];
  token: Scalars['String'];
};

export type CreateProject_Input = {
  title: Scalars['String'];
};

export type CreateTodo_Input = {
  description?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<CreateTodo_Project_Input>;
  title: Scalars['String'];
};

export type CreateTodo_Project_Input = {
  id?: InputMaybe<Scalars['ID']>;
};

export type DeleteProject_Input = {
  id: Scalars['ID'];
};

export type DeleteTodo_Input = {
  id: Scalars['ID'];
};

export type GetProject_Input = {
  id: Scalars['ID'];
};

export type ListProjects_Input = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type SetCompletion_Input = {
  values: SetCompletion_Values;
  where: SetCompletion_Where;
};

export type SetCompletion_Values = {
  complete: Scalars['Boolean'];
};

export type SetCompletion_Where = {
  id: Scalars['ID'];
};

export type Todo_Input = {
  id: Scalars['ID'];
};

export type UpdateProject_Input = {
  values: UpdateProject_Values;
  where: UpdateProject_Where;
};

export type UpdateProject_Values = {
  title: Scalars['String'];
};

export type UpdateProject_Where = {
  id: Scalars['ID'];
};

export type UpdateTodo_Input = {
  values?: InputMaybe<UpdateTodo_Values>;
  where: UpdateTodo_Where;
};

export type UpdateTodo_Values = {
  description?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateTodo_Where = {
  id: Scalars['ID'];
};

export type AllTodosQueryVariables = Exact<{
  input?: InputMaybe<AllTodos_Input>;
}>;


export type AllTodosQuery = { __typename?: 'Query', allTodos: { __typename?: 'Todo_connection', edges: Array<{ __typename?: 'Todo_edge', node: { __typename?: 'Todo', id: string, title: string, description?: string | null, complete: boolean, project?: { __typename?: 'Project', id: string, title: string } | null, createdAt: { __typename?: 'Timestamp', iso8601: string }, completedAt?: { __typename?: 'Timestamp', iso8601: string } | null } }> } };

export type AuthenticateMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate?: { __typename?: 'authenticate_response', token: string } | null };

export type CreateProjectMutationVariables = Exact<{
  input: CreateProject_Input;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: string } };

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodo_Input;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, title: string, complete: boolean } };

export type DeleteProjectMutationVariables = Exact<{
  input: DeleteProject_Input;
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject?: { __typename?: 'DeleteResponse', success: boolean } | null };

export type DeleteTodoMutationVariables = Exact<{
  input: DeleteTodo_Input;
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'DeleteResponse', success: boolean } | null };

export type ListProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListProjectsQuery = { __typename?: 'Query', listProjects: { __typename?: 'Project_connection', edges: Array<{ __typename?: 'Project_edge', node: { __typename?: 'Project', id: string, title: string } }> } };

export type SetCompleteMutationVariables = Exact<{
  input: SetCompletion_Input;
}>;


export type SetCompleteMutation = { __typename?: 'Mutation', setCompletion: { __typename?: 'Todo', id: string } };

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodo_Input;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: string, title: string, description?: string | null, complete: boolean } };


export const AllTodosDocument = `
    query AllTodos($input: allTodos_input) {
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
    mutation createProject($input: createProject_input!) {
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
    mutation createTodo($input: createTodo_input!) {
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
    mutation deleteProject($input: deleteProject_input!) {
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
    mutation deleteTodo($input: deleteTodo_input!) {
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
    mutation setComplete($input: setCompletion_input!) {
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
    mutation updateTodo($input: updateTodo_input!) {
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