import Nav from "./Nav";
import Cart_Item from "./Cart_Item";

const Cart = () => {

    return(

        <div id="cart">

            <Nav />
            <h1>Cart</h1>

            <div id="cartItems">

                <Cart_Item />
                <Cart_Item />
                <Cart_Item />
                <Cart_Item />

            </div>

        </div>
    );
}

export default Cart;