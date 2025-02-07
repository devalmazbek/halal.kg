import React, {lazy} from "react";

import NotFoundPage from "../../not-found-page/index.tsx";

import {Routes} from "./routes.ts";

const HomePage = lazy(() => import("../../home"));

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