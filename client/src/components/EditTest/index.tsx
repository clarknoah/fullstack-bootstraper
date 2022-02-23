import React from "react";
import styled from "styled-components";
import {useTest} from "context/TestContext";
const EditTestContainer = styled.div`
  display: flex;
`;

interface EditTestProps {
  input?: string;
}


const EditTest: React.FC< EditTestProps > = ({
  input = "Test"
}) => {
  const test = useTest();
  return (
    <EditTestContainer>
      test Value: {test.field}
      <input value={test.field} onChange={(e)=>test.action(e.target.value)}/>
    </EditTestContainer>
  )
};

export default EditTest;
