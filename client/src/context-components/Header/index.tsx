import React from "react";
import styled from "styled-components";
import { useNav } from "context/navContext";

const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 50px;
  background-color: grey;
  padding: 5px;
`;

interface HeaderProps {
  input?: string;
}


const Header: React.FC< HeaderProps > = ({
  input = "Test"
}) => {
  const { showHeader } = useNav();
  const display = {
    "display": showHeader ? "flex" : "hidden"
  }
  return (
    <HeaderContainer style={display}>
      Header
      {input}
    </HeaderContainer>
  )
};

export default Header;
