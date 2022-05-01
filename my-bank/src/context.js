import React, { useContext,useEffect,useState } from "react";

const AppContext = React.createContext();

// Function that get accounts from local storage and set the list state on reload
const getAccounts = () => {
    const items = localStorage.getItem('accounts');
    if (items) {
      return JSON.parse(localStorage.getItem('accounts'));
    }
    else {
      return [];
    }
  }


// Function that get accounts from local storage and set the list state on reload
const getTransactions = () => {
    const items = localStorage.getItem('transactions');
    if (items) {
      return JSON.parse(localStorage.getItem('transactions'));
    }
    else {
      return [];
    }
  }
const AppProvider = ({children})=>{

    const [accountsList, setAccountsList] = useState(getAccounts());
    const [transactionList, setTransactionList] = useState(getTransactions());
    const [alert,setAlert] = useState({show:true, type:'danger',msg:'This is alert'});


    // Every time accountsList or transactionList changes this function will run
    useEffect(()=>{
        localStorage.setItem('accounts',JSON.stringify(accountsList));
        localStorage.setItem('transactions',JSON.stringify(transactionList));
    },[accountsList,transactionList]);

    // Function to show alert
    const showAlert= (show=false,type='',msg='')=>{
      setAlert({show,type,msg});
    }

    return <AppContext.Provider value={{
        accountsList,
        setAccountsList,
        transactionList,
        setTransactionList,
        alert,
        showAlert,
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = ()=>{
   return useContext(AppContext);
}

export default AppProvider;