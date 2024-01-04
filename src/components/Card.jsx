const Card = (props) => {

    return(

        <div id={"card" + props.id} className="card">

            <div className="title">{props.name}</div>

            <div className="image">

                <img src={props.image}/>

            </div>
            
            <div className="price">{props.price}</div>

            <div className="palette">

                <div className="quantity">
                    <input id={"quantity" + props.id} placeholder="..." autoComplete="off"/>
                </div>

                <div className="cartButton">
                    <button id={"cartButton" + props.id} onClick={props.handleClick}>Add to Cart</button>
                </div>

            </div>

        </div>
    );
}

Card.defaultProps = { id: "default", name: "Product Name", image: "", price: "$5.00" };

export default Card;