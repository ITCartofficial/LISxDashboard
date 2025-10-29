// import { Users, Phone, Mail, TrendingUp } from "lucide-react";

import PowerBIEmbeder from "../components/PowerBIEmbeder";

export default function HomePage() {
  // const stats = [
  //   {
  //     label: "Total Customers",
  //     value: "2,543",
  //     icon: Users,
  //     color: "bg-blue-500",
  //   },
  //   {
  //     label: "Incoming Calls Today",
  //     value: "127",
  //     icon: Phone,
  //     color: "bg-green-500",
  //   },
  //   { label: "Emails Sent", value: "89", icon: Mail, color: "bg-amber-500" },
  //   {
  //     label: "Active Policies",
  //     value: "1,892",
  //     icon: TrendingUp,
  //     color: "bg-purple-500",
  //   },
  // ];

  return (
    <PowerBIEmbeder
      type="report"
      id="2c88b796-be7e-4b80-b210-0d0307c7a7e2"
      embedUrl="https://app.powerbi.com/reportEmbed?reportId=2c88b796-be7e-4b80-b210-0d0307c7a7e2&groupId=5f7eb29e-6913-43a1-92f5-02c17f84737f&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19"
      
      accessToken="H4sIAAAAAAAEAB2TxarFBgAF_-VtU4hboYu4682N7eLuntJ_72v3A-cwMH__2MnTT0n-8-dP0lNb98J2T3HRDr3k5WCwtOVKF0PY7fGc2zIDXboDBdxuE42krRtVPPjTfgO5SA2KCNnjZ_ZaKEG3R6Ke2WoybQCgznAdrV3T2bGhe-HnEmAGzOO6eBrc7gXAVpexDsi354LUy9SZS-whT-AgbTjXY1JGgFXzmY8IEQSIC3b17yyzhl34bd_3NJ5eZ7abcBKP14yyC3LKuXHIYWknDLnWrNozkVr0PfV55TqWN5ZgoUOhwZEDymudVEAVxznwz6EJjv6YjqKbPRO-7lYJamOHS_qFB4_6hi1-r7fdoe1wqHEdizmAkgffANuLrYebjy8Lnun8nT1jLlOFyS467eXeKiv6vZ6nSykbfHuViYXug7QrHL-R-xDn186wRIfNXBSntJre9gX91ihCCTNti_5K79mZzZ7TE5EktH9dr2wcyJY1-snQGTEZAlzqdLCrCUYioazzqSnRM4580fCm0a2wC_bGxqyzqXpfGCajacX3wLBhijBHnWcF6rG7snSasSCXA8rX5qmq8wH11Yoj8lqf9PEBCbzhSbYzti5Z1JOHvF4U2Il3M50XwG_eqqFf-MMG3v757qCUPw9iOhTcLEFd3qmH8hJGqY10b01ttUhWjaqJx8mXa7r-uJMY2c-Vtgv0Ab86I1hZ5NsATSDU039DGBwYnmj9z6dyZhEcTf4Aoc7do15HSHyhlYNmOTteDyhJWTdCc3hQ6BpquO1eYmr90OXHsAPvyH8XLAcdFUmsdQW3boLxeWyZFRTRWEBEZD-5b__njx9ufeZ90ornNweD1GaRhSUYCHDMYwf0sslDcIXpOkJ727xgoVZwnQmLWYSuatrNqvBTa5K0jmGHbM7Nv_a4j130opI82XTexGadMZ2D8YPCrUl2GK6FCu1FtxMZdcTOUnrMydSk4kQE9lWz_9LMUs2JtxbOgbkUr30FXzs5f0esZThc7hpbvoIa-1zjQNJojM3VgcT7Kw8WhOR-T-wZszltJgmc3odIQ8pvNNy1HFUwNK-ipywphqsapkeWPE8lM003F_N0KKSp5uSyMN_0CODEIXeDG2-vArhwSRXGc3Kzwdgd1oiLHzULKkBEUAbBBpGqiUj79IQEf4xkVKe7xDRtygbR_lwYK38j56-__tP8zHWxKv6vZcrPUgH-YAt43Wr87XpSJOTrf-rTVGOyH2vxi6VBdlEQcKSxbqKvHGTvrVeo1pYLjvRC5Fv0FRCUdHFSmnSjgaYso0ezozbMZuVEhUdPHu_9vTJzmCwjiVuUFKQaBE6yfb2-dDiCyav4vY8Cn2uziSgaJBxfH35MUxgPAhTTEOwTTMMo5CCXpVATAbD42hqxWI6OzQmtqHAK_umLQpBKD3lZQXY2oit84VicVsNPyy7sG8Xuxe9Qq1qx_O4KYDygikvrNc_YFC4hzsvoT5BJunb5kXOe9JsLYwmFBmgLdd781i6sRxQ58MjQkyQxNlNMmaJ7JJRuIw7EpfOpz8NHLVUJJ35WjBgWRz9yJyoocq_Mi2T_VnSWMRo-hNDM_Gr-518Dpe_QAgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzYxNzQ2NDcwLCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0="

      style={{ height: "85vh", width: "100%", flexGrow: 1 }}
    />

    // <div className="space-y-6">
    //   <iframe
    //     title="Microsoft 365 Usage Analytics"
    //     width="1140"
    //     height="541.25"
    //     src="https://app.powerbi.com/reportEmbed?reportId=0759e4a8-2200-44e3-bbd3-dc0ec7c95658&amp;autoAuth=true&amp;ctid=92258f80-d744-47cf-9206-9b35597628aa"
    //     allowFullScreen={true}
    //     frameBorder={0}
    //   ></iframe>
    // </div>
    // <div className="space-y-6">
    //   <div>
    //     <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
    //     <p className="text-slate-600 mt-1">Welcome back! Here's what's happening today.</p>
    //   </div>

    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //     {stats.map((stat, index) => (
    //       <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
    //         <div className="flex items-center justify-between">
    //           <div>
    //             <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
    //             <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
    //           </div>
    //           <div className={`${stat.color} p-3 rounded-lg`}>
    //             <stat.icon size={24} className="text-white" />
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //     <div className="bg-white rounded-xl border border-slate-200 p-6">
    //       <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h2>
    //       <div className="space-y-4">
    //         {[1, 2, 3, 4].map((item) => (
    //           <div key={item} className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0">
    //             <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
    //               <Users size={18} className="text-slate-600" />
    //             </div>
    //             <div className="flex-1">
    //               <p className="text-sm font-medium text-slate-900">New customer registered</p>
    //               <p className="text-xs text-slate-500 mt-1">{item} hours ago</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="bg-white rounded-xl border border-slate-200 p-6">
    //       <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
    //       <div className="grid grid-cols-2 gap-4">
    //         <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition-colors">
    //           <Phone size={20} className="text-blue-600 mb-2" />
    //           <p className="text-sm font-medium text-slate-900">Make Call</p>
    //         </button>
    //         <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-left transition-colors">
    //           <Mail size={20} className="text-green-600 mb-2" />
    //           <p className="text-sm font-medium text-slate-900">Send Email</p>
    //         </button>
    //         <button className="p-4 bg-amber-50 hover:bg-amber-100 rounded-lg text-left transition-colors">
    //           <Users size={20} className="text-amber-600 mb-2" />
    //           <p className="text-sm font-medium text-slate-900">Add Customer</p>
    //         </button>
    //         <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-left transition-colors">
    //           <TrendingUp size={20} className="text-purple-600 mb-2" />
    //           <p className="text-sm font-medium text-slate-900">View Reports</p>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
