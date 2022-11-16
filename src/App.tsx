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
          <div className="p-5 w-full flex items-start justify-between">
            <Button onClick={() => setParam("")}>Set API URL</Button>
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
