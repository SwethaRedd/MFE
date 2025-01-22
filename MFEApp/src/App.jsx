import React, { useState, useEffect, lazy, Suspense, Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import VueJs from "./components/Vue.jsx";
import FoodList from "./components/FoodList.jsx";
import ProductList from "./components/ProductList.jsx";
import JsApp from "./components/JsApp.jsx";
import Layout from "./components/Layout.jsx";
import NotFound from "./components/NotFound.jsx";

import "./style.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <FoodList />,
        },
        {
          path: "/vuejs-app",
          element: <VueJs />,
        },
        {
          path: "/js-app",
          element: <JsApp />,
        },
        ,
        {
          path: "/todo-app",
          element: <ProductList />,
        },
        ,
        {
          path: "/jsapp",
          element: <JsApp />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <Header />
      <VueJs />
      <JsApp />
      <FoodList />
      <ProductList />
      <Footer />
    </RouterProvider>
  );
};

export default App;
