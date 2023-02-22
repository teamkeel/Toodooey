import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Login } from "./components/Login";
import { ListTodos } from "./components/Todos";

function App() {
  const [token, setToken] = useState("");
  const [params, setParams] = useState(
    new URLSearchParams(document.location.search)
  );
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const isLoading = isFetching > 0 || isMutating > 0;

  const setParam = (value: string) => {
    params.set("e", value);
    window.history.replaceState({}, "", `${location.pathname}?${params}`);
    setParams(new URLSearchParams(document.location.search));
  };

  let endpoint = params.get("e");

  return (
    <div className="flex h-full flex-col items-center">
      {endpoint ? (
        <>
          <div className="p-5 w-full flex items-center justify-between">
            <Button onClick={() => setParam("")}>Set API URL</Button>
            {isLoading && (
              <svg
                className="animate-spin -ml-2.5 h-5 w-5 absolute left-[50%] text-purple-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {token && <Button onClick={() => setToken("")}>Logout</Button>}
          </div>
          {!token ? (
            <Login endpoint={endpoint} setToken={setToken} />
          ) : (
            <ListTodos endpoint={endpoint} token={token} />
          )}
        </>
      ) : (
        <Start setParam={setParam} />
      )}
    </div>
  );
}

const Start = (props: { setParam: (v: string) => void }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="p-5 h-full flex justify-center items-center">
        <div>
          <h1 className="text-2xl font-bold">Toodooey</h1>
          <p className="text-gray-500 mb-10">
            A snazzy UI for the Keel{" "}
            <a
              href="https://github.com/teamkeel/exampleProject"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              example todo project
            </a>
          </p>

          <p className="text-gray-500 mb-2">Your API URL</p>
          <div className="flex">
            <div className="pr-2">
              <Input
                placeholder="e.g. http://localhost:8000/Web"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <Button onClick={() => props.setParam(inputValue)}>Set URL</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
