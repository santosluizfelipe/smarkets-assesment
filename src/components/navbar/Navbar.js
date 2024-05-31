import React from 'react';
import { NavbarWrapper, Logo } from './Navbar.style';
import SmarketsLogo from '../../images/Smarkets-logo.png'

function Navbar() {
    return (
        <NavbarWrapper>
            <Logo>
                <img src={SmarketsLogo} alt="Logo" />
            </Logo>
        </NavbarWrapper>
    );
}

export default Navbar;
