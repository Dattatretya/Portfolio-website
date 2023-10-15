import { createContext, useContext, useReducer } from "react";
import {reducer} from './reducer';

const AppContext = createContext();

const initialState = {
    name:" ",
    image: "",
};



const AppProvider = ({children}) => {


    const updateHomePage = () => {
        return dispatch(
            {
            type: "HOME_UPDATE",
            payload: {
                name:"Dattatreya's Portfolio",
                image: "./images/hero.png",
            }
            })
    }
    
    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload: {
                    name:"Dattatreya Sengupta",
                    image: "./images/datta.jpg",
                }
    
            }
        )
    }


    const [state, dispatch] = useReducer(reducer, initialState)

    return(
    <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>
        {children}
    </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext};