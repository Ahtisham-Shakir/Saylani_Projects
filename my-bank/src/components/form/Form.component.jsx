import React, { useState } from "react";
import './Form.styles.css';
import { useGlobalContext } from "../../context";

const Form = () => {
    // States to get values from user
    const [name, setName] = useState('');
    const [cnic, setCnic] = useState('');
    const [branchCode, setBranchCode] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountType, setAccountType] = useState('Choose account Type');
    const [deposit, setDeposit] = useState('');

    // 
    const { accountsList, setAccountsList, transactionList, setTransactionList,showAlert } = useGlobalContext();

    // When user Submit form this function will run
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handlesubmit')
        const date = new Date();
        const registered = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const id = `${date.getTime()}`;
        const newAccount = { branchCode, accountNumber, name, registered ,accountType,deposit};
        setAccountsList([...accountsList, newAccount]);
        const newTransaction = {id,time,registered,accountNumber,type:'credit',deposit};
        setTransactionList([...transactionList,newTransaction]);
        showAlert(true,'success','Your account has been added successfully');

    }

    return (
        <div className="form-container">
            <div className="heading">
                <h1>Enter Account Details Below</h1>
                <p>All fields are required</p>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="form-control">
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-control">
                    <input type="number" placeholder="CNIC Number" value={cnic} onChange={(e) => { setCnic(e.target.value) }} />
                </div>

                <div className="form-control">
                    <input type="number" placeholder="Branch Code (1 - 99)" value={branchCode} onChange={(e) => { setBranchCode(e.target.value) }} />
                </div>
                <div className="form-control">
                    <input type="number" placeholder="Account Number (Length should be 9)" value={accountNumber} onChange={(e) => { setAccountNumber(e.target.value) }} />
                </div>

                <div className="form-control">
                    <select value={accountType} onChange={(e) => { setAccountType(e.target.value) }}>
                        <option value="">Choose Account Type</option>
                        <option value="current">Current</option>
                        <option value="saving">Saving</option>
                    </select>
                </div>
                <div className="form-control">
                    <input type="number" placeholder="Initial Deposite (Minimun 500 Rs.)" value={deposit} onChange={(e) => { setDeposit(e.target.value) }} />
                </div>
                <div className="form-control">

                    <button type="submit" className="btn btn-secondary">Create account</button>
                </div>
            </form>
        </div>
    )
}

export default Form;