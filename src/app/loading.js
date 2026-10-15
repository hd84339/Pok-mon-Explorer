export default function Loading() {
  // Generate 20 placeholder skeleton items
  const placeholders = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/60 via-white to-slate-100 text-slate-800 flex flex-col">
      {/* Top Navigation Bar Skeleton */}
      <header className="border-b border-red-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-200 animate-pulse" />
            <div className="h-6 w-36 bg-slate-200 rounded animate-pulse" />
          </div>
          <div className="h-6 w-28 bg-red-100 rounded-full animate-pulse" />
        </div>
      </header>

      {/* Main Skeleton */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-12 flex flex-col items-center">
        {/* Skeleton Badge & Titles */}
        <div className="h-6 w-40 bg-red-100 rounded-full mb-6 animate-pulse" />
        <div className="h-12 w-72 bg-slate-200 rounded-lg mb-4 animate-pulse" />
        <div className="h-6 w-56 bg-slate-100 rounded mb-8 animate-pulse" />

        {/* Skeleton Search */}
        <div className="w-full max-w-md h-12 bg-slate-100 rounded-2xl mb-12 animate-pulse" />

        {/* Grid of Skeleton Cards */}
        <div className="w-full">
          <div className="h-6 w-48 bg-slate-200 rounded mb-6 animate-pulse" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {placeholders.map((id) => (
              <div
                key={id}
                className="bg-white rounded-2xl border border-slate-100 p-4 flex flex-col items-center shadow-sm animate-pulse"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-slate-100 rounded-xl mb-3" />
                <div className="h-3 w-12 bg-slate-200 rounded mb-2" />
                <div className="h-5 w-20 bg-slate-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
