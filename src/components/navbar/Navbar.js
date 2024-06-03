import React from 'react';
import { NavbarWrapper, Logo, IconWrapper } from './Navbar.style';
import SmarketsLogo from '../../images/Smarkets-logo.png'
import { CurrencyPound } from '@mui/icons-material';

function Navbar({ balance }) {
    return (
        <NavbarWrapper>
            <Logo>
                <img src={SmarketsLogo} alt="Logo" />
            </Logo>
            <IconWrapper>
                <CurrencyPound style={{ fontSize: '15px' }}/>
                <p>{balance}</p>
            </IconWrapper>
        </NavbarWrapper>
    );
}

export default Navbar;
