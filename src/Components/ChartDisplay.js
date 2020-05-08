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
  margin: 0 auto;
  width: 96vw;
  height: 50vh;
  background-color: #f9f9f9;
  border-radius: 20px;
  margin-bottom: 1em;
  -webkit-box-shadow: 4px 4px 12px -3px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 4px 4px 12px -3px rgba(0, 0, 0, 0.63);
  box-shadow: 4px 4px 12px -3px rgba(0, 0, 0, 0.63);

  @media (min-width: 768px) {
    width: 70vw;
  }
`;
