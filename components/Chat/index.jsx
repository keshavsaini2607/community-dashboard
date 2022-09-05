import React, { useEffect, useState } from "react";

const Chat = ({ selectedChannel, setSelectedChannel }) => {
   const [message, setMessage] = useState("");
   const [typing, setTyping] = useState(false);

   useEffect(() => {
      setTyping(true);
      setTimeout(() => {
         setTyping(false);
      }, 3000);
   }, [selectedChannel]);

   return (
      <div className="h-full">
         <div className="bg-primary p-4 flex items-center justify-between">
            <h1 className="text-white text-lg">#{selectedChannel}</h1>
            <span
               className="text-white cursor-pointer"
               onClick={() => setSelectedChannel(null)}
            >
               Close Chat
            </span>
         </div>
         <div className="bg-background h-[70vh] relative">
            <div className="p-4 overflow-scroll flex flex-col">
               <div>
                  {typing ? (
                     <div className="flex items-center space-x-4">
                        <div>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-10 h-10"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </div>
                        <span>Typing...</span>
                     </div>
                  ) : (
                     <div className="flex items-center space-x-4">
                        <div>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-10 h-10"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </div>
                        <div className="bg-blue-200 p-3 rounded-md w-[60%]">
                           <span>
                              Welcome to the {selectedChannel} community live
                              chat, We are always happy to help you 😀
                           </span>
                        </div>
                     </div>
                  )}
               </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full border-[1px] border-background">
               <input
                  type="text"
                  placeholder="New Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="p-4 w-[90%]"
               />
               <button className="w-[10%] items-center justify-center bg-primary text-white py-4">
                  Send
               </button>
            </div>
         </div>
      </div>
   );
};

export default Chat;
