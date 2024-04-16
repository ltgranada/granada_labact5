import React, { useState } from "react";

function Item({ item, onDelete, onCheckedItem }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked(!isChecked);
    onCheckedItem(item.id);
  }

  function handleClick() {
    onDelete(item.id);
  }

  return (
    <li className={`entry ${isChecked ? "checked" : ""}`}>
      <span>
        <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {item.quantity} {item.name}
        </span>
      </span>{" "}
      <div>
        <button className="button-row" onClick={handleCheck}>
          {isChecked ? "Uncheck" : "Check"}
        </button>
        <button className="button-row" onClick={handleClick}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Item;
