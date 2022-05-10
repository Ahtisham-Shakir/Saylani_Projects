import React, { useState } from "react";
import './Navbar.styles.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [time, setTime] = useState(new Date().toString().slice(0, 24));

    // Interval for timer
    setInterval(() => {
        setTime(new Date().toString().slice(0, 24));
    }, 1000);

    return (
        <header>
            <div id="timer">{time}</div>
            <nav id="navbar">
                <Link id="logo" to="/">My Bank</Link>
                <ul id="nav-links">
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/accounts">Accounts</Link></li>
                    <li><Link to="/transactions">Transactions</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;