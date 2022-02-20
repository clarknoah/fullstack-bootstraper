import React from "react";
import styled from "styled-components";

const TestContainer = styled.div`
  display: flex;
`;

interface TestProps {
  input?: string;
}


const Test: React.FC< TestProps > = ({
  input = "Testing things"
}) => {
  
  return (
    <TestContainer>
      Test {input}
    </TestContainer>
  )
};

export default Test;
