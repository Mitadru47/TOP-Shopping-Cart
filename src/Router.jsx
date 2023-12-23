import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";

const Router = () => {

    const router = createBrowserRouter([

        {
            path: "/home",
            element: <Home />
        },
        
        {
            path: "/cart",
            element: <Cart />
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;