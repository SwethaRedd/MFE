import React, { useState, useEffect, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import VueJs from "./components/Vue.jsx";
import FoodList from "./components/FoodList.jsx";
import ProductList from "./components/ProductList.jsx";
import JsApp from "./components/JsApp.jsx";
import "./style.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FoodList />,
    },
    {
      path: "/vuejs",
      element: <VueJs />,
    },
    {
      path: "/jsapp",
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
