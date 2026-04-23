// src/components/charts/ConfusionMatrix.tsx
import React from 'react';
import { Card } from '../ui/Card';

interface ConfusionMatrixProps {
  data: number[][];
  labels: string[];
}

export const ConfusionMatrix: React.FC<ConfusionMatrixProps> = ({ data, labels }) => {
  // Find max value for opacity scaling
  const max = Math.max(...data.flat());

  return (
    <Card className="p-6 bg-[#111118] border-[#1E1E2E]">
      <h4 className="text-xs font-bold text-[#6B6880] uppercase tracking-widest mb-6">Confusion Matrix</h4>
      <div className="relative overflow-x-auto">
        <table className="w-full text-xs font-mono border-collapse">
          <thead>
            <tr>
              <th className="p-2 border border-[#2A2A3E]"></th>
              {labels.map(label => (
                <th key={label} className="p-2 border border-[#2A2A3E] text-[#6B6880] font-bold">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {labels.map((label, rowIndex) => (
              <tr key={label}>
                <th className="p-2 border border-[#2A2A3E] text-[#6B6880] font-bold text-left">{label}</th>
                {data[rowIndex].map((value, colIndex) => {
                  const opacity = (value / max) * 0.8 + 0.1;
                  const isDiagonal = rowIndex === colIndex;
                  return (
                    <td 
                      key={`${rowIndex}-${colIndex}`} 
                      className="p-3 border border-[#2A2A3E] text-center font-bold"
                      style={{ 
                        backgroundColor: isDiagonal ? `rgba(124, 58, 237, ${opacity})` : `rgba(255, 255, 255, 0.03)`,
                        color: isDiagonal && opacity > 0.5 ? '#fff' : '#A09DB8'
                      }}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between text-[10px] text-[#3D3A50]">
        <span>Predicted Class →</span>
        <span>Actual Class ↓</span>
      </div>
    </Card>
  );
};

export default ConfusionMatrix;
