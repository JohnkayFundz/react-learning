import { useCart } from "../context/CartContext";

function Cart() {
  const { state } = useCart();

  const totalItems = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <aside className="cart">
      <h2>🛒 Shopping Cart</h2>

      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {state.cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p>
                ${item.price.toLocaleString()} × {item.quantity}
              </p>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Price: ${totalPrice.toLocaleString()}</h3>

            <button>Checkout</button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;