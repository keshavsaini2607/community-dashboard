import Image from "next/image";
import React from "react";

const CommunityTile = ({data, pg}) => {
   return (
      <div className={`flex items-center space-x-7 my-5 lg:mt-0 hover:bg-bgSecondary cursor-pointer p-4 ${pg=== "full" && 'w-max md:w-1/2 lg:w-1/3'}`}>
         <Image
            src={data.image}
            height="80px"
            width="130px"
            alt="Free Image"
            className="rounded-xl object-cover"
         />
         <div className="w-1/3 lg:w-max">
            <h2 className="font-semibold">{data.name}</h2>
            <p className="text-sm font-Lato lg:w-[130px] xl:w-[200px] md:w-[150px]" id="content">
               {data.description}
            </p>
         </div>
      </div>
   );
};

export default CommunityTile;
