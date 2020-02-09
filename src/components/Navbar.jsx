import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return <React.Fragment>

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">Study-tn React App</a>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                </li>

            </ul>
        </nav>
    </React.Fragment>;
}

export default Navbar;  