import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Authentication/AuthProvider.jsx';
import Home from './Layout/Home/Home.jsx';
import Dashboard from './Layout/Dashboard/Dashboard.jsx';
import SignIn from './Authentication/SignIn/SignIn.jsx';
import Register from './Authentication/Register/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/logIn",
        element:<SignIn></SignIn>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
