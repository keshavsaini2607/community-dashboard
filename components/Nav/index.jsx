import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useWindowScroll} from '../../utils/hooks'

const Navbar = () => {
   let Links = [
      { name: "Home", link: "/" },
      { name: "Explore", link: "/explore" },
      { name: "Events", link: "/events" },
   ];
   let [open, setOpen] = useState(false);
   const router = useRouter();
   const windowScroll = useWindowScroll();

   const isActiveNav = () => {
      let path = router.pathname;
      console.log(path.includes("explore groups"));
      if (path === "/") return "home";
      else return path.slice(1);
   };

   return (
      <div className={`w-full sticky top-0 left-0 z-20 border-b-[1px] border-b-overlay  md:mx-auto  ${windowScroll > 20 ? "bg-white md:w-[100%] px-10 shadow-md" : "md:w-[90%]"}`}>
         <div className="md:flex items-center justify-between py-2 px-7 md:px-0">
            <Image
               src="/assets/pensil_logo.svg"
               width="100px"
               height="40px"
               alt="logo"
            />

            <div
               onClick={() => setOpen(!open)}
               className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
            >
               {open ? (
                  <AiOutlineClose size="25px" className="cursor-pointer" />
               ) : (
                  <HiMenuAlt3 size="25px" className="cursor-pointer" />
               )}
            </div>

            <ul
               className={`md:flex md:items-center bg-white md:pb-0 pb-12 absolute md:static z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open ? "top-10 " : "top-[-490px]"
               }`}
            >
               {Links.map((link) => (
                  <Link key={link.name} href={link.link}>
                     <li
                        className={`md:ml-8 text-md md:my-0 my-7 cursor-pointer flex space-x-5 md:items-center md:space-x-0  md:flex-col items-center  hover:text-gray-900 ${
                           isActiveNav().includes(link.name.toLocaleLowerCase())
                              ? "text-gray-900"
                              : "text-gray-500"
                        } duration-500`}
                     >
                        <p className=" ">{link.name}</p>
                     </li>
                  </Link>
               ))}
            </ul>
            <div className="hidden md:block">
               <button className=" px-6 py-1 rounded-full bg-bgSecondary text-textPrimary transition-all">
                  Login
               </button>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
