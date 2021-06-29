import React from 'react';
import Cart from './Cart';
import Navbar from'./Navbar';
import  firebase from 'firebase/app';



class App extends React.Component {
 
  constructor(){
    super();
    this.state ={
        
        products :[] ,
        loading:true
    }
    this.db = firebase.firestore()
   
  }
  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot)
    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data())
    //     })

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] =doc.id


    //       return data;
    //     })
    //     this.setState({
    //       products :products,
    //       loading : false
    //     })
    //   })
  
  this.db
  .collection('products')
  // .where('price','==',900)
  // .where('title','==','Camera')
  // .orderBy('qty' ,'desc')
  .onSnapshot ((snapshot) => {
    console.log(snapshot)
    snapshot.docs.map((doc) => {
      console.log(doc.data())
    })

    const products = snapshot.docs.map((doc) => {
      const data = doc.data();
      data['id'] =doc.id


      return data;
    })
    this.setState({
      products :products,
      loading : false
    })
  })
  }
    
    // this.increaseQuantity = this.increaseQuantity.bind(this)
    // this.decreaseQuantity = this.decreaseQuantity.bind(this)
    // this.testing();

handleIncreaseQuantity = (product) => {
    console.log ('hey increase this property'  , product);
    const {products} = this.state ;
    const index = products.indexOf(product);
    // products[index].qty +=1
    
    // this.setState({
    //     products :products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty :products[index].qty +1
      })
      .then(()=>{
        console.log("updtae successful")
      })
      .catch((error)=>{
          console.log('error' , error)
      })

   
}
handleDecreaseQuantity =(product) => {
    // console.log('hey decrease this property' , product) ;
    const {products} = this.state ;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return 
    }
    // products[index].qty -= 1

    // this.setState({
    //     products:products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty:products[index].qty -1
      })
      .then(()=>{
        console.log("update successfully ");
      })
      .catch((error) =>{
        console.log("error")
      })
}
handleDeleteProduct =(id) =>{
    const {products} = this.state;
    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(()=>{
        console.log("deleted successfully")
      })
      .catch((error)=>{
        console.log("error" , error);
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

    return " ";
  })


  return cartTotal ;
}
addProduct= () =>{
  this.db
    .collection('products')
    .add({
      img :"",
      price : '900',
      qty :"3",
      title :"Washing Machine"
    })
    .then((docRef) =>{
      console.log('product has been added' , docRef)
    })
    .catch((error)=>{
      console.log("error" , error)
    })
}
    
    render() {
    const {products , loading } = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}
        />
        {/* <button onClick={this.addProduct} style ={{padding :20 , fontSize :20}}>Add a Product</button> */}
        <Cart 
          
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct ={this.handleDeleteProduct}
          products = {products}  
        />
      {/* <Navbar /> */}
      {loading && <h3>Loading Products ...</h3>}
      <div style={{padding :10,fontSize :20 }}>TOTAL : {this.getCartTotal()} </div>

      </div>
    );
    }
  }



export default App;
