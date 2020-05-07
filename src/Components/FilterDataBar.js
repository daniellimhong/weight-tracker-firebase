import React, { useState } from "react";
import styled from "styled-components";

const FilterDataBar = (props) => {
  const {isAdd, setIsAdd} = props;

  return (
    <Bar>
      {/* <SubBar> */}
          {/* Post-Mvp - filtering data by month or year */}
        {/* <FilterButton>Year</FilterButton>
        <FilterButton></FilterButton>
        <FilterButton></FilterButton> */}
        <AddLogButton onClick={() => {
            setIsAdd(!isAdd)
            }}>Add Log</AddLogButton>
      {/* </SubBar> */}
    </Bar>
  );
};
export default FilterDataBar;

const Bar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
//   border: 1px solid black;
`;

const SubBar = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

// const FilterButton = styled.button``;

const AddLogButton = styled.button``;
