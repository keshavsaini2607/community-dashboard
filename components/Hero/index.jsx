import Image from "next/image";
import React from "react";
import { communities } from "../../utils/constants";
import CommunityLeaders from "../Community/CommunityLeaders";
import CommunityTile from "../Community/CommunityTile";
import {FaGithub, FaFacebookSquare, FaInstagram, FaWhatsapp} from 'react-icons/fa';

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
         </div>
         <div className="w-[100%] mt-5 flex flex-col md:flex-row">
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
            <div className="w-[90%] lg:w-[50%] mx-auto h-[80vh] bg-background rounded-l-xl p-2 my-10 lg:m-0">
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
         <div className="px-5">
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