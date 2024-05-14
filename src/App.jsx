import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { ShoppingListItem } from "./components/ShoppingListItem";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [item, setItem] = useState(null);

  //Do something when button is clicked
  const handleClick = () => {
    addShoppingList(item);
    console.log(item, "onclick"); 
    console.log(shoppingList); 
  };


  // Get the value from the input
  const handleChange = (e) => {
    // setItem(e.target.value);
    setItem(  () =>  e.target.value )
  };

  const addShoppingList = (item) => {
    //set the shopping list
    setShoppingList([...shoppingList, {
      id: uuidv4(),
      name: item,
    }]);
  };

  // const deleteShoppingList = (item) => {
  //   console.log("delete pressed for: ", item);
  //   setShoppingList(shoppingList.filter((list) => list.id !== item.id));
  // };

  return (
    <div className="container">
      <h1 className="mb-4">My Shopping List</h1>

      <div className="flex gap-4 pb-3 border-b-2 border-gray-700">
        <input
          type="text"
          placeholder="E.g. Carrots"
          className="v__input flex-1"
          onChange={handleChange}
          // onChange={ (e) => setItem( e.target.value ) }
        />
        <button className="v__button" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="v__list-container overflow-y-scroll">
        {/* Map your data here: */}

        {shoppingList.length > 0 ? (
          shoppingList.map((item) => {
            return (<ShoppingListItem name={item.name}/> );
          })
        ) : (
          <p className="mb-4">No List Found!!</p>
        )}

        {/* <ShoppingListItem /> */}
      </div>
    </div>
  );
}

export default App;
