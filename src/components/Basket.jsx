import "../css/basket.css";

const Basket = () => {
  return (
    <div className="basket">
      <div className="basket-title-box">Cart</div>
      <div className="basket-product-list">
        <p>Your cart is empty</p>
      </div>
      <div className="basket-checkout-button">
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Basket;
