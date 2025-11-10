interface PieChartProps {
  data: { label: string; value: number; color: string }[];
}

export function PieChart({ data }: PieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90;

  const slices = data.map((item) => {
    const percentage = (item.value / total) * 100;
    const angle = (percentage / 100) * 360;
    const largeArcFlag = angle > 180 ? 1 : 0;

    const startX = 50 + 40 * Math.cos((Math.PI * currentAngle) / 180);
    const startY = 50 + 40 * Math.sin((Math.PI * currentAngle) / 180);

    currentAngle += angle;

    const endX = 50 + 40 * Math.cos((Math.PI * currentAngle) / 180);
    const endY = 50 + 40 * Math.sin((Math.PI * currentAngle) / 180);

    const pathData = [
      `M 50 50`,
      `L ${startX} ${startY}`,
      `A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      "Z",
    ].join(" ");

    return {
      pathData,
      color: item.color,
      label: item.label,
      percentage: percentage.toFixed(1),
    };
  });

  const total_value = data.reduce((sum, item) => sum + item.value, 0);

  // If total is 0, render a yellow circle
  if (total_value === 0) {
    return (
      <div className="flex items-center justify-center gap-8">
        <svg viewBox="0 0 100 100" className="w-64 h-64">
          <circle cx="50" cy="50" r="40" fill="rgb(239 68 68)" />
        </svg>
        <div className="space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full`}
                style={{ backgroundColor: "rgb(239 68 68)" }}
              ></div>
              <span className="text-sm text-gray-600">{item.label}: 0%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-8">
      <svg viewBox="0 0 100 100" className="w-64 h-64">
        {slices.map((slice, index) => (
          <path key={index} d={slice.pathData} fill={slice.color} />
        ))}
      </svg>
      <div className="space-y-2">
        {slices.map((slice, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full`}
              style={{ backgroundColor: slice.color }}
            ></div>
            <span className="text-sm text-gray-600">
              {slice.label}: {slice.percentage || 0}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
