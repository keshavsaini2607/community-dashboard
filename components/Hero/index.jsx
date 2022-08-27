import Image from "next/image";
import React from "react";
import { communities } from "../../utils/constants";
import CommunityLeaders from "../Community/CommunityLeaders";
import CommunityTile from "../Community/CommunityTile";
import {AiOutlineCode} from 'react-icons/ai';

const Hero = () => {
   return (
      <div>
         <div className="hidden w-[30%] bg-secondary p-10 lg:flex justify-center flex-col items-center h-[80vh] rounded-3xl absolute -top-[5%] -left-[3%] -z-50 ">
            <h1 className="font-Aboreto pl-4 lg:text-3xl lg:mt-8 xl:text-5xl">Coder Community</h1>
            <p className="p-6 font-Lato">
               Welcome to coder community. You might be learning from any place,
               company or resource, we are here to help you. Post any of your
               doubt and there are other fellow coders along with our team to
               solve your doubts.
            </p>
            <div className="p-4 bg-background absolute -bottom-5 rounded-md flex items-center space-x-5 shadow-md">
            <AiOutlineCode size="30px" />
            <p>Coders Home</p>
            </div>
         </div>
         <div className="w-[100%] mt-5 flex flex-col md:flex-row lg-h[100vh]">
            <div className="w-[100%] px-10 lg:w-[70%] lg:ml-[35vw] flex justify-center flex-col items-center md:items-start md:px-10 lg:px-0">
               <h1 className="text-2xl lg:text-3xl mb-5">Top Communities</h1>
               <div className="mt-5 w-[100%] pr-10 lg:mt-0 flex flex-wrap justify-between">
                  {communities.map((community) => (
                     <CommunityTile key={community.id} data={community} pg="half" />
                  ))}
               </div>
               <button className="bg-bgSecondary px-8 py-2 rounded-md hover:bg-textPrimary hover:text-white">Join the community now</button>
            </div>
            
         </div>
         <div className="px-5 mt-10">
            <h1>Community Members</h1>
            <CommunityLeaders />
         </div>
      </div>
   );
};

export default Hero;

/*

<div className="w-[100%] lg:w-[70%] lg:ml-[35vw] flex justify-center flex-col items-center md:items-start md:px-10 lg:px-0">
               <h1 className="text-2xl lg:text-3xl">Top Communities</h1>
               <div className="mt-5 w-[66%] lg:mt-0">
                  {communities.map((community) => (
                     <CommunityTile key={community.id} data={community} />
                  ))}
                  <p className="text-primary border-b-[1px] border-b-primary w-max cursor-pointer">
                     Explore All The Communities
                  </p>
               </div>
            </div>
*/