import React from "react";
import './Dashboard.styles.css'
import SubAccounts from "../../components/subAccounts/SubAccounts.component";
import SubTransactions from "../../components/subTransactions/SubTransactions.component";

const Dashboard = () => {
    return (
        <div className="section-center">
            <SubAccounts />
            <SubTransactions />
        </div>
    )
}

export default Dashboard;