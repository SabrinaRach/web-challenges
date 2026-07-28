import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Container>
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
