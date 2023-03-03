import { useEffect, useState } from "react";
import "../css/cart.css";
import { deleteIcon } from "../icons";

const Cart = ({ cartStatus, onCartChange }) => {
  const [cartList, setCartList] = useState([]);

  const removeProductFromCart = (product) => {
    const arrayAfterRemove = cartList.filter((item) => item !== product);
    setCartList(arrayAfterRemove);
    onCartChange(arrayAfterRemove);
  };

  useEffect(() => {
    if (cartList !== cartStatus) {
      setCartList(cartStatus);
    }
  }, [cartList, cartStatus]);

  return (
    <div className="cart">
      <div className="cart-title-box" onClick={() => {}}>
        Cart
      </div>
      <div className="cart-product-list">
        {cartList.length < 1 ? (
          <p>Your cart is empty</p>
        ) : (
          cartList.map((item, index) => {
            const itemPrice =
              item.product.price -
              (item.product.discount * item.product.price) / 100;

            const totalPrice = itemPrice * item.quantity;

            return (
              <div key={index}>
                <img src={item.product.images[0][1]} alt={item.product.name} />
                <p>
                  <span>
                    {item.product.name.length > 29
                      ? `${item.product.name.slice(0, 27)}...`
                      : item.product.name}
                  </span>
                  <br />${itemPrice.toFixed(2)} x {item.quantity}
                  <span> ${totalPrice.toFixed(2)}</span>
                </p>
                <button onClick={() => removeProductFromCart(item)}>
                  <img src={deleteIcon} alt="remove" />
                </button>
              </div>
            );
          })
        )}
      </div>
      {cartList.length >= 1 ? (
        <div className="cart-checkout-button">
          <button>Checkout</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cart;
