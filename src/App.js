import React from 'react';
import Cart from './Cart';
import Navbar from'./Navbar';



class App extends React.Component {
 
  constructor(){
    super();
    this.state ={
        
        products :[
            {
                price :999,
                title :'Mobile Phone',
                qty :4,
                img : 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                id :1
            },
            {
                price :99,
                title :'Watch',
                qty :1,
                img : 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id:2
            },
            {
                price :999,
                title :'Laptop',
                qty :4,
                img : 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80',
                id:3
            }
        ]
    }
  }
    
    // this.increaseQuantity = this.increaseQuantity.bind(this)
    // this.decreaseQuantity = this.decreaseQuantity.bind(this)
    // this.testing();

handleIncreaseQuantity = (product) => {
    console.log ('hey increase this property'  , product);
    const {products} = this.state ;
    const index = products.indexOf(product);
    products[index].qty +=1
    
    this.setState({
        products :products
    })

   
}
handleDecreaseQuantity =(product) => {
    // console.log('hey decrease this property' , product) ;
    const {products} = this.state ;
    const index = products.indexOf(product);
    if(products[index].qty == 0){
        return 
    }
    products[index].qty -= 1

    this.setState({
        products:products
    })
}
handleDeleteProduct =(id) =>{
    const {products} = this .state;
    const items = products.filter((item) => item.id !== id);  //retrurn a another array products is not equal to id passed

    this.setState({
        products : items
    })

} 
getCartCount =() => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {
    count += product.qty;
  })
  return count;
}
getCartTotal =() =>{
  const {products} = this.state;
  let cartTotal =0;

  products.map((product) =>{
    cartTotal = cartTotal + product.qty * product.price
  })


  return cartTotal ;
}
    
    render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}
        />
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct ={this.handleDeleteProduct}
        />
      {/* <Navbar /> */}
      <div style={{padding :10,fontSize :20 }}>TOTAL : {this.getCartTotal()} </div>

      </div>
    );
    }
  }



export default App;
