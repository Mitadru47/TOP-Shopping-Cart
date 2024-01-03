import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";

import React from "react";

const Router = () => {

    // Add to Cart - Functionality:

    const [cartData, setCartData] = React.useState([]);

    const handleClick = (response) => {

        let itemIndex = response.target.id.substring(10);

        let itemName = document.querySelector("#card" + itemIndex + " .title").innerText;
        let itemPrice = document.querySelector("#card" + itemIndex + " .price").innerText;
        
        let entry = { title: itemName, price: itemPrice };

        setCartData((prevValue) => [...prevValue, entry]);
        // console.log(cartData); 
    }

    const router = createBrowserRouter([

        {
            path: "/",
            element: <Home cartData={cartData} handleClick={handleClick}/> 
        },
        
        {
            path: "/cart",
            element: <Cart cartData={cartData}/>
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;