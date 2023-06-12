import { useEffect, useState, useRef } from "react";
import { Chart, DoughnutController, ArcElement, CategoryScale } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import getRampAlgorithms, { Ramp } from "../../api/ramp";

Chart.register(DoughnutController, ArcElement, CategoryScale, ChartDataLabels);

const DonutChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"doughnut", number[], unknown> | null>(
    null
  );
  const [data, setData] = useState<{ [key: string]: number }>({});
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getRampAlgorithms((ramps: Ramp[]) => {
      const newData: { [key: string]: number } = {};
      let newTotal = 0;
      ramps.forEach((ramp) => {
        if (newData[ramp.algorithm]) {
          newData[ramp.algorithm] += 1;
        } else {
          newData[ramp.algorithm] = 1;
        }
        newTotal += 1;
      });
      setData(newData);
      setTotal(newTotal);
    });
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        if (!chartInstance.current) {
          if (total) {
            const newChart = new Chart(ctx, {
              type: "doughnut",
              data: {
                labels: Object.values(data),
                datasets: [
                  {
                    data: Object.values(data),
                    backgroundColor: [
                      "#93DADB",
                      "#EFF6FE",
                      "#ABDBD6",
                      "#76CDC4",
                      "#76CDC4",
                    ],
                    borderWidth: 0,
                  },
                ],
              },
              options: {
                layout: {
                  padding: {
                    left: 40,
                    right: 40,
                    top: 40,
                    bottom: 40,
                  },
                },
                plugins: {
                  datalabels: {
                    formatter: (value: number) => {
                      let percentage = ((value / total) * 100).toFixed(0) + "%";
                      return percentage;
                    },
                    font: {
                      size: 15,
                      weight: "bold",
                    },
                    color: [
                      "#93DADB",
                      "#EFF6FE",
                      "#ABDBD6",
                      "#76CDC4",
                      "#76CDC4",
                    ],
                    align: "end",
                    anchor: "end",
                    offset: 5,
                  },
                },
                cutout: "70%",
              },
            });
            chartInstance.current = newChart;
          }
        } else {
          chartInstance.current.data.labels = Object.keys(data);
          chartInstance.current.data.datasets[0].data = Object.values(data);
          chartInstance.current.update();
        }
      }
    }
  }, [data, total]);

  return <canvas ref={chartRef} />;
};

export default DonutChart;
