import Image from "next/image";
import style from "../../styles/Pokemon.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  return (
    <div className={style.pokemon_container}>
      <h1 className={style.title}>{pokemon.name}</h1>
      <Image src={imageUrl} width="200" height="200" alt={pokemon.name} />
      <div>
        <h3 className="text-center font-bold text-xl">Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3 className="text-center font-bold text-xl">Tipo:</h3>
        <div className={style.types_container}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${style.type} ${style["type_" + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={style.data_container}>
        <div className={style.data_height}>
          <h4 className="text-center font-bold text-lg">Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={style.data_weight}>
          <h4 className="text-center font-bold text-lg">Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}
