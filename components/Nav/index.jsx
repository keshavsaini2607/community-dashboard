import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
   const router = useRouter();
   console.log(router.pathname);

   return (
      <nav>
         <div className="w-[90%] mx-auto p-3 border-b-[1px] border-b-border flex items-center justify-between z-50">
            <Image
               src="/assets/pensil_logo.svg"
               width="100px"
               height="40px"
               alt="logo"
            />
            <ul className="list hidden items-center space-x-8 md:flex">
               <Link href="/">
                  <li
                     className={`cursor-pointer  ${
                        router.pathname === "/"
                           ? "text-black font-bold"
                           : "text-gray-400"
                     }`}
                  >
                     Home
                  </li>
               </Link>
               <Link href="/explore">
                  <li
                     className={`cursor-pointer  ${
                        router.pathname.includes("explore")
                           ? "text-black font-bold"
                           : "text-gray-400"
                     }`}
                  >
                     Explore Groups
                  </li>
               </Link>
               <Link href="/events">
                  <li
                     className={`cursor-pointer  ${
                        router.pathname === "/events"
                           ? "text-black font-bold"
                           : "text-gray-400"
                     }`}
                  >
                     Events
                  </li>
               </Link>
            </ul>
            <div className="hidden md:block">
               <button className=" px-6 py-1 rounded-full bg-bgSecondary text-textPrimary transition-all">
                  Login
               </button>
            </div>
            <div className="block md:hidden">
               <HiMenuAlt3 size="30px" />
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
