import Nav from "./Nav";
import Cart_Item from "./Cart_Item";

const Cart = (props) => {

    console.log(props.cartData.length);

    return(

        <div id="cart">

            <Nav />

            <div id="header">
                    
                <h1>Cart</h1>
                <div>Items in Cart: {props.cartData.length}</div>
                
            </div>

            <div id="cartItems">

                <Cart_Item />
                <Cart_Item />

                <Cart_Item />
                <Cart_Item />

                <Cart_Item />
                <Cart_Item />

                <Cart_Item />
                <Cart_Item />

            </div>

        </div>
    );
}

export default Cart;