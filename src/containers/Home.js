import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 80px;
  text-align: center;
  width: 100%;
  h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
  }
  p {
    color: #999;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <h1>Scratch</h1>
      <p>Scratch</p>
    </HomeContainer>
  );
}
