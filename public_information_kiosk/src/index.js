import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Landing from './pages/landing';
import AirportInformation from './pages/airportInformation';
import PublicInformation from './pages/publicInformation';
import RestaurantsInformation from './pages/restaurantsInformation';
import InformationType from './pages/informationType';
import Header from './components/header';
import InsideNavigation from './pages/insideNavigation';
import OutsideNavigation from './pages/outsideNavigation';
import Restaurants from './pages/restaurants';
import AccessibilityInformation from './pages/accessibilityInformation';
import AccessLanding from './pages/accessLanding';
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
    path: "/airport-information",
    element: <AirportInformation />
  },
  {
    path: "/public-information",
    element: <PublicInformation />
  },
  {
    path: "/restaurants-information",
    element: <RestaurantsInformation />
  },
  {
    path: "/information-type",
    element: <InformationType />
  },
  {
    path: "/inside-navigation",
    element: <InsideNavigation />
  },
  {
    path: "/accessibility-information",
    element: <AccessibilityInformation />
  },
  {
    path: "/accessLanding",
    element: <AccessLanding />
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
