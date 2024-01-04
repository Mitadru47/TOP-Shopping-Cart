const Cart_Item = (props) => {

    return(

        <div id={"cartItem" + props.id} className="cartItem">

            <div className="cartItem_title">{props.title}</div>

            <div className="cartItem_quantity">{props.quantity}</div>
            <div className="cartItem_price">{props.price}</div>

            <div className="removeButton">

                <button id={"removeButton" + props.id} onClick={props.handleRemove}>Remove</button>

            </div>

        </div>
    );
}

export default Cart_Item;