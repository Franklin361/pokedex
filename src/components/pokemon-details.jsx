import PropTypes from 'prop-types'
import { BiSave } from 'react-icons/bi'
import { useCollectionPokemonStore } from '../store/collection-store'

export const PokemonDetails = ({ pokemon }) => {

  const addPokemon = useCollectionPokemonStore(state => state.addPokemon)

  const img_pokemon = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`
  const hp = pokemon.stats[0]?.base_stat;
  const attack = pokemon.stats[1]?.base_stat;
  const defense = pokemon.stats[2]?.base_stat;
  const height = pokemon.height;
  const weight = pokemon.weight;

  const type = pokemon.types.map(({ type }) => (
    <span key={type.name}>{type.name}</span>
  ))

  const powers = pokemon.abilities.map((ability) => (
    <span key={ability.ability.name}>{ability.ability.name}</span>
  ))

  const handleClick = () => {
    addPokemon(pokemon)
  }

  return (

    <div className='p-7 rounded-lg border border-black shadow-lg shadow-black/30 md:grid md:grid-cols-[350px,1fr] flex flex-col gap-5 bg-gray-50 custom-bg-details'>

      <div className='border rounded border-black p-5 flex justify-center items-center flex-col bg-gray-50'>
        <span className='font-bold text-3xl mb-5'>{pokemon.name}</span>
        <img
          src={img_pokemon}
          className='w-48 h-auto'
        />
      </div>

      <div className='bg-gray-50 flex justify-between flex-col border p-5 rounded-md overflow-hidden'>
        <div className='flex'>
          <p>hp: {hp}</p>
          <p>attack: {attack}</p>
          <p>defense: {defense}</p>
          <p>height: {height}</p>
          <p>weight: {weight}</p>
          <p>type: {type}</p>
          <span>powers</span>
          <div className='flex gap-5 flex-col'>
            {powers}
          </div>
        </div>
        <div className='flex justify-end'>
          <button
            className='flex justify-center items-center gap-2 text-lg border bg-purple-700 hover:bg-purple-800 p-3 rounded-lg font-semibold text-white w-full md:w-fit'
            onClick={handleClick}
          >
            <BiSave className='w-7 h-7' />
            Add to collection
          </button>
        </div>
      </div>
    </div>
  )
}

PokemonDetails.propTypes = {
  pokemon: PropTypes.object.isRequired
}