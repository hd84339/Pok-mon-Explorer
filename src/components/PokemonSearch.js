"use client";

import { useState } from "react";
import { FALLBACK_IMAGE } from "@/lib/pokemon";

/**
 * Client Component for searching and filtering the Pokémon list in real-time.
 *
 * @param {{ initialPokemon: Array<{ id: number, name: string, image: string, url: string }> }} props
 */
export default function PokemonSearch({ initialPokemon = [] }) {
  // Track the current search text entered by the user
  const [searchTerm, setSearchTerm] = useState("");

  // Case-insensitive filtering of Pokémon by name
  const trimmedQuery = searchTerm.toLowerCase().trim();
  const filteredPokemon = initialPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(trimmedQuery)
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* Search Bar Input */}
      <div className="w-full max-w-md">
        <div className="relative flex items-center">
          {/* Search Icon */}
          <div className="absolute left-4 text-slate-400 pointer-events-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Interactive Search Input */}
          <input
            id="pokemon-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Pokémon (e.g. Pikachu, Bulba)..."
            className="w-full pl-12 pr-24 py-3.5 bg-white border-2 border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-150"
          />

          {/* Clear or Action Button */}
          {searchTerm ? (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="absolute right-2 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold rounded-xl transition-colors"
              aria-label="Clear search input"
            >
              Clear
            </button>
          ) : (
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-2 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-xl shadow-sm pointer-events-none opacity-90"
            >
              Search
            </button>
          )}
        </div>

        {/* Live Filter Hint */}
        <p className="mt-2 text-xs text-center text-slate-400">
          {searchTerm
            ? `Filtering by "${searchTerm}" in real-time`
            : "Type any name to instantly filter the Pokémon below"}
        </p>
      </div>

      {/* Pokémon Grid Section */}
      <section className="mt-12 sm:mt-16 w-full">
        {/* Section Header with Live Counter */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Featured Pokémon
          </h2>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            Showing {filteredPokemon.length} of {initialPokemon.length}
          </span>
        </div>

        {/* Pokémon Cards Grid */}
        {filteredPokemon.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {filteredPokemon.map((pokemon) => {
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

                    {/* Official Artwork */}
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
        ) : (
          /* Friendly Empty State */
          <div className="w-full max-w-md mx-auto my-12 p-8 bg-white border border-slate-200/90 rounded-2xl shadow-sm text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4 text-red-500">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              No Pokémon found
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              We couldn&apos;t find any Pokémon matching &ldquo;{searchTerm}&rdquo;. Try another name like Bulbasaur or Pikachu.
            </p>
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
