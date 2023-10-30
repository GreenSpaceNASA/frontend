import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartOptions,
  ChartData,
} from "chart.js";
import { faker } from '@faker-js/faker' 
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

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const rawData = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: -100, max: 1000 })),
    },
  ],
};

export default function ContaminateLevel() {
  return (
    <>
      <div className="pt-10 pl-4 pr-4">
        <Line options={options} data={rawData} />
      </div>
    </>
  );
}
