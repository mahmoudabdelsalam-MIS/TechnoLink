import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import Layout from '../features/layout/Layout'
import ErrorPage from '../features/common/ErrorPage';
import Home from '../features/home/Home';
import About from '../features/about/about';
import Contact from '../features/contact/Contact';
import Products from '../features/products/Products';
import SingleProduct from '../features/singleProduct/SingleProduct';
import NotFoundPage from '../features/common/NotFoundPage';




const router = createBrowserRouter([
    {
        path:"",
        element:<Layout />,
        errorElement:<ErrorPage/>,
        children:[
            {
            index: true,
            element: (
                <Home />
                ),
            },
            {
            path: "aboutUs",
            element: (
                <About />
                ),
            },
            {
            path: "contactUs",
            element: (
                <Contact />
                ),
            },
            {
            path: "products",
            element: (
                <Products />
                ),
            },
            {
            path: "singleProduct",
            element: (
                <SingleProduct />
                ),
            },
            {
            path: "*",
            element: (
            <NotFoundPage />
                ),
            },
        ]
    }
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
