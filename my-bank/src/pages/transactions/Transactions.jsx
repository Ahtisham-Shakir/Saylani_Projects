import React from "react";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table.component";

const Transactions = ()=>{
    const {transactionList} = useGlobalContext();
    const headings = ['Transaction ID', 'Time','Date','Account #', 'Type', 'Amount'];
    return (
        <div className="info-container">
            <div className="link-container">
                <Link to='/' className="btn btn-secondary">back to dashboard</Link>
            </div>
            <h1>Transactions</h1>
            {transactionList.length === 0 ?
                <div>
                    <hr />
                    <div className="else-container">
                    <h2 className="else-text">You didn't make a transaction yet</h2>
                    </div>
                    <hr />
                </div>
                : <Table list={transactionList} headings={headings} />
            }
        </div>
    )
}

export default Transactions;