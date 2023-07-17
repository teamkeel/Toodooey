import { useQueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { useState } from "react";
import {
  AllTodosInput,
  ListProjectsQuery,
  useAllTodosQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useListProjectsQuery,
} from "../graphql/generated";
import { AddTask } from "./AddTask";
import { Todo } from "./Todo";

export const ListTodos = (props: { endpoint: string; token: string }) => {
  const client = new GraphQLClient(props.endpoint);
  client.setHeader("Authorization", "Bearer " + props.token);

  const q = useQueryClient();
  const projects = useListProjectsQuery(client);
  const createProject = useCreateProjectMutation(client, {
    onSettled: () => q.refetchQueries(["listProjects"]),
  });
  const [project, setProject] = useState<string | null | undefined>(null);

  return (
    <div className="flex-1 flex flex-col w-full max-w-3xl gap-2">
      <div className="flex flex-row my-5">
        <div className="flex-1 flex flex-row items-start gap-2">
          <a
            href="#"
            className={`bg-white w-auto border border-gray-300 text-gray-500 inline-flex py-2 px-5 rounded-full hover:shadow-sm hover:border-purple-700
                ${project == undefined ? "border-purple-700 text-gray-800" : ""}
              `}
            onClick={() => setProject(undefined)}
          >
            All
          </a>
          {projects.data?.listProjects.edges.map((p) => (
            <a
              href="#"
              className={`bg-white w-auto border border-gray-300 text-gray-500 inline-flex py-2 px-5 rounded-full hover:shadow-sm hover:border-purple-700
                ${project == p.node.id ? "border-purple-700 text-gray-800" : ""}
              `}
              onClick={() => setProject(p.node.id)}
            >
              {p.node.title}
            </a>
          ))}
          <a
            href="#"
            className={`bg-white w-auto border border-gray-300 text-gray-500 inline-flex py-2 px-4 rounded-full hover:shadow-sm hover:border-purple-700
              `}
            onClick={() => {
              const title = window.prompt("Project name");
              if (title) {
                createProject.mutate({
                  input: {
                    title,
                  },
                });
              }
            }}
          >
            +
          </a>
        </div>
      </div>
      <Todos
        client={client}
        activeProject={project}
        projects={projects.data}
        setProject={setProject}
      />
    </div>
  );
};

const Todos = (props: {
  client: GraphQLClient;
  activeProject: string | null | undefined;
  projects?: ListProjectsQuery;
  setProject: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}) => {
  const input: AllTodosInput = {
    first: 100,
  };

  if (props.activeProject) {
    input.where = {
      project: {
        id: {
          equals: props.activeProject,
        },
      },
    };
  }

  const q = useQueryClient();
  const todos = useAllTodosQuery(props.client, {
    input,
  });

  const deleteProject = useDeleteProjectMutation(props.client, {
    onSettled: () => q.refetchQueries(["listProjects"]),
  });

  return (
    <div className="flex flex-col gap-2">
      <AddTask client={props.client} activeProject={props.activeProject} />
      <hr className="border-gray-200 my-3 border-top w-full h-[1px]" />
      {todos.data?.allTodos.edges
        .filter((a) => !a.node.complete)
        .sort(
          (a, b) =>
            new Date(a.node.createdAt.iso8601).getTime() -
            new Date(b.node.createdAt.iso8601).getTime()
        )
        .map((d) => (
          <Todo
            client={props.client}
            todo={d.node}
            key={d.node.id}
            projects={props.projects}
          />
        ))}
      {todos.data?.allTodos.edges
        .filter((a) => a.node.complete)
        .sort(
          (a, b) =>
            new Date(a.node.completedAt!.iso8601).getTime() -
            new Date(b.node.completedAt!.iso8601).getTime()
        )
        .map((d) => (
          <Todo
            client={props.client}
            todo={d.node}
            key={d.node.id}
            projects={props.projects}
          />
        ))}
      {todos.data?.allTodos.edges.length == 0 && (
        <>
          <div className="flex flex-col items-center gap-5 py-7 text-gray-700">
            <p>Nothing here, create a task above</p>
            {props.activeProject && (
              <button
                onClick={() => {
                  deleteProject.mutate(
                    {
                      input: {
                        id: props.activeProject!,
                      },
                    },
                    {
                      onSettled: () => {
                        props.setProject(null);
                      },
                    }
                  );
                }}
                className="hover:bg-white w-auto py-2 px-3 text-s rounded-md border border-gray-300 self-center text-gray-500"
              >
                Delete project
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};
