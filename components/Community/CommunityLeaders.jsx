import Image from "next/image";
import React from "react";
import { peoples } from "../../utils/constants";

const CommunityLeaders = () => {
   return (
      <div className="flex space-x-3 mt-3">
         {peoples.map((person) => (
            <div key={person.id}>
               <Image
                  src={person.image}
                  height="40px"
                  width="40px"
                  alt="person image"
                  className="object-cover rounded-full"
               />
            </div>
         ))}
         <div className="w-[40px] h-[40px] rounded-full bg-secondary text-xs flex items-center justify-center font-bold">
            +256
         </div>
      </div>
   );
};

export default CommunityLeaders;
