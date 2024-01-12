import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Invoice from "./Pages/Invoice.jsx";
import Layout from "./Layout.jsx";
import HomePage from "./Pages/HomePage.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<Layout/>}>

      <Route path='' element={<HomePage/>}/>  
      <Route path='invoice' element={<Invoice/>}/>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
</React.StrictMode>
);
