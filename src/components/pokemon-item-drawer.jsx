import PropType from 'prop-types'
import { useCollectionPokemonStore } from '../store/collection-store'
import { BsTrash } from 'react-icons/bs'

export const PokemonItemDrawer = ({ pokemon }) => {

  const removePokemon = useCollectionPokemonStore(state => state.removePokemon)

  return (
    <div className='border-2 border-black rounded-md p-5 grid grid-cols-[100px,1fr] gap-10 relative'>
      <img
        src={pokemon.sprites.front_default}
        className='w-full h-auto'
      />
      <div className='flex flex-col justify-between'>
        <span className='font-bold text-xl'>{pokemon.name}</span>
        <button
          className=' flex justify-center items-center gap-2 bg-rose-500 hover:bg-rose-600 font-semibold p-2 rounded-md text-white'
          onClick={() => removePokemon(pokemon.id)}
        >
          <BsTrash className='w-4 h-4' />
          Remove
        </button>
      </div>
    </div>

  )
}
PokemonItemDrawer.propTypes = {
  pokemon: PropType.object.isRequired
}
