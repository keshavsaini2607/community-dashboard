import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Nav";
import { communityTabs } from "../../utils/constants";
import {
   FaGithub,
   FaFacebookSquare,
   FaInstagram,
   FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";

const ExploreCommunity = () => {
   const router = useRouter();
   console.log(router.query.title);
   const Tab = ({ title }) => {
      return (
         <div className="flex justify-between items-center w-[70%] border-[1px] border-darkOverlay p-4 rounded-md cursor-pointer hover:bg-background mb-4">
            <p># {title}</p>
            <p>{">"}</p>
         </div>
      );
   };
   return (
      <div>
         <Navbar />
         <div className="px-8 py-5 lg:px-16 md:px-10 md:py-5">
            <h1 className="text-3xl font-Aboreto md:text-5xl">
               {router.query.title}
            </h1>
         </div>
         <div className="flex flex-col pb-10 lg:flex-row">
            <div className="px-8 py-5 lg:px-16 md:px-10 md:py-5 w-[95%] lg:w-[60%]">
               {communityTabs.map((tab) => (
                  <Tab key={tab.id} title={tab.title} />
               ))}
            </div>
            <div className="w-[95%] lg:w-[40%] mx-auto h-[70vh] bg-background 
            rounded-l-xl p-2 my-10 lg:m-0 lg:absolute lg:right-0">
               <div className="border-bgSecondary border-2 h-[100%] flex flex-col rounded-l-xl items-center py-5">
                  <h1 className="text-2xl font-Aboreto mb-4">
                     Community Leader
                  </h1>
                  <Image
                     src="/assets/p-1.jpeg"
                     height="200px"
                     width="190rem"
                     alt="user_image"
                     className="object-cover rounded-lg"
                  />
                  <h2 className="text-lg mt-10">Mr. Dwayne Jhonson</h2>
                  <p className="font-Lato mx-5">
                     We Have Created Codercommunity To Make Greast Programmers
                     Community in the world, You Can Network, Collab, Join
                     Hackthon, Find Open Source Projects Inside CoderCommunity
                  </p>
                  <div className="flex space-x-10 mt-10">
                     <FaGithub size="25px" className="cursor-pointer" />
                     <FaFacebookSquare size="25px" className="cursor-pointer" />
                     <FaInstagram size="25px" className="cursor-pointer" />
                     <FaWhatsapp size="25px" className="cursor-pointer" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ExploreCommunity;
