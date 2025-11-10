import { TrendingUp, TrendingDown } from "lucide-react";
import { Post } from "../App";

interface DataTableProps {
  data: Post[];
}

export function DataTable({ data }: DataTableProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Post URL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Likes
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Comments
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Impressions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Engagement Rate
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <p className="text-lg font-medium">No posts found</p>
                    <p className="text-sm text-gray-400">
                      Reload the page to see latest posts
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              data.map((row) => {
                const isPositiveRate =
                  row.likes + row.comments + row.shares >= 2.0;
                return (
                  <tr
                    key={row.tag}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-blue-800">
                      <a
                        href={row.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {row.postUrl}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {row.likes.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {row.comments}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {row.impressions.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div
                        className={`flex items-center gap-1 ${
                          isPositiveRate ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {isPositiveRate ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="font-medium">
                          {row.impressions === 0
                            ? "0"
                            : (
                                ((row.likes + row.comments + row.shares) /
                                  row.impressions) *
                                100
                              ).toFixed(1)}{" "}
                          %
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
