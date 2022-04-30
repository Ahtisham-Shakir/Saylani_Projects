import React from "react";
import './SubAccounts.styles.css';
import { useGlobalContext } from "../../context";


const SubAccounts = () => {
    const {accountsList} = useGlobalContext();

    return (
        <div className="container">
            <h4>Accounts</h4>
            <hr />
            <div className="btn-container">
                <button className="btn btn-primary">Add New Accounts</button>
                <button className="btn btn-secondary">View All Accounts</button>
            </div>
            <hr />
            <div className="info">
                <h2>{accountsList.length}</h2>
                <h2>Accounts</h2>
            </div>
        </div>
    )
}

export default SubAccounts;