// src/components/charts/AccuracyChart.tsx
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

interface AccuracyChartProps {
  data: number[];
}

export const AccuracyChart: React.FC<AccuracyChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((_, i) => `Epoch ${i + 1}`),
    datasets: [
      {
        label: 'Training Accuracy',
        data: data,
        borderColor: '#7C3AED',
        backgroundColor: 'rgba(124, 58, 237, 0.15)',
        pointBackgroundColor: '#7C3AED',
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
        min: Math.min(...data) - 5,
        max: 100,
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

export default AccuracyChart;
