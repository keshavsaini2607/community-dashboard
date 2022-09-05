import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useWindowScroll } from "../../utils/hooks";

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
      <div
         className={`w-full sticky top-0 left-0 z-20 border-b-[1px] border-b-overlay  md:mx-auto  ${
            windowScroll > 20
               ? "bg-white md:w-[100%] px-10 shadow-md"
               : "md:w-[90%]"
         }`}
      >
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
            <div className="hidden md:flex items-center space-x-4">
               <Link href="/settings">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="#0445FE"
                     className="w-6 h-6 cursor-pointer"
                  >
                     <path
                        fillRule="evenodd"
                        d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                        clipRule="evenodd"
                     />
                  </svg>
               </Link>

               <button className=" px-6 py-1 rounded-full bg-bgSecondary text-textPrimary transition-all">
                  Login
               </button>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
