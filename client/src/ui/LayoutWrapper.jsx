import styled from 'styled-components';
import { Flex } from './Flex';
import letters from '../assets/logoletters.png';

export const LayoutWrapper = styled(Flex)`
  background-color: #000;
  background-image: url(${letters});
  background-repeat: no-repeat;
  background-position: 50% 10%;
  background-size: 60%;
  height: 100vh;

  @media (min-width: 1025px) and (max-width: 2560px) {
    background-size: 40%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    background-size: 50%;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    background-size: 75%;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    background-size: 95%;
  }
`;
