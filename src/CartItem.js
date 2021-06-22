import React from 'react';
class CartItem extends React.Component{
    constructor(){
        super();
        this .state ={
            
            price :999,
            title :'Mobile Phone',
            qty :1,
            img : ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)
        // this.decreaseQuantity = this.decreaseQuantity.bind(this)
        // this.testing();
    }
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
    

    increaseQuantity = () =>{
        // this.state.qty+=1;
        // console.log("this" , this.state)
        // setState form 1
        // this.setState({
        //     qty : this.state.qty + 1
        // })
        // setState form 2 give more priority
        this.setState((prevState) =>{
            return {
                qty : prevState.qty +1}
        },() =>{
            console.log('this.state' , this.state);
        })
        // this.setState((prevState) =>{
        //     return {
        //         qty : prevState.qty +1}
        // })
        // this.setState((prevState) =>{
        //     return {
        //         qty : prevState.qty +1}
        // })
        
    }
    decreaseQuantity =() => {
        const {qty} = this.state;
        if(qty == 0){
            return;
        }
            this.setState((prevState) =>{
                return{
                    qty : prevState.qty -1
                }
            })
    }
    render(){
        const {price , title , qty} = this.state;
        return(
           
            <div className = "cart-item">
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
                        onClick={this.increaseQuantity}
                        >
                        

                        </img>
                        <img alt="decrease"  
                        className="action-icons"  src="https://image.flaticon.com/icons/png/512/992/992683.png"
                        onClick={this.decreaseQuantity}
                        >

                        </img>
                        <img alt="delete"  
                        className="action-icons"  src="https://image.flaticon.com/icons/png/512/3096/3096673.png">

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