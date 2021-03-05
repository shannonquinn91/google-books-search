import React from 'react';
import './nav.css';


function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href='#'>(React) Google Book Search</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Search</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Saved</a>
                </li>
            </ul>
            </div>

        </nav>
    )
}

export default Nav;

