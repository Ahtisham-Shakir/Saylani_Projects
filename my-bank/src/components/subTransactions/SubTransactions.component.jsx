import React from "react";
import { useGlobalContext } from "../../context";

const SubTransactions = () => {
    const {transactionList} = useGlobalContext();
    return (
        <div className="container">
            <h4>Transactions</h4>
            <hr />
            <div className="btn-container">
                <button className="btn btn-secondary">View All Transactions</button>
            </div>
            <hr />
            <div className="info">
                <h2>{transactionList.length}</h2>
                <h2>Transactions</h2>
            </div>
        </div>
    )
}

export default SubTransactions;