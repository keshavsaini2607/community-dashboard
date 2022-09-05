import React from "react";
import {useStore} from "../../shared";
import CommunityTile from "../Community/CommunityTile";
import {AiFillDelete} from 'react-icons/ai';
import {ActionTypes} from "../../shared/constants";

const HeroCommunities = ({setEditMode}) => {
    const [state, dispatch] = useStore();
    const { featured } = state;

    const removeFeatured = (commId) => {
        const filtered = featured.filter((item) => item.id !== commId);
        dispatch({
            type: ActionTypes.SET_FEATURED,
            payload: filtered
        })
    }

    return (
        <div className="flex flex-col">
            <span
                className="text-gray-900 cursor-pointer mb-5 text-primary"
                onClick={() => setEditMode(null)}
            >
            {"< Go Back"}
         </span>
            <span className="text-lg">Featured Communities</span>
            <div>
                {
                    featured.map((featuredCard) => (
                        <div key={featuredCard.id} className="flex items-center justify-between">
                            <CommunityTile  data={featuredCard} pg="half" edit={true} />
                            <AiFillDelete size={"25px"} className="cursor-pointer" onClick={() => removeFeatured(featuredCard.id)} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HeroCommunities;