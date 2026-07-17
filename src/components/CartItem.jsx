function CartItem() {
  return (
    <div className="cart-item">
      <div>
        <h4>MacBook Pro</h4>
        <p>$2,500</p>
      </div>

      <div className="cart-actions">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>

      <button className="remove-btn">
        Remove
      </button>
    </div>
  );
}

export default CartItem;