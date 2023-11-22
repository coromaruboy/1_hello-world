import styled from "@emotion/styled";
import React from "react";

// style定義
const AppWrapper = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HelloWorld = styled.p`
  font-size: 2rem;
  color: blur;
`

const App = () => {
  return (
    <AppWrapper>
      <HelloWorld>Hello World</HelloWorld>
    </AppWrapper>
  )
}

export default App;