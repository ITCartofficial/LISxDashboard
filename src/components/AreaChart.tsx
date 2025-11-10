interface AreaChartProps {
  data: { label: string; value: number }[];
  color?: string;
}

export function AreaChart({ data, color = "#14b8a6" }: AreaChartProps) {
  const width = 600;
  const height = 250;
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Handle empty data case
  if (data.length === 0) {
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
        </svg>
      </div>
    );
  }

  const maxValue = Math.max(...data.map((d) => d.value));

  // Handle all zero values case
  if (maxValue === 0) {
    const points = data.map((d, i) => {
      const x = padding + (i / (data.length - 1)) * chartWidth;
      const y = height / 2; // Place line in middle
      return { x, y, value: d.value };
    });

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
            d={`M ${padding} ${height / 2} L ${width - padding} ${height / 2}`}
            stroke={color}
            strokeWidth="2.5"
            fill="none"
          />

          {/* Data points */}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="5"
              fill={color}
              stroke="white"
              strokeWidth="2"
            />
          ))}

          {/* Labels */}
          {data.map((d, i) => {
            const x = points[i].x;
            return (
              <text
                key={i}
                x={x}
                y={height - padding + 20}
                textAnchor="middle"
                fontSize="12"
                fill="#6b7280"
              >
                {d.label}
              </text>
            );
          })}

          {/* Y-axis label */}
          <text
            x={padding - 8}
            y={height - padding + 4}
            textAnchor="end"
            fontSize="11"
            fill="#9ca3af"
          >
            0
          </text>
        </svg>
      </div>
    );
  }

  // Regular chart rendering for non-zero values
  const points = data.map((d, i) => {
    const x =
      data.length === 1
        ? width / 2
        : padding + (i / (data.length - 1)) * chartWidth;
    const y = padding + chartHeight - (d.value / maxValue) * chartHeight;
    return { x, y, value: d.value };
  });

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${
    height - padding
  } L ${padding} ${height - padding} Z`;

  const yTicks = 5;
  const gridLines = Array.from({ length: yTicks }, (_, i) => {
    const value = Math.round((maxValue / (yTicks - 1)) * i);
    const y = height - padding - (i / (yTicks - 1)) * chartHeight;
    return { value, y };
  });

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <defs>
          <linearGradient
            id={`gradient-${color}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.4 }} />
            <stop
              offset="100%"
              style={{ stopColor: color, stopOpacity: 0.05 }}
            />
          </linearGradient>
        </defs>

        {gridLines.map((tick, i) => (
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
              x={padding - 8}
              y={tick.y + 4}
              textAnchor="end"
              fontSize="11"
              fill="#9ca3af"
            >
              {tick.value}
            </text>
          </g>
        ))}

        <path d={areaPath} fill={`url(#gradient-${color})`} />
        <path d={linePath} fill="none" stroke={color} strokeWidth="2.5" />

        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="5"
            fill={color}
            stroke="white"
            strokeWidth="2"
          />
        ))}

        {data.map((d, i) => {
          const x = points[i].x;
          return (
            <text
              key={i}
              x={x}
              y={height - padding + 20}
              textAnchor="middle"
              fontSize="12"
              fill="#6b7280"
            >
              {d.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
