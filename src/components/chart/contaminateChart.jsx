import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "ENDANGER SPECIES",
    },
  },
};

const labels = ["January", "February", "March", "April", "", "May"];
export const rawData = {
  labels,
  datasets: [
    {
      data: labels.map(() => datatype.number({ min: -100, max: 1000 })),
    },
  ],
};

export default function ContaminateLevel() {
  return (
    <>
      <div>
        {/* <canvas id="myChart"></canvas> */}
        <Line options={options} data={rawData} />
      </div>
    </>
  );
}
