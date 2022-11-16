import { GraphQLClient } from "graphql-request";
import { useAuthenticateMutation } from "../graphql/generated";
import { Button } from "./Button";
import { Input } from "./Input";

type ApiError = {
  response?: {
    errors?: {
      message: string;
    }[];
  };
};

export const Login = (props: {
  endpoint: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const client = new GraphQLClient(props.endpoint);
  const auth = useAuthenticateMutation(client, {
    networkMode: "always",
  });

  const error = auth.error as ApiError;

  return (
    <div className="p-5 h-full flex justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold">Login / Sign up</h1>
        <p className="text-gray-500 mb-5">
          Create an account or login to continue
        </p>

        {error && (
          <div className="p-3 bg-red-100 border-red-200 border rounded-md mb-5">
            <p className="text-red-800">
              Error:{" "}
              {error.response?.errors && error.response?.errors[0].message}
            </p>
          </div>
        )}
        <form
          action="#"
          onSubmit={(e) => {
            var data = new FormData(e.currentTarget);
            auth.mutate(
              {
                email: (data.get("email") as string) || "",
                password: (data.get("password") as string) || "",
              },
              {
                onSuccess: (d) => {
                  if (d.authenticate && d.authenticate.token) {
                    props.setToken(d.authenticate.token);
                  }
                },
              }
            );
            e.preventDefault();
          }}
        >
          <div className="mb-8">
            <p className="text-gray-500 mb-2 ">Email</p>
            <Input name="email" type="email" />
            <p className="text-gray-500 mb-2 mt-2">Password</p>
            <Input name="password" type="password" />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};
