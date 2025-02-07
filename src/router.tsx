import React from "react";
import { createBrowserRouter } from 'react-router-dom'

import {NavigationRouteLists} from "./components/routes/constants/config.tsx";

import AppLayout from "./components/layout";
import NotFoundPage from "./components/not-found-page";

export const ROUTER = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: NavigationRouteLists
  }
]);