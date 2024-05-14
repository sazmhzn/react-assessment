import { useState } from "react";
import classes from "./ShoppingListItem.module.css";

export const ShoppingListItem = ({name}) => {

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prevState) => !prevState);
  }

  console.log(checked , name);  
  
  return (
    <div className="flex items-center p-2">
      <input type="checkbox" className="mr-2" checked={checked} onChange={handleChange} />
      <h3 className={ checked ? "flex-1 line-through" : "flex-1" } >{name}</h3>
      <button className={classes.removeButton}>x</button>
    </div>
  );
};
