import styled from 'styled-components';
import theme from '../../themes/themes';

const breakpoints = {
  desktop: '1025px',
  tablet: '1024px',
  smartphone: '576px',
};

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 4rem; 
  left: 0;
  width: 100%;
  height: calc(100% - 4rem); 
  background-color: ${theme.background};
  color: ${theme.text};
  position: relative;
  
  @media (min-width: ${breakpoints.desktop}) {
    padding-bottom: 40%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 70%;
  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  
  gap: 1rem;
  background-color: inherit;

  @media (min-width: ${breakpoints.desktop}) {
    margin-top: 5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 1rem;
  }

  @media (max-width: ${breakpoints.smartphone}) {
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 1rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
  gap: 0.5rem;
  padding: 0;
  margin-top: 1rem;
  max-width: 100%; 
  background-color: inherit;

  @media (-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px; 
  }
`;
