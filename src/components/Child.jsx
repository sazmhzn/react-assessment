import { useState } from "react";

const Child = ({setCount}) => {
  // const [count, setCount] = useState(0)

  const handleMinusClick = () => {
    /* Implement logic here */
    setCount((prev) => prev-1)
    
  };

  const handlePlusClick = () => {
    /* Implement logic here */
    setCount((prev) => prev+1)
  };

  return (
    <div>
      <button type="button" className="btn" onClick={handleMinusClick}>
        -
      </button>
      <button type="button" className="btn" onClick={handlePlusClick}>
        +
      </button>
      
    </div>
  );
};

export default Child;
