"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const trendData = [
  { month: "January", Weight: 51, Height: 180, BMI: 6.2 },
  { month: "February", Weight: 52, Height: 180, BMI: 16.3 },
  { month: "March", Weight: 49, Height: 180, BMI: 18.9 },
  { month: "April", Weight: 51, Height: 180, BMI: 21 },
  { month: "May", Weight: 61, Height: 180, BMI: 31 },
  { month: "June", Weight: 65, Height: 180, BMI: 31 },
  { month: "July", Weight: 60, Height: 180, BMI: 31 },
  { month: "August", Weight: 68, Height: 180, BMI: 31 },
  { month: "September", Weight: 75, Height: 180, BMI: 31 },
  { month: "October", Weight: 72, Height: 180, BMI: 31 },
  { month: "November", Weight: 78, Height: 180, BMI: 31 },
  { month: "December", Weight: 87, Height: 180, BMI: 31 },
  
];

for(let i=0; i < 12; i++){
    trendData[i].BMI = trendData[i].Weight / ((trendData[i].Height/100)**2)
}

function LineChart() {
  const data = {
    labels: trendData.map((data) => data.month),
    datasets: [
      {
        label: "BMI",
        data: trendData.map((data) => data.BMI),
        borderColor: "#cb0c9f",
        borderWidth: 3,
        pointBorderColor: "#cb0c9f",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: false,
          text: "Sales",
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
        min: 10,
        max: 30,
      },
      x: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: false,
          text: "Month",
          padding: {
            top: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
      },
    },
  };

  return (
    <div className="overflow-y-hidden">
      
      <div
        style={{
          width: "1600px",
          height: "500px",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default LineChart;