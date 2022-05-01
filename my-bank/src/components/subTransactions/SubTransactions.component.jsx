import React from "react";
import { useGlobalContext } from "../../context";
import {Link} from 'react-router-dom';

const SubTransactions = () => {
    const {transactionList} = useGlobalContext();
    return (
        <div className="container">
            <h4>Transactions</h4>
            <hr />
            <div className="btn-container">
                <Link to='/transactions' className="btn btn-secondary">View All Transactions</Link>
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