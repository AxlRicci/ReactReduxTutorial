import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke' Times</a>
                <ul className='right'>
                    <li><NavLink to='/'>Home</NavLink></li> {/* the link tag interupts the normal server request for the page and uses react to route to select correct component  */}
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);


// The Link tag interupts the normal server request for the page and uses react router to load in correct component
// The NavLink tag works the same as the link tag but automatically adds class "active" that can be used to style the active page.