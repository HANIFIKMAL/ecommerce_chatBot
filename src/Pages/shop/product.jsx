import React, { useContext } from 'react'
import './shop.css'
import {ShopContext} from "../../context/shop-context"

export const Product = (props) => {

    const {id,productName,price,productImage } = props.data;
    const { addToCart, cartItem} = useContext(ShopContext);

    const cartItemCount = cartItem[id];

return(
    <div className='product'>
      <img src={productImage}/>
      <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p>RM {price}</p>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
    )  
}

export default Product
