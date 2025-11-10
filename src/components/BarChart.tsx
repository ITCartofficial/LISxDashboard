interface BarChartProps {
  data: { label: string; value: number }[];
  color?: string;
}

export function BarChart({ data, color = "#ef4444" }: BarChartProps) {
  // Remove the early return for empty data
  if (data.length === 0) {
    return (
      <div className="w-full">
        <svg viewBox="0 0 600 250" className="w-full h-auto">
          <line
            x1={40}
            y1={210}
            x2={560}
            y2={210}
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          <line
            x1={40}
            y1={40}
            x2={40}
            y2={210}
            stroke="#e5e7eb"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }

  const width = 600;
  const height = 250;
  const padding = 30;
  const chartHeight = height - padding * 2;
  // Set a fixed maximum width for bars
  const maxBarWidth = 80;
  // Add spacing between bars
  const barSpacing = 20;
  const barWidth = maxBarWidth;

  // Set minimum height for bars when value is 0
  const minBarHeight = 40;
  const maxValue = Math.max(...data.map((d) => d.value));

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

        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="#e5e7eb"
          strokeWidth="2"
        />

        {data.map((d, i) => {
          // Use minBarHeight if value is 0, otherwise calculate normal height
          const barHeight =
            d.value === 0 ? minBarHeight : (d.value / maxValue) * chartHeight;
          // Calculate x position based on fixed bar width and spacing
          const x = padding + i * (barWidth + barSpacing);
          const y = height - padding - barHeight;

          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={d.value === 0 ? "#e5e7eb" : color}
                rx="4"
              />
              <text
                x={x + barWidth / 2}
                y={height - padding + 20}
                textAnchor="middle"
                fontSize="12"
                fill="#6b7280"
              >
                {d.label}
              </text>
              <text
                x={x + barWidth / 2}
                y={y - 5}
                textAnchor="middle"
                fontSize="12"
                fill="#374151"
                fontWeight="600"
              >
                {d.value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
