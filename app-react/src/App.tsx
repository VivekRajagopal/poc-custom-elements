import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LabelledButtonComponent } from "elements/react";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h1>app-react</h1>
      <LabelledButtonComponent
        label={`Count: ${count}`}
        onclicked={(ev) => setCount(count + 1)}
        style={{
          width: "20rem",
        }}
      >
        Hello
      </LabelledButtonComponent>
    </div>
  );
}

export default App;
