import {lazy} from "react";

import NotFoundPage from "../../../shared/ui/not-found-page/index.tsx";

import {Routes} from "./routes.ts";

const HomePage = lazy(() => import("../../../pages/home/index.ts"));

export const NavigationRouteLists = [
  {
    path: Routes.Home,
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];