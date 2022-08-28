import { useRouter } from "next/router";
import React from "react";

const PageDescription = () => {
   const router = useRouter();
   return (
      <div className="p-5 mt-10 bg-background flex flex-col">
         <h1 className="text-3xl text-center md:text-start">👋 Welcome to the Pensil community</h1>
         <p className=" font-Lato text-lg px-10 pt-3 text-center md:text-start">
            {`Makers like you join together in the Pensil community to connect and
            encourage one another, receive answers to critical questions, and
            develop vibrant communities. You'll also get early access to feature
            betas and support from the Pensil team.`}
         </p>
         <div onClick={() => router.push('/events')} className="flex justify-center mt-10 md:justify-end">
            <button className="bg-primary px-4 py-2 rounded-full text-white">Join the conversation now</button>
         </div>
      </div>
   );
};

export default PageDescription;
