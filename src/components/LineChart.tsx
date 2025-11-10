interface LineChartProps {
  data: { date: string; value: number }[];
  color?: string;
}

export function LineChart({ data, color = '#9333ea' }: LineChartProps) {
  const width = 600;
  const height = 200;
  const padding = 20;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Handle empty data case
  if (data.length === 0) {
    return (
      <div className="w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          <line
            x1={padding}
            y1={height/2}
            x2={width - padding}
            y2={height/2}
            stroke="#e5e7eb"
            strokeWidth="3"
            strokeDasharray="5 5"
          />
        </svg>
      </div>
    );
  }

  const values = data.map((d) => d.value);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const range = maxValue - minValue || 1;

  // Handle all zero values case
  if (maxValue === 0 && minValue === 0) {
    return (
      <div className="w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid lines */}
          {Array.from({ length: 5 }, (_, i) => (
            <line
              key={i}
              x1={padding}
              y1={padding + (i * chartHeight) / 4}
              x2={width - padding}
              y2={padding + (i * chartHeight) / 4}
              stroke="#e5e7eb"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}

          {/* Zero line */}
          <path
            d={`M ${padding} ${height/2} L ${width - padding} ${height/2}`}
            stroke={color}
            strokeWidth="3"
            fill="none"
          />

          {/* Data points */}
          {data.map((_, i) => {
            const x = padding + (i / (data.length - 1)) * chartWidth;
            return (
              <circle
                key={i}
                cx={x}
                cy={height/2}
                r="5"
                fill={color}
              />
            );
          })}

          {/* Y-axis label */}
          <text
            x={padding - 5}
            y={height - padding + 4}
            textAnchor="end"
            fontSize="12"
            fill="#6b7280"
          >
            0
          </text>
        </svg>
      </div>
    );
  }

  // Regular chart rendering for non-zero values
  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * chartWidth;
    const y = padding + chartHeight - ((d.value - minValue) / range) * chartHeight;
    return { x, y, value: d.value };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding} L ${padding} ${height - padding} Z`;

  const yAxisTicks = 5;
  const yTicks = Array.from({ length: yAxisTicks }, (_, i) => {
    const value = minValue + (range / (yAxisTicks - 1)) * i;
    const y = height - padding - (i / (yAxisTicks - 1)) * chartHeight;
    return { value: Math.round(value), y };
  });

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>

        {yTicks.map((tick, i) => (
          <g key={i}>
            <line
              x1={padding}
              y1={tick.y}
              x2={width - padding}
              y2={tick.y}
              stroke="#e5e7eb"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <text
              x={padding - 5}
              y={tick.y + 4}
              textAnchor="end"
              fontSize="12"
              fill="#6b7280"
            >
              {tick.value}
            </text>
          </g>
        ))}

        <path d={areaPath} fill="url(#areaGradient)" />
        <path d={linePath} fill="none" stroke={color} strokeWidth="3" />

        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="5" fill={color} />
        ))}
      </svg>
    </div>
  );
}