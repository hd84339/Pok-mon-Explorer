import { getPokemonList } from "@/lib/pokemon";
import PokemonSearch from "@/components/PokemonSearch";

export default async function Home() {
  // Fetch Pokémon list on the server (Server Component)
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
        <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-xl text-center font-normal mb-8">
          Discover your favorite Pokémon.
        </p>

        {/* Error State Fallback */}
        {errorMessage ? (
          <div className="w-full max-w-lg mt-8 p-6 rounded-2xl bg-red-50 border border-red-200 text-center">
            <p className="text-sm font-semibold text-red-700">{errorMessage}</p>
          </div>
        ) : (
          /* Client Component handling interactive search and filtered grid */
          <PokemonSearch initialPokemon={pokemonList} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 py-6 text-center text-xs text-slate-500 bg-white mt-12">
        <p>Built with Next.js &amp; Tailwind CSS • Step 4: Interactive Search</p>
      </footer>
    </div>
  );
}
