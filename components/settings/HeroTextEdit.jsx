import React, {useEffect, useState} from "react";
import {useStore} from "../../shared";
import {ActionTypes} from "../../shared/constants";

const HeroTextEdit = ({ setEditMode }) => {
    const [state, dispatch] = useStore();
    const { heroText } = state;
    const [heroTitle, setHeroTitle] = useState("");
    const [heroDescription, setHeroDescription] = useState("");
    const [heroBg, setHeroBg] = useState("");

    useEffect(() => {
        let attached = true;
        if(attached) {
            setHeroTitle(heroText.title);
            setHeroDescription(heroText.description);
            setHeroBg(heroText.bgColor);
        }
        return() => {
            attached = false;
        }
    },[])

    const submit = () => {
        let obj = {
            heroTitle,
            heroDescription,
            heroBg
        }
        console.log(obj);
        dispatch({
            type: ActionTypes.SET_HERO,
            payload: obj
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
            <label className="text-gray-500">Background</label>
            <input value={heroBg} type="color" onChange={(e) => setHeroBg(e.target.value)} />
         </span>
         <span className="flex flex-col mt-5">
            <label className="text-gray-500">Dash Heading</label>
            <input
               placeholder="New Heading"
               className="px-2 py-3 bg-background"
               value={heroTitle}
               onChange={(e) => setHeroTitle(e.target.value)}
            />
         </span>

         <span className="flex flex-col mt-5">
            <label className="text-gray-500">Dash Description</label>
            <textarea
               placeholder="New Heading"
               className="px-2 py-3 bg-background"
               value={heroDescription}
               onChange={(e) => setHeroDescription(e.target.value)}
               cols={10}
            />
         </span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-10" onClick={submit}>Submit</button>
      </div>
   );
};

export default HeroTextEdit;
