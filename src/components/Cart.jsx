import Nav from "./Nav";
import Cart_Item from "./Cart_Item";

const Cart = (props) => {

    // Counting Items in Cart:

    let cartItems = 0;
    props.cartData.forEach((item) => {

        cartItems += item.quantity;
    });

    // Cart Total Functionailty:

    let cartTotal = 0;
    props.cartData.forEach((item) => {

        let price = item.quantity * Number(item.price.substring(1));
        cartTotal += price;

        // console.log(price);
    });

    cartTotal = (Math.round(cartTotal * 100))/100;

    if(props.cartData.length === 0){

        return(

            <div id="cart">
    
                <Nav />
    
                <div id="header">
                        
                    <h1>Cart</h1>
                    <div>Items in Cart: {cartItems}</div>
                    
                </div>
    
            </div>
        );

    } else {

        return(

            <div id="cart">

                <Nav />

                <div id="header">
                        
                    <h1>Cart</h1>

                    <div>
                    
                        <div>Items in Cart: {cartItems}</div>
                        <div>Total: ${cartTotal}</div>

                    </div>
                    
                </div>

                <div id="cartItems">

                    {props.cartData.map((item, index) => <Cart_Item key={index} id={index} title={item.title} quantity={item.quantity} price={item.price}/>)}

                </div>

            </div>
        );
    }
}

export default Cart;