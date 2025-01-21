import { useContext, useState } from "react";
import "./App.css";
import Child from "./components/Child";
import counterContext from "./context/counterContext";

const App = () => {
  // const [count, setCount] = useState(0);
  const { counter, increment } = useContext(counterContext);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <Child />
      {counter < 0 ? <p>Why so negative?</p> : ""}
      {/* <p>{message}</p> */}
    </div>
  );
};

export default App;
