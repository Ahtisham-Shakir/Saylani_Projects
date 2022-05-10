import React, { useContext, useEffect, useState } from "react";

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
const AppProvider = ({ children }) => {

  const [accountsList, setAccountsList] = useState(getAccounts());
  const [transactionList, setTransactionList] = useState(getTransactions());
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });


  // Every time accountsList or transactionList changes this function will run
  useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify(accountsList));
    localStorage.setItem('transactions', JSON.stringify(transactionList));
  }, [accountsList, transactionList]);

  // Function to show alert
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  }

  // Function to for validation
  const validate = (objToValidate) => {
    const { branchCode, accountNumber, cnic, deposit } = objToValidate;
    let flag = true;

    // If any of field is empty then alert will be shown
    if (true) {
      for (const key in objToValidate) {
        if (objToValidate[key] === '') {
          showAlert(true, 'danger', 'Please fill all the fields');
          flag = false;
          return false;
        }

      }
    }

    if (cnic.length !== 13) {
      showAlert(true, 'danger', 'Incorrect CNIC Number');
      flag = false;
      return false;
    }

    if (branchCode > 99) {
      showAlert(true, 'danger', 'Branch Code should be 1 - 99');
      flag = false;
      return false;
    }

    if (accountNumber.length !== 9) {
      showAlert(true, 'danger', 'Account Number length should be 9');
      flag = false;
      return false;
    }

    if (deposit < 500) {
      showAlert(true, 'danger', 'Minimum deposit is 500');
      flag = false;
      return false;
    }

    // If all above conditions are true then function return true
    if (flag) {
      return true;
    }

  }


  return <AppContext.Provider value={{
    accountsList,
    setAccountsList,
    transactionList,
    setTransactionList,
    alert,
    showAlert,
    validate,
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export default AppProvider;