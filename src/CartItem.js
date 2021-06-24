import React from 'react';
class CartItem extends React.Component{
    
    // testing(){
    //     const promise = new Promise((resolve , reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })

    //     promise.then(()=>{
    //         this.setState({qty:this.state.qty + 10})
            
    //         this.setState({qty:this.state.qty + 10})
    //         console.log('state' ,this.state)
        
    //     })
    // }
    

    // increaseQuantity = () =>{
        // this.state.qty+=1;
        // console.log("this" , this.state)
        // setState form 1
        // this.setState({
        //     qty : this.state.qty + 1
        // })
        // setState form 2 give more priority
        // this.setState((prevState) =>{
        //     return {
        //         qty : prevState.qty +1}
        // },() =>{
        //     console.log('this.state' , this.state);
        // })
        // this.setState((prevState) =>{
        //     return {
        //         qty : prevState.qty +1}
        // })
        // this.setState((prevState) =>{
        //     return {
        //         qty : prevState.qty +1}
        // })
        
    // }
    // decreaseQuantity =() => {
    //     const {qty} = this.state;
    //     if(qty == 0){
    //         return;
    //     }
    //         this.setState((prevState) =>{
    //             return{
    //                 qty : prevState.qty -1
    //             }
    //         })
    // }
    render(){
        console.log('this.props' ,this.props)
        const {price , title , qty} = this.props.product;
        const{product , onDecreaseQuantity , onIncreaseQuantity , onDeleteProduct} = this.props;        
        return(

           
            <div className = "cart-item">
                {/* {this.props.jsx} */}
                <div className = "left-block">
                    <img style={styles.image}/>
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
}

const styles = {
    image :{
        height : 110,
        width :100,
        borderRadius :4,
        background :'#ccc'
    }
}

export default CartItem;