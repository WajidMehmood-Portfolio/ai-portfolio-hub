// src/data/caseStudies.ts
import { CaseStudy } from '../types';

export const ML_CASE_STUDIES = [
  {
    id: '1',
    title: 'Retail Demand Forecasting',
    description: 'DemandNet-v2: Transformer-based time-series regressor for minimizing inventory waste.',
    tags: ['PyTorch', 'Transformers', 'Time Series'],
    metrics: { accuracy: 92, latency: 45 },
    chartData: {
      accuracy: [65, 78, 88, 92, 94, 95, 96],
      loss: [0.9, 0.6, 0.4, 0.25, 0.18, 0.15, 0.12]
    }
  },
  {
    id: '2',
    title: 'Medical Image Segmentation',
    description: 'U-Net architecture for identifying anomalies in MRI scans with on-device inference.',
    tags: ['TensorFlow Lite', 'U-Net', 'Computer Vision'],
    metrics: { accuracy: 96, latency: 120 },
    chartData: {
      accuracy: [60, 75, 85, 90, 94, 96, 97],
      loss: [1.2, 0.8, 0.5, 0.3, 0.2, 0.15, 0.11]
    }
  }
];
