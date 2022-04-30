import React, { useContext,useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({children})=>{

    const [accountsList, setAccountsList] = useState([]);
    const [transactionList, setTransactionList] = useState([]);

    return <AppContext.Provider value={{
        accountsList,
        transactionList,
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = ()=>{
   return useContext(AppContext);
}

export default AppProvider;