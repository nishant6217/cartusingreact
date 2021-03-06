import React from 'react';
// class CartItem extends React.Component{
    
   
        const CartItem = (props) =>{
        // console.log('this.props' ,props)
        const {price , title , qty} = props.product;
        const {product , onDecreaseQuantity , onIncreaseQuantity , onDeleteProduct} = props;        
        return(

           
            <div className = "cart-item">
                {/* {this.props.jsx} */}
                <div className = "left-block">
                    <img style={styles.image} src={product.img} alt="there is product"/>
                </div>
                <div className = "right-block">
                    <div style={{fontSize :25}}>{title}</div>
                    <div style={{color :'#777'}}> Rs. {price}</div>
                    <div style={{color :'#777'}}>Qty :{qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons  */}
                        <img alt="increase"
                        className="action-icons"  src="https://image.flaticon.com/icons/png/512/992/992651.png"
                        onClick={() => onIncreaseQuantity(product)}
                        >
                        

                        </img>
                        <img alt="decrease"  
                        className="action-icons"  src="https://image.flaticon.com/icons/png/512/992/992683.png"
                        onClick={()=>onDecreaseQuantity(product)}
                        >

                        </img>
                        <img alt="delete"  
                        className="action-icons"  src="https://image.flaticon.com/icons/png/512/3096/3096673.png"
                        onClick={() => onDeleteProduct(product.id)}
                        >

                        </img>
                    </div>

                </div>

            </div>
        )
    }
// }
        


const styles = {
    image :{
        height : 110,
        width :100,
        borderRadius :4,
        background :'#ccc'
    }
}

export default CartItem;