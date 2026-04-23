// src/lib/chartDefaults.ts
import { Chart as ChartJS } from 'chart.js';

export const initializeChartDefaults = () => {
  if (typeof window === 'undefined') return;

  // Global Colors and Basic Defaults
  ChartJS.defaults.color = '#6B6880';
  ChartJS.defaults.borderColor = '#1E1E2E';
  ChartJS.defaults.backgroundColor = '#13131A';

  // Scales Defaults
  if (ChartJS.defaults.scales?.linear) {
    ChartJS.defaults.scales.linear.grid.color = '#1E1E2E';
    ChartJS.defaults.scales.linear.ticks.color = '#6B6880';
  }

  // Use set for nested plugin defaults to avoid undefined errors
  ChartJS.defaults.set('plugins.tooltip', {
    backgroundColor: '#13131A',
    borderColor: '#2A2A3E',
    borderWidth: 1,
    titleColor: '#F1F0FF',
    bodyColor: '#A09DB8',
    padding: 12,
    cornerRadius: 8,
  });

  ChartJS.defaults.set('plugins.legend.labels', {
    color: '#A09DB8',
    font: {
      family: 'Inter',
      size: 12
    }
  });
};
