import React from "react";
import styled from "styled-components";

const Log = ({ props }) => {
  const { date, weight, calories, activity, description } = props;
    
  return (
    <LogContainer>
      <SubContainer>
        <Text>{date}</Text>
        <Text>Weight: {weight}</Text>
        <Text>Calories: {calories}</Text>
        {/* activity */}
        {/* description */}
      </SubContainer>
    </LogContainer>
  );
};
export default Log;

const LogContainer = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;

//   border: 1px solid black;
  margin: 10px 0 10px 0;
`;
const SubContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;
//   border: 1px solid red;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Text = styled.p`
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

/**
 * Name button as View Notes
 */
