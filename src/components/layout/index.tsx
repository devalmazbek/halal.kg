import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
// import Breadcrumbs from "@shared/breadcrumbs/BreadCrumbsComponent.tsx";

export default function AppLayout() {
  const location = useLocation();
  const isHomePage =  location.pathname === '/';
  const style = isHomePage ? 'home' : 'bg-gray-100';

  return(
    <div className="flex flex-col h-screen container mx-auto">
      <Header/>
      <div className={`flex-grow ${style}`}>
        <main className="container mx-auto">
          <div className="">
            {/* <Breadcrumbs/> */}
          </div>
          <Outlet />
        </main>
      </div>
      <Footer/>
    </div>
  );
}