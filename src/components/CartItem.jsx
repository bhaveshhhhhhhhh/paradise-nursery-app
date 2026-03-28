import React from "react";

function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
