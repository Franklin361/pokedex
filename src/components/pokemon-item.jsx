import PropTypes from 'prop-types'
import { BiSave } from 'react-icons/bi'

export const PokemonItem = ({ pokemon }) => {


  const img_pokemon = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`
  const hp = pokemon.stats[0]?.base_stat;
  const attack = pokemon.stats[1]?.base_stat;
  const defense = pokemon.stats[2]?.base_stat;
  const height = pokemon.stats[2]?.base_stat;

  const powers = pokemon.abilities.map((ability) => (
    <span key={ability.ability.name}>{ability.ability.name}</span>
  ))

  return (

    <div className='p-7 rounded-lg border border-black shadow-lg shadow-black/30 grid grid-cols-2'>

      <div>
        <span className='font-semibold inline-block text-xl '>{pokemon.name}</span>
        <img
          src={img_pokemon}
          className='w-40 h-auto'
        />
      </div>
      <div>
        <p>hp: {hp}</p>
        <p>attack: {attack}</p>
        <p>defense: {defense}</p>
        <p>height: {height}</p>
        <span>powers</span>
        <div className='flex gap-5'>
          {powers}
        </div>
        <button className='flex-1 flex justify-center items-center gap-2 text-lg border bg-purple-700 hover:bg-purple-800 p-3 rounded-lg font-semibold text-white'>
          <BiSave className='w-7 h-7' />
          Add to collection
        </button>
      </div>
    </div>
  )
}

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired
}