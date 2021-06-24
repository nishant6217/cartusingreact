import React from 'react';
import CartItem from './CartItem';
const Cart =(props) =>{
    const { products } = props;
        return (
            <div className="cart"> 
               
                {products.map((product)=>{
                    return  <CartItem  
                                product ={product} 
                                key={product.id}
                                // jsx={<h1>TEST</h1>}
                                onIncreaseQuantity = {props.onIncreaseQuantity}
                                onDecreaseQuantity = {props.onDecreaseQuantity}
                                onDeleteProduct ={props.onDeleteProduct}
                            
                            />
                })}
                
                
                
                
                {/* <CartItem/>
                <CartItem/>
                <CartItem/> */}
                {/* {/* {arr.map((item)=>{
                    return item+5;
                })} */}
            </div>
        )
    


    }
          

export default Cart;