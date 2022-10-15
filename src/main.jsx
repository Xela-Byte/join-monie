import React from 'react'
import ReactDOM from 'react-dom/client'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Home } from './pages'
import { Four04 } from './pages/404'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Four04 />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    {/*  */}
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
