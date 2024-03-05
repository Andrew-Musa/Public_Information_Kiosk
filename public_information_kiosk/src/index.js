import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Landing from './pages/landing';
import Screen3 from './pages/Screen3';
import Screen5 from './pages/Screen5';
import Screen7 from './pages/Screen7';
import InformationType from './pages/informationType';
import AirportInformation from './pages/airportInformation';
import Header from './components/header';
import InsideNavigation from './pages/insideNavigation';
import OutsideNavigation from './pages/outsideNavigation';
import Restaurants from './pages/restaurants';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css'
import AccessInfoLanding from './pages/accessInfo';
import AccessInfo1 from './pages/accessInfo1';
import AccessInfo2 from './pages/accessInfo2';
import AccessInfo3 from './pages/accessInfo3';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
  },
  {
    path: "/Screen3",
    element: <Screen3 />
  },
  {
    path: "/Screen5",
    element: <Screen5 />
  },
  {
    path: "/Screen7",
    element: <Screen7 />
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
