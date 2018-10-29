import styled, { css } from 'styled-components';

const containerProps = css`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justify};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
`;

const itemProps = css`
  order: ${props => props.flexOrder};
  flex-grow: ${props => props.grow};
  flex-shrink: ${props => props.shrink};
  flex-basis: ${props => props.basis};
  align-self: ${props => props.alignSelf};
`;

export const Flex = styled.div`
  box-sizing: border-box;
  ${props => props.fullHeight && 'height: 100%'};
  ${props => props.flex && containerProps};
  ${props => props.item && itemProps};
  border-bottom: ${({ bb }) => bb || null};
  background: ${props => props.bg};
  border-radius: ${props => props.br};
  box-shadow: ${props => props.bsh};
  height: ${props => props.height};
  width: ${props => props.width};
  position: ${props => props.pos};
  background-color: ${props => props.bgc};
  color: ${props => props.color};
  text-align: ${props => props.textAlign};
`;
