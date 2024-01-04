import React from "react";

import Nav from "./Nav.jsx";
import Card from "./Card.jsx";

const Home = (props) => {
    
    // Fetching Data from Fake Store API:

    const [data, setData] = React.useState([]);
    // console.log(data);

    React.useEffect(() => {

        fetch('https://fakestoreapi.com/products?limit=8')
            .then(res => res.json())
            .then(json => setData(json));
    }, []);

    // Counting Items in Cart:

    let cartItems = 0;
    props.cartData.forEach((item) => {

        cartItems += item.quantity;
    });

    if(data.length === 0){
        
        return(

            <div id="home">

                <Nav />
                
                <div id="loader">    
                    <div>Loading...</div>
                </div>

            </div>
        );

    } else {

        return(

            <div id="home">

                <Nav />

                <div id="header">
                    
                    <h1>Home</h1>
                    <div id="cartPalette">Items in Cart: {cartItems}</div>
                
                </div>

                <div id="cards">

                    { data.map((item, index) => <Card key={index} id={index} name={item.title} image={item.image} price={"$" + item.price} handleClick={props.handleClick} />) }
                
                </div>

            </div>
        );
    }
}

export default Home;