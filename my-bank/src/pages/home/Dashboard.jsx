import React from "react";
import './Dashboard.styles.css'
import Navbar from "../../components/navbar/Navbar.component";
import SubAccounts from "../../components/subAccounts/SubAccounts.component";
import SubTransactions from "../../components/subTransactions/SubTransactions.component";

const Dashboard = () => {
    return (
        <>
        <Navbar />
        <div className="section-center">
        <SubAccounts/>  
        <SubTransactions/>  
        </div>
        </>
    )
}

export default Dashboard;