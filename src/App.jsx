import { useState } from "react";
import "./App.css";
import { ShoppingListItem } from "./components/ShoppingListItem";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [item, setItem] = useState(null);

  //Do something when button is clicked
  const handleClick = () => {
    addShoppingList(item)
    console.log("button clicked");
  };

  // Get the value from the input
  const handleChange = (e) => {
    setItem((prev) => e.target.value);
  };

  const addShoppingList = (list) => {
    //set the shopping list
    setShoppingList([...shoppingList, list]);
  };

  const deleteShoppingList = (item) => {
    setShoppingList( shoppingList.filter( list => list !== item ) )
  }


  return (
    <div className="container">
      <h1 className="mb-4">My Shopping List</h1>

      <div className="flex gap-4 pb-3 border-b-2 border-gray-700">
        <input
          type="text"
          placeholder="E.g. Carrots"
          className="v__input flex-1"
          onChange={handleChange}
        />
        <button className="v__button" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="v__list-container overflow-y-scroll">
        {/* Map your data here: */}
        {shoppingList && shoppingList.map( (item) => {
          return (
           <ShoppingListItem name={item} />
          )
        } )}


        <ShoppingListItem />
      </div>
    </div>
  );
}

export default App;
