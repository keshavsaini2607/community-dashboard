import Image from "next/image";
import React from "react";

const CommunityTile = ({data}) => {
   return (
      <div className="flex items-center space-x-7 my-5 lg:m-0">
         <Image
            src={data.image}
            height="80px"
            width="130px"
            alt="Free Image"
            className="rounded-xl object-cover"
         />
         <div className="w-1/3">
            <h2 className="font-semibold">{data.name}</h2>
            <p className="text-sm font-Lato lg:w-[130px] xl:w-[200px] md:w-[150px]" id="content">
               {data.description}
            </p>
         </div>
      </div>
   );
};

export default CommunityTile;
