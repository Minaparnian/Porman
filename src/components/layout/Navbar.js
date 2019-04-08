import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="container">
                    <div class="nav-wrapper">
                        <Link to='/'>Proman</Link>
                        <SignedInLinks />
                        <SignedOutLinks />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;