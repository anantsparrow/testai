
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { UsageData } from '../types';

interface UsageChartProps {
  data: UsageData[];
}

export const UsageChart: React.FC<UsageChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        data={data}
        margin={{
            top: 5,
            right: 20,
            left: -10,
            bottom: 5,
        }}
        barCategoryGap="20%"
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(200, 200, 200, 0.2)" />
        <XAxis type="number" domain={[0, 100]} tick={{ fill: '#94a3b8' }} tickFormatter={(tick) => `${tick}%`} />
        <YAxis type="category" dataKey="name" tick={{ fill: '#94a3b8' }} />
        <Tooltip
            cursor={{fill: 'rgba(200, 200, 200, 0.1)'}}
            contentStyle={{
                backgroundColor: '#1e293b',
                borderColor: '#334155',
                borderRadius: '0.5rem',
            }}
            labelStyle={{ color: '#f1f5f9' }}
        />
        <Legend wrapperStyle={{ color: '#94a3b8' }} />
        <Bar dataKey="cpu" name="CPU" fill="#3b82f6" background={{ fill: '#1e293b' }} />
        <Bar dataKey="ram" name="RAM" fill="#84cc16" background={{ fill: '#1e293b' }} />
        <Bar dataKey="disk" name="Disk" fill="#f97316" background={{ fill: '#1e293b' }} />
      </BarChart>
    </ResponsiveContainer>
  );
};
