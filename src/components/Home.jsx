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

    if(data.length === 0){
        
        return(

            <div id="home">

                <Nav />
                <div>Loading...</div>

            </div>
        );

    } else {

        return(

            <div id="home">

                <Nav />

                <div id="header">
                    
                    <h1>Home</h1>
                    <div>Items in Cart: {props.cartData.length}</div>
                
                </div>

                <div id="cards">
                
                    <Card key="0" id="0" name={data[0].title} image={data[0].image} price={"$" + data[0].price} handleClick={props.handleClick} />
                    <Card key="1" id="1" name={data[1].title} image={data[1].image} price={"$" + data[1].price} handleClick={props.handleClick} />

                    <Card key="2" id="2" name={data[2].title} image={data[2].image} price={"$" + data[2].price} handleClick={props.handleClick} />
                    <Card key="3" id="3" name={data[3].title} image={data[3].image} price={"$" + data[3].price} handleClick={props.handleClick} />

                    <Card key="4" id="4" name={data[4].title} image={data[4].image} price={"$" + data[4].price} handleClick={props.handleClick} />
                    <Card key="5" id="5" name={data[5].title} image={data[5].image} price={"$" + data[5].price} handleClick={props.handleClick} />

                    <Card key="6" id="6" name={data[6].title} image={data[6].image} price={"$" + data[6].price} handleClick={props.handleClick} />
                    <Card key="7" id="7" name={data[7].title} image={data[7].image} price={"$" + data[7].price} handleClick={props.handleClick} />
                
                </div>

            </div>
        );
    }
}

export default Home;