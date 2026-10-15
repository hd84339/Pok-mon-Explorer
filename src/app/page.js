import { getPokemonList, FALLBACK_IMAGE } from "@/lib/pokemon";

export default async function Home() {
  // Fetch Pokémon list directly on the server (Server Component)
  let pokemonList = [];
  let errorMessage = null;

  try {
    pokemonList = await getPokemonList(20);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    errorMessage =
      "Could not load Pokémon data right now. Please check your network connection and refresh the page.";
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/60 via-white to-slate-100 text-slate-800 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="border-b border-red-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
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
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-10 sm:py-14 flex flex-col items-center">
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100/80 text-red-700 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Kanto, Johto &amp; Beyond
        </div>

        {/* Page Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 text-center">
          Pokémon <span className="text-red-600">Explorer</span>
        </h1>

        {/* Short Subtitle */}
        <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-xl text-center font-normal">
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
          <p className="mt-2 text-xs text-center text-slate-400">
            * Search functionality will be implemented in a later step
          </p>
        </div>

        {/* Pokémon Grid Section */}
        <section className="mt-12 sm:mt-16 w-full">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Featured Pokémon
            </h2>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              Showing {pokemonList.length} of 20
            </span>
          </div>

          {/* Error State Fallback */}
          {errorMessage && (
            <div className="w-full p-6 rounded-2xl bg-red-50 border border-red-200 text-center">
              <p className="text-sm font-semibold text-red-700">{errorMessage}</p>
            </div>
          )}

          {/* Responsive Pokémon Grid */}
          {!errorMessage && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {pokemonList.map((pokemon) => {
                const formattedId = pokemon.id
                  ? `#${String(pokemon.id).padStart(3, "0")}`
                  : "---";

                return (
                  <article
                    key={pokemon.name}
                    className="group bg-white rounded-2xl border border-slate-200/80 p-4 flex flex-col items-center shadow-xs hover:shadow-md hover:border-red-300 transition-all duration-200 hover:-translate-y-1"
                  >
                    {/* Artwork Container */}
                    <div className="w-full aspect-square bg-slate-50 rounded-xl mb-3 flex items-center justify-center p-3 relative overflow-hidden group-hover:bg-red-50/50 transition-colors">
                      {/* ID Badge */}
                      <span className="absolute top-2 left-2 text-[11px] font-mono font-bold text-slate-400 bg-white/90 px-1.5 py-0.5 rounded-md border border-slate-100">
                        {formattedId}
                      </span>

                      {/* Official Pokémon Artwork */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={pokemon.image || FALLBACK_IMAGE}
                        alt={pokemon.name}
                        width={120}
                        height={120}
                        loading="lazy"
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>

                    {/* Pokémon Name */}
                    <h3 className="capitalize font-semibold text-slate-800 text-sm sm:text-base group-hover:text-red-600 transition-colors">
                      {pokemon.name}
                    </h3>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 py-6 text-center text-xs text-slate-500 bg-white mt-12">
        <p>Built with Next.js &amp; Tailwind CSS • Step 3: Real PokeAPI Data</p>
      </footer>
    </div>
  );
}
