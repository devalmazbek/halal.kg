import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
// import Breadcrumbs from "@shared/breadcrumbs/BreadCrumbsComponent.tsx";

export default function AppLayout() {
  const location = useLocation();
  const isHomePage =  location.pathname === '/';
  const style = isHomePage ? 'home' : 'container mx-auto';

  return(
    <div className="flex flex-col">
      <div className="min-h-dvh">
        <div className="container mx-auto">
          <Header/>
        </div>
        
        <div className={`flex-grow`}>
          <main className={`${style} mt-2`}>
            <div className="">
              {/* <Breadcrumbs/> */}
            </div>
            <Outlet />
          </main>
        </div>
      </div>
      <div className='silver'>
        <div className="container mx-auto">
          <Footer/>
        </div>
      </div>
    </div>
  );
}