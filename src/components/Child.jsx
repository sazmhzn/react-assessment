import { useContext, useState } from "react";
import counterContext from "../context/counterContext";

const Child = () => {
  const { increment, decrement } = useContext(counterContext);
  // const [count, setCount] = useState(0)

  // const handleMinusClick = () => {
  //   /* Implement logic here */
  //   setCount((prev) => prev-1)

  // };

  // const handlePlusClick = () => {
  //   /* Implement logic here */
  //   setCount((prev) => prev+1)
  // };

  return (
    <div>
      <button type="button" className="btn" onClick={decrement}>
        -
      </button>
      <button type="button" className="btn" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Child;
