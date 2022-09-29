import { useQueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { PropsWithChildren, useState } from "react";
import {
  useSetCompleteMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../graphql/generated";

export const Todo = (
  props: PropsWithChildren & {
    client: GraphQLClient;
    id: string;
    complete?: boolean;
    title: string;
    description?: string;
  }
) => {
  const q = useQueryClient();
  const complete = useSetCompleteMutation(props.client, {
    onSuccess: () => {
      q.refetchQueries(["AllTodos"]);
    },
  });

  const deleteTodo = useDeleteTodoMutation(props.client, {
    onSuccess: () => {
      q.refetchQueries(["AllTodos"]);
    },
  });

  const update = useUpdateTodoMutation(props.client);

  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const handleChange = () => {
    update.mutate({
      input: {
        where: {
          id: props.id,
        },
        values: {
          title: title,
          description: description,
        },
      },
    });
  };

  return (
    <div
      className={`bg-white w-full py-3 px-4 rounded-md border border-gray-300 shadow-md shadow-gray-200 flex items-center gap-3 ${
        props.complete && "opacity-50"
      }`}
    >
      <div
        className={`h-6 aspect-square border-2 border-grey-500 hover:border-purple-500 hover:cursor-pointer rounded-full flex justify-center items-center ${
          props.complete && "bg-purple-500 border-0"
        } `}
        onClick={() =>
          complete.mutate({
            input: {
              where: {
                id: props.id,
              },
              values: {
                complete: !props.complete,
              },
            },
          })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-3 h-3 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
      <div className="w-full">
        <input
          className="px-1 focus:outline-purple-300 bg-transparent w-full"
          placeholder="Add a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => handleChange()}
          disabled={props.complete}
        />
        <input
          className="text-gray-500 px-1 bg-transparent focus:outline-purple-300 w-full placeholder:text-gray-400"
          placeholder="Add a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={() => handleChange()}
          disabled={props.complete}
        />
      </div>
      <a
        href="#"
        className="text-gray-300 text-xs hover:text-gray-600 px-2 py-1 hover:bg-gray-100 rounded"
        onClick={() => {
          deleteTodo.mutate({
            input: {
              id: props.id,
            },
          });
        }}
      >
        &#x2715;
      </a>
    </div>
  );
};
