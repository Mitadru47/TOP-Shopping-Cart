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
        
        // Checking for Repeats/Duplicates:

        let quantity = 1;
        cartData.forEach((item) => {

            if(item.title === itemName){

                quantity = item.quantity;
                quantity++;

                console.log(quantity);
            }
        });

        let entry = { title: itemName, quantity: quantity, price: itemPrice };

        if(quantity === 1){
            setCartData((prevValue) => [...prevValue, entry]);

        } else {

            // Deleting Repeats/Duplicates:

            let temp = [];

            cartData.forEach((item) => {
                
                if(item.title !== entry.title){
                    temp.push(item);

                } else if(item.title === entry.title){
                    temp.push(entry);
                }
            });

            console.log(temp);
            setCartData(temp);
        }

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