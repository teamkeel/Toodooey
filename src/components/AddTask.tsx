import { useQueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { useState, useEffect } from "react";
import { useCreateTodoMutation } from "../graphql/generated";

export const AddTask = (props: { client: GraphQLClient }) => {
  const q = useQueryClient();
  const create = useCreateTodoMutation(props.client, {
    onSuccess: () => {
      q.refetchQueries(["AllTodos"]);
      setTitle("");
      setDescription("");
    },
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const keyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter" && e.metaKey) {
      handleCreate();
    }
  };

  const handleCreate = () => {
    create.mutate({
      input: {
        title: title,
        description: description,
      },
    });
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
        <input
          className="px-1 focus:outline-purple-300 bg-transparent w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="text-gray-500 px-1 bg-transparent focus:outline-purple-300 w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </div>
  );
};
