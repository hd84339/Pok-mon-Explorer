export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/60 via-white to-slate-100 text-slate-800 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="border-b border-red-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Pokéball Accent Badge */}
            <div className="w-9 h-9 rounded-full bg-red-500 border-2 border-white shadow-sm flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-red-600" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white" />
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2" />
              <div className="w-3 h-3 rounded-full bg-white border border-slate-800 relative z-10 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-slate-700" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Pokémon <span className="text-red-600">Explorer</span>
            </span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Starter Edition
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-12 sm:py-20 flex flex-col items-center justify-center text-center">
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100/80 text-red-700 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          Kanto, Johto &amp; Beyond
        </div>

        {/* Page Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
          Pokémon <span className="text-red-600">Explorer</span>
        </h1>

        {/* Short Subtitle */}
        <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-xl font-normal">
          Discover your favorite Pokémon.
        </p>

        {/* Simple Visual Search Placeholder */}
        <div className="mt-8 w-full max-w-md">
          <div className="relative flex items-center">
            {/* Search Icon (SVG) */}
            <div className="absolute left-4 text-slate-400 pointer-events-none">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Input element (visual placeholder only, not yet wired up) */}
            <input
              type="text"
              placeholder="Search Pokémon (e.g. Pikachu)..."
              disabled
              className="w-full pl-12 pr-28 py-3.5 bg-white border-2 border-slate-200 rounded-2xl text-slate-700 placeholder-slate-400 shadow-sm focus:outline-none cursor-not-allowed"
            />

            {/* Search Button */}
            <button
              type="button"
              disabled
              className="absolute right-2 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-xl opacity-90 cursor-not-allowed shadow-sm"
            >
              Search
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            * Search functionality will be implemented in a later step
          </p>
        </div>

        {/* Small Starter Section */}
        <div className="mt-12 sm:mt-16 w-full max-w-lg p-6 rounded-2xl bg-white border border-red-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Your Pokémon adventure starts here!
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Welcome to the explorer! In the upcoming steps, we will connect this app to the PokeAPI so you can view Pokémon cards, inspect real-time stats, and explore their abilities.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 py-6 text-center text-xs text-slate-500 bg-white">
        <p>Built with Next.js &amp; Tailwind CSS • Step 2: Starter Homepage</p>
      </footer>
    </div>
  );
}
