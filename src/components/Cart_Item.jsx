const Cart_Item = () => {

    return(

        <div className="cartItem">

            <div className="cartItem_title">Cart Item</div>

            <div className="cartItem_quantity">2</div>
            <div className="cartItem_price">$5.00</div>

            <div className="removeButton">

                <button>Remove</button>

            </div>

        </div>
    );
}

export default Cart_Item;