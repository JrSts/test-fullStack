"use client";
import { PopulationData } from "@/Model/interfaces";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale, 
  LinearScale,   
  PointElement,  
  LineElement,   
  Title,         
  Tooltip,       
  Legend         
);

export default function PopulationChart(props: PopulationData) {
  const { code, country, iso3, populationCounts } = props;

  if (!populationCounts) return <p>No Information!</p>;

  return (
    <Line
      data={{
        labels: populationCounts.map((item) => item.year),
        datasets: [
          {
            label: `Population of ${country} - ${code}`,
            data: populationCounts.map((item) => item.value),
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      }}

      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Population Over Time',
          },
        },
      }}
    />
  );
}
