---
to: src/contextComponents/<%= name %>/index.tsx
---

import React from "react";
import styled from "styled-components";

const <%= name %>Container = styled.div`
  display: flex;
`;

interface <%= name %>Props {
  input?: string;
}


const <%= name %>: React.FC< <%= name %>Props > = ({
  input = "Test"
}) => {
  
  return (
    <<%= name %>Container>
      <%= name %>
      {input}
    </<%= name %>Container>
  )
};

export default <%= name %>;
