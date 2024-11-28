import React, { useContext } from 'react';
import { Products } from '../../product';
import { ShopContext } from '../../context/shop-context';
import CartItem from './cart-item';
import './cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItem, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount(); // Calculate total amount
  const navigate = useNavigate();

  return (
    <div className="cart"> {/* Fixed className */}
      <div>
        <h1>Cart Items</h1>
        <div className="cartItems">
          {Products.map((product) => {
            if (cartItem[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />; // Added key prop for unique identification
            }
            return null; // Explicit return when condition is false
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: RM {totalAmount}</p>
            <button onClick={() => navigate('/')}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          <h1>Your Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
