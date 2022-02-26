import React from "react";
import styled from "styled-components";
import { useNav } from "context/navContext";

const FooterContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 50px;
  background-color: grey;
  padding: 5px;
`;

interface FooterProps {
  input?: string;
}


const Footer: React.FC< FooterProps > = ({
  input = "Test"
}) => {
  const { showFooter } = useNav();
  const display = {
    "display": showFooter ? "flex" : "none"
  }
  return (
    <FooterContainer style={display}>
      Footer
      {input}
    </FooterContainer>
  )
};

export default Footer;
