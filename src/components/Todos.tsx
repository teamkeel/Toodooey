import { GraphQLClient } from "graphql-request";
import { useAllTodosQuery } from "../graphql/generated";
import { AddTask } from "./AddTask";
import { Todo } from "./Todo";

export const Todos = (props: { endpoint: string }) => {
  const client = new GraphQLClient(props.endpoint);
  const todos = useAllTodosQuery(client);

  return (
    <div className="flex-1 flex justify-center items-end w-full max-w-lg flex-col gap-2">
      <AddTask client={client} />
      <hr className="border-gray-200 my-3 border-top w-full h-[1px]" />
      {todos.data?.allTodos.edges
        .filter((a) => !a.node.complete)
        .sort((a, b) => a.node.createdAt.seconds - b.node.createdAt.seconds)
        .map((d) => (
          <Todo
            client={client}
            key={d.node.id}
            id={d.node.id}
            title={d.node.title}
            description={d.node.description ? d.node.description : ""}
            complete={d.node.complete}
          />
        ))}
      {todos.data?.allTodos.edges
        .filter((a) => a.node.complete)
        .sort((a, b) => a.node.createdAt.seconds - b.node.createdAt.seconds)
        .map((d) => (
          <Todo
            client={client}
            key={d.node.id}
            id={d.node.id}
            title={d.node.title}
            description={d.node.description ? d.node.description : ""}
            complete={d.node.complete}
          />
        ))}
    </div>
  );
};
