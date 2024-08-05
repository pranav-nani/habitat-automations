// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/css/Utilities.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "services",
    element: <ServicesPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "pricing",
    element: <PricingPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
