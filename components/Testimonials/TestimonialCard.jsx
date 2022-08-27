import Image from "next/image";
import React from "react";

const TestimonialCard = ({data}) => {
   return (
      <div className="bg-bgSecondary p-4 w-[95%] md:w-[40%] lg:w-[28%] xl:w-[30%] rounded-md mr-10 mt-5 flex flex-col justify-between">
         <p className="font-Lato">
            {data.comment}
         </p>
         <div className="mt-5">
            <Image 
                src={data.image}
                width="60px"
                height="60px"
                alt="user image"
                className="object-cover rounded-full"
            />
            <h2>{data.name}</h2>
         </div>
      </div>
   );
};

export default TestimonialCard;
