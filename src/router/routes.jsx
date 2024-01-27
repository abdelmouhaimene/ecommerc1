
import { lazy } from 'react';
import { Navigate } from "react-router-dom";
const ProductPage = lazy(() => import( '../views/pages/productPage/productPage'))
const Home = lazy(() => import("../views/pages/home/Home"))
const Error = lazy(() => import("../views/pages/error/Error"))
const Products = lazy(() => import("../views/pages/products/Products"))
const Categories = lazy(() => import("../views/pages/categories/Categories"))



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
        path: "/categories",
        element: <Categories />,
    },
    {
        path: "/products/:categoryName",
        element: <Products />,
    },
    {
        path: "/product/:id",
        element: <ProductPage />,
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