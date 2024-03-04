import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './pages/landing';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css'
/////
import AccessInfoLanding from './pages/accessInfo';
import AccessInfo1 from './pages/accessInfo1';
import AccessInfo2 from './pages/accessInfo2';
import AccessInfo3 from './pages/accessInfo3';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/accessInfoLanding",
    element: <AccessInfoLanding />
  },
  {


    path: "/accessInfo1",
    element: <AccessInfo1 />
  },
  {


    path: "/accessInfo2",
    element: <AccessInfo2 />
  },
  {


    path: "/accessInfo3",
    element: <AccessInfo3 />
  }
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
