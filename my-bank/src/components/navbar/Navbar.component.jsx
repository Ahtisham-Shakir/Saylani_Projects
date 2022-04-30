import React, { useState } from "react";
import './Navbar.styles.css';

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
                <a id="logo" href="/">My Bank</a>
                <ul id="nav-links">
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/">Accounts</a></li>
                    <li><a href="/">Transactions</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;