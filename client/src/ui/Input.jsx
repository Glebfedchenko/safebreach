import styled from 'styled-components';

export const Input = styled.input`
  border: 0;
  border-radius: 3px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 1001px) {
    top: 45%;
  }
`;
