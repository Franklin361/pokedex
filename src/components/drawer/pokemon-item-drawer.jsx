import PropType from 'prop-types'
import { useCollectionPokemonStore } from '../../store/collection-store'
import { BsTrash } from 'react-icons/bs'

export const PokemonItemDrawer = ({ pokemon }) => {

  const removePokemon = useCollectionPokemonStore(state => state.removePokemon)

  return (
    <div className='border-2 border-black rounded-md p-5 sm:grid sm:grid-cols-[100px,1fr] sm:gap-10 flex flex-col-reverse relative justify-center items-center custom-bg-drawer bg-gray-50 animate-slide-in-bottom'>
      <img
        src={pokemon.front_default}
        className='sm:w-full w-20 h-auto scale-[1.5] sm:scale-[2]'
      />
      <div className='flex flex-col justify-between  h-full'>
        <span className='font-bold md:text-xl text-2xl text-end'>{pokemon.name}</span>
        <button
          className='sm:static absolute -top-5 -right-5 flex justify-center items-center gap-2 bg-rose-500 hover:bg-rose-600 font-semibold p-2 rounded-md text-white border-2 border-black'
          onClick={() => removePokemon(pokemon.id)}
        >
          <BsTrash className='sm:w-4 sm:h-4 w-6 h-6' />
          <span className='sm:block hidden'>Remove</span>
        </button>
      </div>
    </div>

  )
}
PokemonItemDrawer.propTypes = {
  pokemon: PropType.object.isRequired
}
