import styled, { css } from "styled-components";

const BoxWithStyledComponents = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;

  ${({ $isBlack }) => css`
    background-color: ${$isBlack ? "black" : "green"};
  `}

  &:hover {
    background-color: red;
  }
`;

export default BoxWithStyledComponents;