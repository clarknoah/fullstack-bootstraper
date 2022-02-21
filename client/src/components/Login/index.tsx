import React from "react";
import styled from "styled-components";
import { useAuth } from "context/authContext";
const LoginContainer = styled.div`
  display: flex;
`;

interface LoginProps {
  input?: string;
}


const Login: React.FC< LoginProps > = ({
  input = "Test"
}) => {
  const auth = useAuth();

  const signin = () =>{
    auth.signin("Sam");
  }
  return (
    <LoginContainer>
      <button onClick={signin}>Login as Sam</button>
    </LoginContainer>
  )
};

export default Login;
