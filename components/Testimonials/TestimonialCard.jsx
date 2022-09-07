import Image from "next/image";
import React from "react";
import {ImQuotesLeft} from 'react-icons/im';

const TestimonialCard = ({data}) => {
   return (
      <div className="bg-bgSecondary p-4 w-[100%] md:w-[40%] lg:w-[28%] xl:w-[30%] rounded-md md:mr-10 mt-5 flex flex-col justify-between">
         <ImQuotesLeft size="30px" className="text-white mb-3" />
          <p className="font-Lato text-primary">
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
