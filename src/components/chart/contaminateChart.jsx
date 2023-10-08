import { Chart } from "chart.js/auto";
import cubejs from "@cubejs-client/core";
import {
  LinearScaleBase,
  LineController,
  LineElement,
  LineProps,
  CategoryScale,
  PointElement,
} from "chart.js";
import { data } from "autoprefixer";


const apiurl = "";
const chart = new Chart({
  type: "line",
  data: data,
  option: {},
});

(async function MockData() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
  new Chart(
    document.getElementById('myChart'),
    // {
    //   type: 'line',
    //   data: {
    //     labels: data.map(row => row.year),
    //     datasets: [
    //       {
    //         label: 'ENDANGER SPECIES BY YEAR',
    //         data: data.map(row => row.count)
    //       }
    //     ]
    //   }
    // }
    {
      type: 'line',
      options: {
        animation: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        }
      },
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'ENDANGER SPECIES BY YEAR',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();

export default function ContaminateLevel() {
  return (
  <>
    <div>
      <canvas id="myChart"></canvas>
    </div>
  </>
)}
