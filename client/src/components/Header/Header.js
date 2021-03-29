import React, { useState } from 'react';
import "./styles.css"

function Header() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="./">Andrew Ehrman</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded={open} aria-label="Toggle navigation"
                onClick={() => setOpen(!open)}>

                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <a className="nav-link" href="./Contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./About">About</a>
                    </li>
                </ul>
            </div>
        </nav>);
}


export default Header;