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
    if (item.trim() !== "") {
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

        {alert && (
          <div role="alert">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enablebackground="new 0 0 47.5 47.5"
                viewBox="0 0 47.5 47.5"
                width="24"
                height="24"
                id="warning"
              >
                <defs>
                  <clipPath id="a">
                    <path d="M0 38h38V0H0v38Z" />
                  </clipPath>
                </defs>
                <g clippath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                  <path
                    fill="#ffcc4d"
                    d="M0 0c-1.842 0-2.654 1.338-1.806 2.973l15.609 30.055c.848 1.635 2.238 1.635 3.087 0L32.499 2.973C33.349 1.338 32.536 0 30.693 0H0Z"
                    transform="translate(3.653 2)"
                  />
                  <path
                    fill="#231f20"
                    d="M0 0c0 1.302.961 2.108 2.232 2.108 1.241 0 2.233-.837 2.233-2.108v-11.938c0-1.271-.992-2.108-2.233-2.108-1.271 0-2.232.807-2.232 2.108V0Zm-.187-18.293a2.422 2.422 0 0 0 2.419 2.418 2.422 2.422 0 0 0 2.419-2.418 2.422 2.422 0 0 0-2.419-2.419 2.422 2.422 0 0 0-2.419 2.419"
                    transform="translate(16.769 26.34)"
                  />
                </g>
              </svg>
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{alert}</p>
            </div>
          </div>
        )}

        {/* <ShoppingListItem /> */}
      </div>
    </div>
  );
}

export default App;
