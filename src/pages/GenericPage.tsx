interface GenericPageProps {
  title: string;
  description: string;
}

export default function GenericPage({ title, description }: GenericPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <p className="text-slate-600 mt-1">{description}</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Content Coming Soon</h3>
          <p className="text-slate-600 text-sm">
            This section is under development. Check back later for updates.
          </p>
        </div>
      </div>
    </div>
  );
}
