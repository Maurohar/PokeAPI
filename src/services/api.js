const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export const fetchPokemon = async (nameOrId) => {
  try {
    const response = await fetch(`${API_URL}${nameOrId.toLowerCase()}`);
    if (!response.ok) throw new Error("Pokémon no encontrado");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
