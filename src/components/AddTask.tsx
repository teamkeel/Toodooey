import { useQueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { useState, useEffect, useRef } from "react";
import {
  useCreateTodoMutation,
  CreateTodoMutationVariables,
} from "../graphql/generated";

export const AddTask = (props: {
  client: GraphQLClient;
  activeProject: string | null | undefined;
}) => {
  const q = useQueryClient();
  const create = useCreateTodoMutation(props.client, {
    onSuccess: () => {
      q.refetchQueries(["AllTodos"]);
    },
  });

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [more, setMore] = useState("");

  const keyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter" && e.metaKey) {
      handleCreate();
    }
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleCreate = () => {
    const form = formRef.current;
    if (form) {
      const formData = new FormData(form);
      let values: {
        [key: string]: string;
      } = {};
      for (const [key, value] of formData) {
        values[key] = value as string;
      }

      create.mutate(
        {
          input: {
            ...(values as CreateTodoMutationVariables["input"]),
            projectId: props.activeProject,
          },
        },
        {
          onSuccess: () => {
            form.reset();
          },
        }
      );
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDown, true);
    return () => window.removeEventListener("keydown", keyDown, true);
  }, [handleCreate]);

  return (
    <div
      className={`bg-white w-full py-3 px-4 rounded-md border border-gray-300 shadow-md shadow-gray-200 flex items-center gap-3`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 22 22"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-gray-400 cursor-pointer hover:text-purple-600"
        onClick={() => {
          handleCreate();
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <div className="w-full">
        <form ref={formRef}>
          <input
            className="px-1 focus:outline-purple-300 bg-transparent w-full"
            placeholder="Title"
            name="title"
          />
          <input
            className="text-gray-500 px-1 bg-transparent focus:outline-purple-300 w-full"
            placeholder="Description"
            name="description"
          />
        </form>
      </div>
    </div>
  );
};
