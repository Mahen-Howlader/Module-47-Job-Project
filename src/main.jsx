import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Pages/Home.jsx';
import RootMain from './Root/Root';
import Applied from './Pages/Applied.jsx';
import Stalist from './Pages/Stalist.jsx';
import Blog from './Pages/Blog.jsx';
import Jobdetails from './Components/Jobdetails.jsx';
import Jobs from './Pages/Job.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootMain></RootMain>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/jobs",
        element : <Jobs></Jobs>
      },
      {
        path : "/applied",
        loader : () => fetch("jobs.json"),
        element : <Applied></Applied>
      },
      {
        path : "/stalis",
        element : <Stalist></Stalist>
      },
      {
        path : "/blog",
        element : <Blog></Blog>
      },
      {
        path : "/job/:userClickID",
        loader : () => fetch("jobs.json"),
        element : <Jobdetails></Jobdetails>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
