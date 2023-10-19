import PropTypes from 'prop-types'
import { BiSave } from 'react-icons/bi'
import { useCollectionPokemonStore } from '../../store/collection-store'
import { BaseStats } from './base-stats-pokemon'
import { PokemonPresentation } from './pokemon-presentation'

export const PokemonDetails = ({ pokemon }) => {

  const addPokemon = useCollectionPokemonStore(state => state.addPokemon)

  const types = pokemon.types.map(({ type }) => (
    <span
      key={type.name}
      className='p-1 px-3 block rounded-md font-semibold bg-indigo-500 text-white'
    >
      {type.name}
    </span>
  ))

  const abilities = pokemon.abilities.map((ability) => (
    <span
      key={ability.ability.name}
      className='p-1 px-3 block rounded-md font-semibold bg-orange-500 text-white'
    >
      {ability.ability.name}
    </span>
  ))

  const handleAddPokemonToCollection = () => addPokemon(pokemon)

  return (

    <div className='p-7 rounded-lg border border-black shadow-lg shadow-black/30 lg:grid lg:grid-cols-[350px,1fr] flex flex-col gap-5 bg-gray-50 custom-bg-details animate-slide-in-bottom'>

      <PokemonPresentation
        img_pokemon={pokemon.img_pokemon}
        height={pokemon.height}
        weight={pokemon.weight}
        name={pokemon.name}
        front_default={pokemon.front_default}
        back_default={pokemon.back_default}
        front_shiny={pokemon.front_shiny}
        back_shiny={pokemon.back_shiny}
      />

      <div className='bg-gray-50 flex justify-between flex-col border p-5 rounded-md overflow-hidden border-black'>
        <div className='flex flex-col gap-5'>

          <BaseStats
            hp={pokemon.hp}
            attack={pokemon.attack}
            defense={pokemon.defense}
            specialAttack={pokemon.specialAttack}
            specialDefense={pokemon.specialDefense}
            speed={pokemon.speed}
            ex={pokemon.ex}
          />

          <div>
            <span className='font-bold mb-5 block border-b border-black'>Abilities</span>
            <div className='flex gap-2 flex-wrap' >{abilities}</div>
          </div>

          <div>
            <span className='font-bold mb-5 block border-b border-black'>Type</span>
            <div className='flex gap-2 flex-wrap' >{types}</div>
          </div>

        </div>

        <div className='flex justify-end lg:mt-0 md:mt-8'>
          <button
            className='flex justify-center items-center lg:flex-initial flex-1 gap-2 text-lg border bg-purple-700 hover:bg-purple-800 p-3 rounded-lg font-semibold text-white w-full md:w-fit shadow-lg shadow-black/50'
            onClick={handleAddPokemonToCollection}
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