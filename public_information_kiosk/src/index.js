import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Landing from './pages/landing';
import InformationType from './pages/informationType';
import AirportInformation from './pages/airportInformation';
import Header from './components/header';
import InsideNavigation from './pages/insideNavigation';
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
    path: "/InformationType",
    element: <InformationType />
  },
  {
    path: "/AirportInformation",
    element: <AirportInformation />
  },
  {
    path: "/inside-navigation",
    element: <InsideNavigation />
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
