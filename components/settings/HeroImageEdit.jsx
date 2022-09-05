import React, {useState} from "react";
import {useStore} from "../../shared";
import {ActionTypes} from "../../shared/constants";

const HeroImageEdit = ({setEditMode}) => {
    const [imgUrl, setImgUrl] = useState("");
    const [state, dispatch] = useStore();
    const submit = () => {
        dispatch({
            type: ActionTypes.SET_HERO_IMAGE,
            payload: imgUrl
        })
    }
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
         </span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-10" onClick={submit}>Submit</button>
      </div>
   );
};

export default HeroImageEdit;
