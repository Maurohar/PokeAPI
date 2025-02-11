import { useState } from "react";
import { fetchPokemon } from "../services/api.js";
import PokemonCard from "../componentes/PokemonCard.js";

const Home = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const handleSearch = async () => {
    const data = await fetchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Busca un Pokémon</h1>
      <input
        type="text"
        placeholder="Nombre o número"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Buscar
      </button>

      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
};

export default Home;
