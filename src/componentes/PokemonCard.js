//este componente recibe un pokemon y lo renderiza en pantalla

const PokemonCard = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <div className="p-4 border rounded-lg shadow-lg text-center">
      <h2 className="text-xl font-bold">{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height} m</p>
      <p>Peso: {pokemon.weight} kg</p>
    </div>
  );
};

export default PokemonCard;
