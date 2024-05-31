import styled from 'styled-components';
import theme from '../../themes/themes';

export const NavbarWrapper = styled.div`
    position: fixed;
    height: 4rem;
    width: 100%;
    background-color: ${theme.lightBackground};
    display: flex;
    align-items: center;
    padding: 0 20px;
`;

export const Logo = styled.div`
    img {
        height: 2rem;
        width: auto;
    }
`;
