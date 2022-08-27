import React from "react";
import Navbar from "../components/Nav";

const Events = () => {
   return (
      <div>
         <Navbar />
         <div className="px-8 py-5 lg:px-16 md:px-10 md:py-5">
            <h1 className="text-3xl font-Aboreto md:text-5xl">
               Live/Up-coming Events
            </h1>
         </div>
      </div>
   );
};

export default Events;
