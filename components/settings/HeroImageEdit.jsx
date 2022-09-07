import React, { useEffect, useState } from "react";
import { useStore } from "../../shared";
import { ActionTypes } from "../../shared/constants";

const HeroImageEdit = ({ setEditMode }) => {
   const [imgUrl, setImgUrl] = useState("");
   const [localImage, setLocalImage] = useState(null);
   const [state, dispatch] = useStore();

   const submit = () => {
      dispatch({
         type: ActionTypes.SET_HERO_IMAGE,
         payload: imgUrl,
      });
   };

   useEffect(() => {
      let attached = true;
      if (attached && localImage) {
         let url = URL.createObjectURL(localImage);
         dispatch({
            type: ActionTypes.SET_HERO_IMAGE,
            payload: url,
         });
         console.log({ state });
         return;
      }
      return () => {
         attached = false;
      };
   }, [localImage]);

   return (
      <div>
         <span
            className="text-gray-900 cursor-pointer mb-5 text-primary"
            onClick={() => setEditMode(null)}
         >
            {"< Go Back"}
         </span>
         <span className="flex flex-col mt-5">
            <label className="text-gray-500">Image Url</label>
            <input
               placeholder="New image url"
               className="px-2 py-3 bg-background"
               value={imgUrl}
               onChange={(e) => setImgUrl(e.target.value)}
            />
            <input
               type="file"
               placeholder="Upload Image"
               onChange={(e) => setLocalImage(e.target.files[0])}
               className="hidden"
               id="upload"
            />
            <label className="text-gray-500 mb-1 mt-5">Or</label>
            <label className="text-gray-500 mb-1 mt-5">Local Upload</label>
            <label
               htmlFor="upload"
               className="bg-blue-500 w-max text-white rounded-md px-5 py-2 cursor-pointer hover:bg-blue-400"
            >
               Upload Local Image
            </label>
         </span>
         <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-md mt-10 ${!imgUrl && 'bg-gray-400'}`}
            onClick={submit}
            disabled={!imgUrl}
         >
            Submit
         </button>
      </div>
   );
};

export default HeroImageEdit;
