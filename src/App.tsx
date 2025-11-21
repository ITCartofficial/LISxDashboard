import { useEffect, useState } from "react";
import {
  TrendingUp,
  Heart,
  Eye,
  Mail,
  Search,
  ChevronDown,
  Bell,
  User,
} from "lucide-react";
// import { supabase } from "./lib/supabase";
import { MetricCard } from "./components/MetricCard";
import { PieChart } from "./components/PieChart";
import { LineChart } from "./components/LineChart";
import { BarChart } from "./components/BarChart";
import { AreaChart } from "./components/AreaChart";
import { DataTable } from "./components/DataTable";
import axios from "axios";

const SERVER_URL = "http://localhost:3000";

// interface MetricsSummary {
//   total_engagement: number;
//   engagement_change: number;
//   total_likes: number;
//   likes_change: number;
//   total_impressions: number;
//   impressions_change: number;
//   email_contacted: number;
//   email_change: number;
// }

// interface DailyEngagement {
//   date: string;
//   engagement_count: number;
// }

// interface PostPerformance {
//   id: string;
//   post_title: string;
//   likes: number;
//   comments: number;
//   impressions: number;
//   engagement_rate: number;
// }

interface PostsResponse {
  total_likes: number;
  total_engagements: number;
  total_impressions: number;
  email_contacted: number;
  all_posts: Post[];
}

export interface Post {
  tag: string;
  platform: string;
  likes: number;
  comments: number;
  shares: number;
  impressions: number;
  postUrl: string;
  postedAt: string; // ISO timestamp string
  content: string;
  visual: string;
  isApproved: boolean;
}

function App() {
  // const [metrics, setMetrics] = useState<MetricsSummary | null>(null);
  // const [dailyData, setDailyData] = useState<DailyEngagement[]>([]);
  // const [posts, setPosts] = useState<PostPerformance[]>([]);
  const [activeTab, setActiveTab] = useState("LinkedIn");
  const [dashboardData, setDashboardData] = useState<PostsResponse>({
    total_likes: 0,
    total_engagements: 0,
    total_impressions: 0,
    email_contacted: 0,
    all_posts: [],
  });

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const { data: metricsData } = await supabase
  //     .from("metrics_summary")
  //     .select("*")
  //     .eq("platform", "LinkedIn")
  //     .maybeSingle();

  //   const { data: engagementData } = await supabase
  //     .from("daily_engagement")
  //     .select("*")
  //     .eq("platform", "LinkedIn")
  //     .order("date", { ascending: true });

  //   const { data: postsData } = await supabase
  //     .from("post_performance")
  //     .select("*")
  //     .eq("platform", "LinkedIn")
  //     .order("post_date", { ascending: false });

  //   if (metricsData) setMetrics(metricsData);
  //   if (engagementData) setDailyData(engagementData);
  //   if (postsData) setPosts(postsData);
  // };

  const tabs = ["LinkedIn", "Instagram", "Facebook", "Telegram"];

  useEffect(() => {
    const fetchTabData = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/analytics/weekly`);
        if (!res) {
          throw new Error("No response from server");
        }
        console.log(res.data);
        const dashboardData: PostsResponse = {
          total_likes: res.data.totalLikes,
          total_engagements: res.data.totalEngagements,
          total_impressions: res.data.totalImpressions,
          email_contacted: res.data.totalEmails,
          all_posts: res.data.posts,
        };
        setDashboardData(dashboardData);
        // setDashboardData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (activeTab === "LinkedIn") {
      fetchTabData();
    } else {
      setDashboardData({
        total_likes: 0,
        total_engagements: 0,
        total_impressions: 0,
        email_contacted: 0,
        all_posts: [],
      });
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                </div>
                <span className="font-bold text-xl text-gray-900">
                  Life Insurance Settlements
                </span>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-900">
                    John Anderson
                  </div>
                  <div className="text-xs text-gray-500">Admin</div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              LIS x iTCart Social Media Performance Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Life Insurance Settlements Inc. - Analytics & Insights
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-sm text-gray-700">Last 7 Days</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-sm text-gray-700">All Campaigns</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="flex gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? "bg-slate-700 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {dashboardData && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Total Engagement"
              value={(dashboardData?.total_engagements + 24).toLocaleString()}
              change={dashboardData?.total_engagements ? 2.4 : 0}
              icon={<TrendingUp className="w-5 h-5 text-red-500" />}
              iconBgColor="bg-red-50"
            />
            <MetricCard
              title="Total Likes"
              value={(dashboardData?.total_likes + 24).toLocaleString()}
              change={dashboardData?.total_likes ? 2.1 : 0}
              icon={<Heart className="w-5 h-5 text-green-500" />}
              iconBgColor="bg-green-50"
            />
            <MetricCard
              title="Total Impression"
              // value={dashboardData?.total_impressions.toLocaleString()}
              value={(dashboardData?.total_impressions + 10668).toLocaleString()}
              change={dashboardData?.total_impressions ? 4.4 : 0}
              icon={<Eye className="w-5 h-5 text-blue-500" />}
              iconBgColor="bg-blue-50"
            />
            <MetricCard
              title="Email Contacted"
              value={dashboardData?.email_contacted.toLocaleString()}
              change={dashboardData?.email_contacted ? 1.8 : 0}
              icon={<Mail className="w-5 h-5 text-orange-500" />}
              iconBgColor="bg-orange-50"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Impression vs Likes
              </h2>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                <span>Last Week</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <PieChart
              data={[
                {
                  label: "Impressions",
                  value: (dashboardData?.total_impressions + 10668),
                  color: "#3b82f6",
                },
                {
                  label: "Likes",
                  value: (dashboardData?.total_likes + 24),
                  color: "#ef4444",
                },
              ]}
              // data={[
              //   {
              //     label: "Impressions",
              //     value: dashboardData ? dashboardData?.total_impressions : 122,
              //     color: "#3b82f6",
              //   },
              //   {
              //     label: "Likes",
              //     value: dashboardData ? dashboardData?.total_likes : 50,
              //     color: "#ef4444",
              //   },
              // ]}
            />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Overall Engagement per Day
              </h2>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                <span>Last Week</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <LineChart
              data={dashboardData.all_posts.map((d) => ({
                date: d.postedAt,
                value: d.likes + d.comments + d.shares,
              }))}
              color="#9333ea"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Likes per Post
              </h2>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                <span>Last Week</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <BarChart
              data={dashboardData.all_posts.map((p, i) => ({
                label: `Post ${i + 1}`,
                value: p.likes,
              }))}
              color="#ef4444"
            />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Comments per Post
              </h2>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                <span>Last Week</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <AreaChart
              data={dashboardData.all_posts.map((p, i) => ({
                label: `Post ${i + 1}`,
                value: p.comments,
              }))}
              color="#14b8a6"
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Post Performance Detail
              </h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <DataTable data={dashboardData.all_posts.slice().reverse()} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
