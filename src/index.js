import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Documentform from './pages/Documentform';
import Tracking from './pages/Tracking';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';
import Contact from './pages/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Homepage/>
      </div>
    ),
  },
  {
    path: "documentataion123?",
    element: (
      <div>
        <Documentform/>
      </div>
    ),
  },
  {
    path: "aboutus",
    element: (
      <div>
        <Aboutus/>
      </div>
    ),
  },
  {
    path: "services",
    element: (
      <div>
        <Services/>
      </div>
    ),
  },
  {
    path: "contact",
    element: (
      <div>
        <Contact/>
      </div>
    ),
  },
  {
    
    path: "documentataion123/tracking",
    element: (
      <div>
        <Tracking/>
      </div>
    ),
  },
  
  
  {
    path: "login",
    element: (
      <div>
        <Signup/>
      </div>

    )
      
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
