import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export function Charts() {
    ChartJS.defaults.font.family = 'Cairo';
    ChartJS.defaults.font.size = 14;
    ChartJS.defaults.scale.grid.display = false;
    // ChartJS.defaults.


    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          display: true,
          align: "end",
          padding: 10,
        },
        title: {
          display: false,
          text: "Chart.js Bar Chart",
        },
        
      },
    };

    const labels = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];

    const data = {
      labels,
      datasets: [
        {
          label: "مراجعات",
          data: [1, 2, 3, 4, 5, 6, 7],
          backgroundColor: "rgba(174, 150, 90, 1)",
          borderRadius: 4,
        },
        {
          label: "مهام",
          data: [7, 6, 5, 4, 3, 2, 1],
          backgroundColor: "rgba(229, 202, 133, 1)",
          borderRadius: 4,
        },
        {
          label: "مواعيد",
          data: [1, 7, 2, 4, 6, 5, 3],
          backgroundColor: "rgba(174, 140, 90, 1)",
          borderRadius: 4,
        },
      ],
    };
  return <Bar height={100} width={100} options={options} data={data} />;
}
