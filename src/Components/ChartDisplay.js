import React, { useEffect } from "react";
import styled from "styled-components";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";

const ChartDisplay = (props) => {
  const { data } = props; // main data

  let chartLabels = data.map((log) => log.date);
  let chartWeightData = data.map((log) => log.weight);

  return (
    <>
      <GraphContainer>
        <Line
          data={{
            labels: chartLabels,
            datasets: [
              {
                label: "Weight",
                data: chartWeightData,
              },
            ],
          }}
          options={{
            plugins: {
              datalabels: {
                align: "end",
                rotation: 20,
              },
            },
            legend: { display: false },
            title: {
              display: true,
              text: "Daniel's Weight Chart",
              fontSize: 18,
              fontFamily: "Montserrat",
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    suggestedMin: Math.min(...chartWeightData) - 5,
                    suggestedMax: Math.max(...chartWeightData) + 5,
                    stepSize: 2,
                  },
                },
              ],
            },
            maintainAspectRatio: false,
          }}
        />
      </GraphContainer>
    </>
  );
};

export default ChartDisplay;

const GraphContainer = styled.div`
  width: 100vw;
  height: 50vh;
  //   border: 2px solid black;
`;
