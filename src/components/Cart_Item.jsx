const Cart_Item = (props) => {

    return(

        <div className="cartItem">

            <div className="cartItem_title">{props.title}</div>

            <div className="cartItem_quantity">{props.quantity}</div>
            <div className="cartItem_price">{props.price}</div>

            <div className="removeButton">

                <button>Remove</button>

            </div>

        </div>
    );
}

export default Cart_Item;