const Card = () => {

    return(

        <div className="card">

            <div className="title">Product Name</div>

            <div className="image">

                <img src=""/>

            </div>
            
            <div className="price">$5.00</div>

            <div className="palette">

                <div className="quantity">
                    <input />
                </div>

                <div className="cartButton">
                    <button>Add to Cart</button>
                </div>

            </div>

        </div>
    );
}

export default Card;