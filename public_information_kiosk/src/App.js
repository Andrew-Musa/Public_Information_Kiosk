import Header from './components/header';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Landing from './pages/landing';
import AirportInformation from './pages/airportInformation';
import PublicInformation from './pages/publicInformation';
import RestaurantsInformation from './pages/restaurantsInformation';
import InformationType from './pages/informationType';
import InsideNavigation from './pages/insideNavigation';
import OutsideNavigation from './pages/outsideNavigation';
import Restaurants from './pages/restaurants';
import AccessibilityInformation from './pages/accessibilityInformation';
import AccessLanding from './pages/accessLanding';
import AccessInfoLanding from './pages/accessInfo';
import AccessInfo1 from './pages/accessInfo1';
import AccessInfo2 from './pages/accessInfo2';
import AccessInfo3 from './pages/accessInfo3';
import './App.css';
import { createContext, useState } from 'react';
import { Context } from "./context.js";
import List from './components/list.jsx';


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
  },
  {
    path: "/public-information/:type",
    element: <List />
  }
]);

function App() {
  const [accesibleMode, setAccesibleMode] = useState(false)
  return (
    <Context.Provider value={[accesibleMode, setAccesibleMode]}>
      <Header />
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
