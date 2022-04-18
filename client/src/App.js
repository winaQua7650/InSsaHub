import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Container>
      <BoxOne>
        <Text>Start React</Text>
      </BoxOne>
    </Container>
  );
}

export default App;
