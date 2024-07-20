// components/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ students }) => {
  const studentMikrotik = students?.filter(
    (student) => student.course_id == 17
  ).length;
  const studentCisco = students?.filter(
    (student) => student.course_id == 18
  ).length;
  const studentWebsite = students?.filter(
    (student) => student.course_id == 19
  ).length;
  const data = {
    labels: ["Mikrotik", "Cisco", "Website"],
    datasets: [
      {
        label: "Student",
        data: [studentMikrotik, studentCisco, studentWebsite],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Student Data",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
