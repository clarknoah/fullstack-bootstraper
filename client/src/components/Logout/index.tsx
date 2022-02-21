import React from "react";
import styled from "styled-components";
import { useAuth } from "context/authContext";

const LogoutContainer = styled.div`
  display: flex;
`;

interface LogoutProps {
  input?: string;
}


const Logout: React.FC< LogoutProps > = ({
  input = "Test"
}) => {
  const auth = useAuth();

  const signout = () =>{
    auth.signout();
  }
  return (
    <LogoutContainer>
      <button onClick={signout}>Sign out</button>
    </LogoutContainer>
  )
};

export default Logout;
