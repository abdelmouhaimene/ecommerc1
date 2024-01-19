
import { lazy } from 'react';
import { Navigate } from "react-router-dom";
const Home = lazy(() => import("../views/pages/home/Home"))
const Error = lazy(() => import("../views/pages/error/Error"))
const Products = lazy(() => import("../views/pages/products/Products"))
const Clothes = lazy(() => import("../views/pages/clothes/Clothes"))
// const Bank = lazy(() => import("../views/pages/Bank/Bank"))
// const Products = lazy(() => import("../views/pages/Products/Products"))
// const Provider = lazy(() => import("../views/pages/Provider/Provider"))
// const Supplier = lazy(() => import("../views/pages/Supplier/Supplier"))
// const Merchant = lazy(() => import("../views/pages/Merchant/Merchant"))


const routes = [
    {
        path: "/",
        element: <Navigate to="/home" replace />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "*",
        element: <Error />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/products/clothes",
        element: <Clothes />,
    },
    {
        path: "/products/accesoirs",
        element: <Products />,
    },
    {
        path: "/products/cosmitics",
        element: <Products />,
    },
    {
        path: "/products/electronics",
        element: <Products />,
    },
    // {
    //     path: "/bank",
    //     element: <Bank />,
    // },
    // {
    //     path: "/products",
    //     element: <Products />,
    // },
    // {
    //     path: "/merchant",
    //     element: <Merchant />,
    // },
    // {
    //     path: "/supplier",
    //     element: <Supplier />,
    // },
    // {
    //     path: "/merchant",
    //     element: <Merchant />,
    // },

]
export default routes;