import styled, { isStyledComponent } from "styled-components";
import theme from "../../themes/themes";

export const breakpoints = {
  desktop: '900px',
  tablet: '899px',
  smartphone: '576px',
};

export const GameButton = styled.button`
  width: 8rem;
  height: 2rem;
  background-color: ${theme.green};
  border-radius: 5px;
  border-color: ${theme.green};
  color: ${theme.text};
  align-items: center;
  
  font-family: Arial, Helvetica, sans-serif;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: none;


  &:hover {
    background-color: ${theme.hoverGreen} !important;
    cursor: pointer; 
  }

  @media (max-width: ${breakpoints.smartphone}) {
    width: 16rem;
  }
`

export const UnselectedGameButton = styled.button`
  width: 8rem;
  height: 2rem;
  background-color: ${theme.cardBackground};
  border-radius: 5px;
  color: ${theme.text};
  align-items: center;

  font-family: Arial, Helvetica, sans-serif;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: none;


  &:hover {
    cursor: pointer; 
  }

  @media (max-width: ${breakpoints.smartphone}) {
    width: 16rem;
  }
`