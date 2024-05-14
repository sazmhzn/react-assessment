import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { ShoppingListItem } from "./components/ShoppingListItem";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [item, setItem] = useState("");
  const [alert, setAlert] = useState("");

  // Get the value from the input
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const addShoppingList = (item) => {
    const newList = {
      id: uuidv4(),
      name: item,
    };

    shoppingList.map((list) => {
      //checking if the duplicate value exit in the array
      if (list.name === item) {
        setAlert("Item already exists in the list");
        //tried to generate the alert pop up but is preventing the user from adding the value
        alert("stop");
      } else {
        setAlert("");
      }
    });

    //set the shopping list
    setShoppingList((prev) => {
      return [...prev, newList];
    });
  };

  // will add the item in the cart when "Add" button is clicked
  const handleClick = (e) => {
    if (item) {
      addShoppingList(item);
      setItem("");
    }
  };

  //delete the shopping list item
  const deleteShoppingList = (id) => {
    console.log("deleting for: ", id);
    console.log("shoppingList: ", shoppingList);
    setShoppingList(shoppingList.filter((list) => list.id !== id));
  };

  return (
    <div className="container">
      <h1 className="mb-4">My Shopping List</h1>

      <div className="flex gap-4 pb-3 border-b-2 border-gray-700">
        <input
          type="text"
          placeholder="E.g. Carrots"
          className="v__input flex-1"
          value={item}
          onChange={handleChange}
        />
        <button className="v__button" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="v__list-container overflow-y-scroll">
        {/* Map your data here: */}

        {shoppingList.length > 0 ? (
          shoppingList.map((item) => {
            return (
              <ShoppingListItem
                name={item.name}
                key={item.id}
                id={item.id}
                deleteShoppingList={deleteShoppingList}
              />
            );
          })
        ) : (
          <p className="mb-4">No List Found!!</p>
        )}

        {alert && alert}

        {/* <ShoppingListItem /> */}
      </div>
    </div>
  );
}

export default App;
