import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Landing from './pages/landing';
import Header from './components/header';
import InsideNavigation from './pages/insideNavigation';
import OutsideNavigation from './pages/outsideNavigation';
import Restaurants from './pages/restaurants';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/inside-navigation",
    element: <InsideNavigation />
  },
  {
    path: "/restaurants",
    element: <Restaurants />
  },
  {
    path: "/outside-navigation",
    element: <OutsideNavigation />
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
