 import React from 'react'
 import { Products } from "../../product"
 import Product from "./product"
 import './shop.css'
 
 const Shop = () => {
   return (
     <div className='shop'>
       <div className='shopTitle'>
            <h1>Anson's Shop</h1>
       </div>
       <div className='products'>
            {Products.map((product) => (
                <Product data={product}/>
            ))}
       </div>
     </div>
   )
 }
 
 export default Shop
 