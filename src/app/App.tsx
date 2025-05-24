import {Suspense} from "react";
import { RouterProvider } from 'react-router-dom'

import { Spinner } from "../shared/ui/spinner/index.tsx";


import {ROUTER} from "./router.tsx";

function App() {

  return (
  <Suspense fallback={<Spinner />}>
    <RouterProvider router={ROUTER}></RouterProvider>
  </Suspense>
  )
}

export default App
