import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../../components/Nav";

const Events = () => {
   const [selectedTab, setSelectedTab] = useState("upcoming");

   return (
      <div>
         <Navbar />
         <div className="px-8 py-5 lg:px-16 md:px-10 md:py-5">
            <h1 className="text-3xl font-Aboreto md:text-5xl">
               Up-coming/Past Events
            </h1>
         </div>
         <div className="px-8 py-5 lg:px-16 md:px-10 md:py-5">
            <div className="flex space-x-10">
               <span
                  className={`cursor-pointer ${
                     selectedTab == "upcoming"
                        ? "text-black border-b-[1px] border-b-black"
                        : "text-gray-500"
                  }`}
                  onClick={() => setSelectedTab("upcoming")}
               >
                  Upcoming Events
               </span>
               <span
                  className={`cursor-pointer ${
                     selectedTab == "past"
                        ? "text-black border-b-[1px] border-b-black"
                        : "text-gray-500"
                  }`}
                  onClick={() => setSelectedTab("past")}
               >
                  Past Events
               </span>
            </div>
         </div>
         {selectedTab === "upcoming" ? (
            <div className="px-8 py-5 lg:px-16 md:px-10 md:py-5 flex justify-center items-center">
               <p>No Upcoming events</p>
            </div>
         ) : (
            <div className="px-8 py-5 lg:px-16 md:px-10 md:py-5">
               <p>May 2022</p>
               <div className="rounded-md flex space-x-5 border-[1px] border-darkOverlay items-center">
                  <Image
                     src="/assets/node.webp"
                     width="150px"
                     height="120px"
                     alt="event"
                     className="rounded-l-md object-cover"
                  />
                  <div>
                     <p>12 May, 2022, 8:00 PM</p>
                     <p>How to make best of Pensil community platform</p>
                     <div className="flex space-x-3 mt-3">
                        <Image
                           src="/assets/pensil_small.webp"
                           width="30px"
                           height="30px"
                           alt="event"
                           className="rounded-l-md"
                        />
                        <p>Team Pensil</p>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Events;