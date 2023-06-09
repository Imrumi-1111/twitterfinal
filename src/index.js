import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/pages/Homepage/home";
import SignIn from "./components/pages/LoginPage/login";
import SignUp from "./components/pages/RegisterPage/register";
import ForgotPassword from "./components/pages/LoginPage/ForgotPassword";
import Details from "./components/pages/Details/Details";
import Password from "./components/pages/LoginPage/Password";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/login", element: <SignIn /> },
  { path: "/register", element: <SignUp /> },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
