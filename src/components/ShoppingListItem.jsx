import { useState } from "react";
import classes from "./ShoppingListItem.module.css";

export const ShoppingListItem = ({ name, id, deleteShoppingList }) => {
  const [checked, setChecked] = useState(false);

  //will render the text to have a strikethrough effect
  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };



  return (
    <div className="flex items-center p-2">
      <input
        type="checkbox"
        className="mr-2"
        checked={checked}
        onChange={handleChange}
      />
      <h3 className={checked ? "flex-1 line-through" : "flex-1"}>{name}</h3>
      <button className={classes.removeButton} onClick={ () =>  deleteShoppingList(id)}>x</button>
    </div>
  );
};
