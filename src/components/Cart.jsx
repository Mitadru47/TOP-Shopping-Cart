import Nav from "./Nav";
import Cart_Item from "./Cart_Item";

const Cart = (props) => {

    console.log(props.cartData.length);

    if(props.cartData.length === 0){

        return(

            <div id="cart">
    
                <Nav />
    
                <div id="header">
                        
                    <h1>Cart</h1>
                    <div>Items in Cart: {props.cartData.length}</div>
                    
                </div>
    
            </div>
        );

    } else {

        return(

            <div id="cart">

                <Nav />

                <div id="header">
                        
                    <h1>Cart</h1>
                    <div>Items in Cart: {props.cartData.length}</div>
                    
                </div>

                <div id="cartItems">

                    {props.cartData.map((item, index) => <Cart_Item key={index} id={index} title={item.title} quantity={item.quantity} price={item.price}/>)}

                </div>

            </div>
        );
    }
}

export default Cart;