import { routes } from "../constants";
import Home from "../pages";
import CountriesDetail from "../pages/CountriesDetail";

export const publicRoutes = [
    {
      path: routes.HOME,
      element: <Home/>,
    },
    {
        path: routes.COUNTRY_DETAIL,
        element: <CountriesDetail/>,
      },
  ];
  