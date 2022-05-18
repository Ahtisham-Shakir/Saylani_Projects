import React, {createContext, useContext} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const AppContext = createContext();

const AppProvider = ({children})=>{
    const showAlert = (type,msg)=>{
        if(type === 'success'){
            toast.success(msg, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        if(type === 'error'){
            toast.error(msg, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }
return(
    <AppContext.Provider value={{showAlert}}>{children}</AppContext.Provider>
)
}

// Global hook
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {useGlobalContext, AppProvider}