import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  iconBgColor: string;
}

export function MetricCard({
  title,
  value,
  change,
  icon,
  iconBgColor,
}: MetricCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between mb-4">
        <div className={`${iconBgColor} p-3 rounded-lg`}>{icon}</div>
        {change !== 0 && (
          <div
            className={`flex items-center gap-1 ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">
              {isPositive ? "+" : ""}
              {change}%
            </span>
          </div>
        )}
      </div>
      <div>
        <p className="text-gray-600 text-sm mb-1">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
