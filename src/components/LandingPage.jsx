import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: white;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  max-width: 500px;
  line-height: 1.5;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  
  &:hover {
    background: #333;
  }
`;

export function LandingPage() {
  const handleStartVisualization = () => {
    window.location.href = '/visualizer';
  };

  return (
    <Container>
      <Title>SortViz</Title>
      <Subtitle>
        A minimal sorting algorithm visualizer. 
        Watch how different algorithms sort data through interactive animations.
      </Subtitle>
      <Button onClick={handleStartVisualization}>
        Start Visualizing
      </Button>
    </Container>
  );
}
