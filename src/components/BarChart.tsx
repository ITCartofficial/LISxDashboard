interface BarChartProps {
  data: { label: string; value: number }[];
  color?: string;
}

export function BarChart({ data, color = '#ef4444' }: BarChartProps) {
  if (data.length === 0) return null;

  const maxValue = Math.max(...data.map((d) => d.value));
  const width = 600;
  const height = 250;
  const padding = 40;
  const chartHeight = height - padding * 2;
  const barWidth = (width - padding * 2) / data.length - 20;

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#e5e7eb"
          strokeWidth="2"
        />

        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#e5e7eb" strokeWidth="2" />

        {data.map((d, i) => {
          const barHeight = (d.value / maxValue) * chartHeight;
          const x = padding + i * ((width - padding * 2) / data.length) + 10;
          const y = height - padding - barHeight;

          return (
            <g key={i}>
              <rect x={x} y={y} width={barWidth} height={barHeight} fill={color} rx="4" />
              <text x={x + barWidth / 2} y={height - padding + 20} textAnchor="middle" fontSize="12" fill="#6b7280">
                {d.label}
              </text>
              <text x={x + barWidth / 2} y={y - 5} textAnchor="middle" fontSize="12" fill="#374151" fontWeight="600">
                {d.value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
