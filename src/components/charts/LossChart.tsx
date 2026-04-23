// src/components/charts/LossChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LossChartProps {
  data: number[];
}

export const LossChart: React.FC<LossChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((_, i) => `Epoch ${i + 1}`),
    datasets: [
      {
        label: 'Validation Loss',
        data: data,
        borderColor: '#06B6D4',
        backgroundColor: 'rgba(6, 182, 212, 0.15)',
        pointBackgroundColor: '#06B6D4',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        grid: { color: '#1E1E2E' },
        ticks: { color: '#6B6880' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#6B6880' }
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default LossChart;
