import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Products from "./components/Products";

const routes = [
    {
        path: "/",
        element: <Products/>,
    },
]

const router = createBrowserRouter([
    routes
]);

export default router;