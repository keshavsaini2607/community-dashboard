import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiUpvote } from "react-icons/bi";

const CommunityTile = ({data, pg, edit}) => {
   const [votes, setVotes] = useState(0);

   useEffect(() => {
      let attached = true;

      if(attached) {
         let v = Math.ceil(Math.random() * 100)
         setVotes(v);
      }
   },[])

   return (
      <Link href={`/explore/${data.name}`}>
         <div
            className={`flex items-center space-x-7 my-5 lg:my-7 md:p-4  lg:mt-0 hover:bg-bgSecondary cursor-pointer ${
               pg === "full" && "w-max md:w-1/2 lg:w-1/3"
            }`}
         >
            <Image
               src={data.image}
               height="80px"
               width="130px"
               alt="Free Image"
               className="rounded-xl object-cover"
            />
            <div className="w-1/2 lg:w-max mr-10">
               <h2 className="font-semibold">{data.name}</h2>
               <p
                  className="text-sm font-Lato lg:w-[130px] xl:w-[200px] md:w-[150px]"
                  id="content"
               >
                  {data.description}
               </p>
            </div>
            {
               !edit && (
                    <div className="flex items-center flex-col ml-10">
                       <BiUpvote size="25px" className="cursor-pointer" />
                       <p>{votes}</p>
                    </div>
                )
            }
         </div>
      </Link>
   );
};

export default CommunityTile;
