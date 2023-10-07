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

export default function ContaminateLevel() {
  return (
  <>
    <div>
      <canvas id="myChart"></canvas>
      <p>CHART</p>
    </div>
  </>
)}
