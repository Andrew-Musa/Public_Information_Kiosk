import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './pages/landing';
import Screen3 from './pages/Screen3';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/Screen3",
    element: <Screen3 />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
