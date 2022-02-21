import React from "react";
import styled from "styled-components";
import { useAuth } from "context/authContext";
import { Outlet, Link, useParams } from "react-router-dom";
import { routeList } from "routes";

const HomeContainer = styled.div`
  display: flex;
`;

interface HomeProps {
  input?: string;
  children?: React.ReactNode;
}


const Home: React.FC< HomeProps > = ({
  input = "Test",
  children = null
}) => {
  const auth = useAuth();
  return (
    <HomeContainer>
      <h1>Home Page</h1>
     {auth.authorized ? (
      <div>
        Logged In User: {auth.user}
      </div>
       ) :
       (
        <div>
          Please Login
        </div>
         )
       }
       <Outlet/>
    </HomeContainer>
  )
};

export default Home;
