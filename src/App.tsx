import { useState } from "react";
import { Button } from "./components/Button";
import { Todos } from "./components/Todos";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [endpoint, setEndpoint] = useState("");

  return (
    <div className="flex h-full flex-col items-center">
      {endpoint ? (
        <>
          <div className="p-5 w-full flex items-start">
            <Button onClick={() => setEndpoint("")}>Set API URL</Button>
          </div>
          <Todos endpoint={endpoint} />
        </>
      ) : (
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
                <input
                  placeholder="e.g. http://localhost:8000/Web"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="
                  bg-white 
                  p-2 
                  px-4 
                  border 
                  border-gray-300 
                  rounded-md 
                  shadow-sm 
                  transition-shadow 
                  flex 
                  items-center
                  w-96
                  mr-3
                  
                  active:shadow-sm 
                  hover:shadow-md 
                  hover:border-gray-400 
                  "
                />
                <Button onClick={() => setEndpoint(inputValue)}>Set URL</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
