import styled from 'styled-components';
import theme from '../../themes/themes';

export const breakpoints = {
  desktop: '900px',
  tablet: '899px',
  smartphone: '576px',
};

export const CardWrapper = styled.div`
  margin: 1.5rem;
  background-color: ${theme.cardBackground};
  border-radius: 1px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  position: relative;
  margin-bottom: 1.5rem;

  @media (min-width: ${breakpoints.desktop}) {
    width: 280px;
    height: 130px;
    margin: 0rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 320px;
    height: 130px;
    margin: 0rem;
  }

  @media (max-width: ${breakpoints.smartphone}) {
    width: 380px;
    height: 105px;
    margin-bottom: 0.25rem;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  word-wrap: break-word;
  color: ${theme.text};
  font-size: 18px;
  font-family: Arial, sans-serif;

  @media (max-width: ${breakpoints.smartphone}) {
    font-size: 14px;
  }
`;

export const Date = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 11px;
  color: ${theme.gray};
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: ${breakpoints.smartphone}) {
  }
`;

export const Value = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: ${theme.textYellow};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 600;

  @media (max-width: ${breakpoints.smartphone}) {
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  justify-content: flex-start;
  width: 50%;



`;

export const GreenButton = styled.button`
  border: none;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${theme.text};
  background-color: ${theme.green};
  transition: background-color 0.3s ease-in-out;
  

  &:hover {
    background-color: ${theme.hoverGreen} !important;
    cursor: pointer; 
  }


  
  @media (min-width: ${breakpoints.desktop}) {
    width: 2rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 2rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  @media (max-width: ${breakpoints.smartphone}) {
    width: 2rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;


export const BlueButton = styled.button`
  border: none;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${theme.text};
  background-color: ${theme.blue};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.hoverBlue} !important;
    cursor: pointer; 
  }


  
  @media (min-width: ${breakpoints.desktop}) {
    width: 2rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 2rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  @media (max-width: ${breakpoints.smartphone}) {
    width: 2rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;


