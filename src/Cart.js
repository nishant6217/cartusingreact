import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
        super();
        this .state ={
            
            products :[
                {
                    price :999,
                    title :'Mobile Phone',
                    qty :4,
                    img : '',
                    id :1
                },
                {
                    price :99,
                    title :'Watch',
                    qty :1,
                    img : '',
                    id:2
                },
                {
                    price :999,
                    title :'Laptop',
                    qty :4,
                    img : '',
                    id:3
                }
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)
        // this.decreaseQuantity = this.decreaseQuantity.bind(this)
        // this.testing();
    }

    render(){
        // const arr = [1,2,3,4,5];
        const { products } = this.state;
        return (
            <div className="cart"> 
               
                {products.map((product)=>{
                    return  <CartItem  
                            product ={product} 
                            key={product.id}
                            // jsx={<h1>TEST</h1>}
                            
                            />
                })}
                
                
                
                
                {/* <CartItem/>
                <CartItem/>
                <CartItem/> */}
                {/* {/* {arr.map((item)=>{
                    return item+5;
                })} */}
            </div>
        );
    }
}            

export default Cart;