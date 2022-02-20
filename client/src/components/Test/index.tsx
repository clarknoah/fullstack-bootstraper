import React from "react";
import styled from "styled-components";
import { Outlet, Link, useParams } from "react-router-dom";

const TestContainer = styled.div`
  display: block;
`;

interface TestProps {
  input?: string;
  children?:React.ReactNode;

}


const Test: React.FC< TestProps > = ({
  input = "Testing things",
  children
}) => {
  
  return (
    <TestContainer>
      <h3>
        Test: {input}
      </h3>
      <div>
        <Outlet/>
      </div>
    </TestContainer>
  )
};

export default Test;
