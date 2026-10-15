/**
 * Pokémon API Helper Library
 * Handles fetching Pokémon data from PokeAPI (https://pokeapi.co).
 */

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

/**
 * Fallback image in SVG format if artwork is missing
 */
export const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%23fee2e2' stroke='%23ef4444' stroke-width='4'/><line x1='5' y1='50' x2='95' y2='50' stroke='%231e293b' stroke-width='6'/><circle cx='50' cy='50' r='14' fill='%23ffffff' stroke='%231e293b' stroke-width='5'/><circle cx='50' cy='50' r='6' fill='%2364748b'/></svg>";

/**
 * Fetches the first N Pokémon from PokeAPI.
 *
 * @param {number} limit - Number of Pokémon to retrieve (default: 20)
 * @returns {Promise<Array<{ id: number, name: string, image: string, url: string }>>}
 */
export async function getPokemonList(limit = 20) {
  const url = `${POKEAPI_BASE_URL}/pokemon?limit=${limit}`;

  const response = await fetch(url, {
    // Next.js App Router cache option: revalidate once per day (86400 seconds)
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Pokémon list from PokeAPI (Status: ${response.status} ${response.statusText})`
    );
  }

  const data = await response.json();

  // Extract ID and build artwork URL for each Pokémon
  const pokemonList = (data.results || []).map((pokemon) => {
    // Example URL: "https://pokeapi.co/api/v2/pokemon/1/"
    // Splitting by "/" and removing empty strings yields: ["https:", "pokeapi.co", "api", "v2", "pokemon", "1"]
    const segments = pokemon.url.split("/").filter(Boolean);
    const id = segments[segments.length - 1];

    // Official artwork hosted on GitHub by PokeAPI
    const artworkUrl = id
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      : FALLBACK_IMAGE;

    return {
      id: Number(id) || null,
      name: pokemon.name,
      url: pokemon.url,
      image: artworkUrl,
    };
  });

  return pokemonList;
}
