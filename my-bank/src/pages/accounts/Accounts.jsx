import React from "react";
import './Accounts.styles.css';
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table.component";

const Accounts = () => {
    const { accountsList } = useGlobalContext();
    const headings = ['Brach Code', 'Account #', 'Name', 'Date', 'Type', 'Deposit'];

    return (
        <div className="info-container">
            <div className="link-container">
                <Link  to='/' className="btn btn-secondary">back to dashboard</Link>
                <Link to='/accounts/create' className="btn btn-secondary">create account</Link>
            </div>
            <h1>Accounts</h1>
            {accountsList.length === 0 ?
                <div>
                    <hr />
                    <div className="else-container">
                    <h2 className="else-text">You don't have any account</h2>
                    <Link to='/accounts/create' className="btn btn-primary">Create A New Account</Link>
                    </div>
                    <hr />
                </div>
                : <Table list={accountsList} headings={headings} page='accounts' />
            }
        </div>
    )
}

export default Accounts;