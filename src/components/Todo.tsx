import { useQueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { PropsWithChildren, useRef, useState } from "react";
import {
  useSetCompleteMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  AllTodosQuery,
} from "../graphql/generated";

type Todo = AllTodosQuery["allTodos"]["edges"][0]["node"];

export const Todo = (
  props: PropsWithChildren & {
    todo: Todo;
    client: GraphQLClient;
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
  // const [title, setTitle] = useState(props.todo.title);
  // const [description, setDescription] = useState(
  //   props.todo.description ? props.todo.description : ""
  // );

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = () => {
    const form = formRef.current;
    if (form) {
      const formData = new FormData(form);
      let values: {
        [key: string]: string;
      } = {};
      for (const [key, value] of formData) {
        values[key] = value as string;
      }

      update.mutate({
        input: {
          where: {
            id: props.todo.id,
          },
          values: {
            ...values,
          },
        },
      });
    }
  };

  return (
    <div
      className={`bg-white w-full py-3 px-4 rounded-md border border-gray-300 shadow-md shadow-gray-200 flex items-center gap-3 ${
        props.todo.complete && "opacity-50"
      }`}
    >
      <div
        className={`h-6 aspect-square border-2 border-grey-500 hover:border-purple-500 hover:cursor-pointer rounded-full flex justify-center items-center ${
          props.todo.complete && "bg-purple-500 border-0"
        } `}
        onClick={() =>
          complete.mutate({
            input: {
              where: {
                id: props.todo.id,
              },
              values: {
                complete: !props.todo.complete,
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
        <form ref={formRef}>
          {(Object.keys(props.todo) as Array<keyof typeof props.todo>)
            .filter(
              (a) => !["complete", "__typename", "createdAt", "id"].includes(a)
            )
            .sort((a, b) => (a == "title" ? -1 : 1))
            .map((k) => {
              const v = props.todo[k];
              return (
                <input
                  key={k}
                  className={`px-1 focus:outline-purple-300 bg-transparent w-full capitalize ${
                    k == "title" ? undefined : "text-gray-500"
                  }`}
                  placeholder={k}
                  defaultValue={v as string}
                  name={k}
                  onBlur={() => handleChange()}
                  disabled={props.todo.complete}
                />
              );
            })}
        </form>
      </div>
      <a
        href="#"
        className="text-gray-300 text-xs hover:text-gray-600 px-2 py-1 hover:bg-gray-100 rounded"
        onClick={() => {
          deleteTodo.mutate({
            input: {
              id: props.todo.id,
            },
          });
        }}
      >
        &#x2715;
      </a>
    </div>
  );
};
