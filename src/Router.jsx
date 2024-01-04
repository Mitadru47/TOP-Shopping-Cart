import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";

import React from "react";

const Router = () => {

    const [cartData, setCartData] = React.useState([]);
    
    // Add to Cart - Functionality:

    const handleClick = (response) => {
    
        let itemIndex = response.target.id.substring(10);
    
        let itemName = document.querySelector("#card" + itemIndex + " .title").innerText;
        let itemPrice = document.querySelector("#card" + itemIndex + " .price").innerText;

        let itemQuantity = document.querySelector("#quantity" + itemIndex).value;
        
        // Checking for Repeats/Duplicates:

        let duplicate = false;
        let quantity = 0;

        if(itemQuantity){
            quantity = Number(itemQuantity);
            
        } else {
            quantity = 1;    
        }

        cartData.forEach((item) => {

            if(item.title === itemName){

                if(itemQuantity){
                    quantity = item.quantity + Number(itemQuantity) 

                } else {
                    quantity = item.quantity + 1;
                }

                duplicate = true;
                // console.log(quantity);
            }
        });

        let entry = { title: itemName, quantity: quantity, price: itemPrice };

        if(!duplicate){
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

            // console.log(temp);
            setCartData(temp);
        }

        // console.log(cartData); 
    }

    // Remove from Cart - Functionality:

    const handleRemove = (response) => {

        let temp = [];
        let itemIndex = response.target.id.substring(12);

        cartData.forEach((item) => {

            if(item.title !== cartData[itemIndex].title){
                temp.push(item);
                
            } else {

                let quantity = item.quantity;
                quantity--;

                if(quantity > 0){

                    item.quantity--;
                    temp.push(item);
                }
            }
        })

        // console.log(temp);
        setCartData(temp);
    }

    const router = createBrowserRouter([

        {
            path: "/",
            element: <Home cartData={cartData} handleClick={handleClick}/> 
        },
        
        {
            path: "/cart",
            element: <Cart cartData={cartData} handleRemove={handleRemove}/>
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;