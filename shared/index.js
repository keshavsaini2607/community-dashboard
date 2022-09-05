import {createContext, useContext, useReducer} from 'react';
import {ActionTypes} from "./constants";

const Store = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.SET_HERO:
            return {
                ...state,
                heroText: {
                    title: action.payload.heroTitle,
                    description: action.payload.heroDescription,
                    bgColor: action.payload.heroBg
                }
            }

        case ActionTypes.SET_HERO_IMAGE:
            return {
                ...state,
                heroImage: action.payload
            }

        case ActionTypes.SET_FEATURED:
            return {
                ...state,
                featured: action.payload
            }

        default:
            return state;
    }
}

export const useStore = () => useContext(Store);

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        heroText: {
            title: "Coder Community",
            description: "Welcome to coder community. You might be learning from any place, company or resource, we are here to help you. Post any of your doubt and there are other fellow coders along with our team to solve your doubts.",
            bgColor: "#E3B799"
        },
        heroImage: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=800",
        featured: [
            {
                id: "1",
                image: "/assets/js.jpeg",
                name: "Javascript Community",
                description: `Learn and help from each other. It doesn't matter from where you are learning, you can ask your doubts here. We all are here to help`,
            },
            {
                id: "2",
                image: "/assets/py.jpeg",
                name: "Pyhton Community",
                description: `Learn and help from each other. It doesn't matter from where you are learning, you can ask your doubts here. We all are here to help`,
            },
            {
                id: "3",
                image: "/assets/java.jpeg",
                name: "Java Community",
                description: `Learn and help from each other. It doesn't matter from where you are learning, you can ask your doubts here. We all are here to help`,
            },
        ]
    });

    return (
        <Store.Provider value={[state, dispatch]}>
            {children}
        </Store.Provider>
    )
}