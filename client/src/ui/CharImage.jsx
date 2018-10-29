import styled from 'styled-components';
import { Flex } from './Flex';

export const CharImage = styled(Flex)`
  background: ${props => `url(${props.bg}) no-repeat center center`};
  height: 100%;
  position: relative;
`;
