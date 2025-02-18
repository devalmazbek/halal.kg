import React from "react";
import { createBrowserRouter } from 'react-router-dom'

import {NavigationRouteLists} from "./routes/constants/config.tsx";

import AppLayout from "./layout";
import NotFoundPage from "../shared/ui/not-found-page/index.tsx";

export const ROUTER = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: NavigationRouteLists
  }
]);