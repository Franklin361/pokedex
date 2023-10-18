import { useState } from 'react'
import { BsBarChart, BsCollection, BsTrash } from 'react-icons/bs'
import { useCollectionPokemonStore } from '../store/collection-store'
import { PokemonItemDrawer } from './pokemon-item-drawer'

export const Drawer = () => {

  const [open, setOpen] = useState(false)
  const pokemonsCollection = useCollectionPokemonStore(state => state.pokemons)

  return (
    <div>
      <button
        className='p-3 border border-black flex justify-center items-center gap-2 bg-orange-400 hover:bg-orange-500 font-semibold text-white rounded-lg shadow-lg shadow-black/40'
        onClick={() => setOpen(true)}
      >
        <BsCollection />
        collection
      </button>
      {
        open && (
          <div
            onClick={() => setOpen(false)}
            className='bg-black/50 backdrop-blur-md w-screen h-screen fixed top-0 left-0 z-20'
          />
        )
      }
      {
        open && (
          <div
            className='fixed top-0 left-0 h-screen w-[500px] bg-gray-100 z-30 animate-slide-in-fwd-left'
          >

            <header className='flex flex-col gap-7 px-10 pt-5'>
              <h2 className='text-center text-5xl font-extrabold'>Pokémon Collection</h2>
              <div className='flex justify-between items-center gap-5'>
                <button className='border font-semibold border-rose-500 text-rose-500 rounded-md flex justify-center items-center gap-2 p-3 hover:bg-rose-500 hover:text-white transition-all flex-1'>
                  <BsTrash className='w-5 h-5' />
                  Clear collection
                </button>
                <button className='font-semibold text-white rounded-md flex justify-center items-center gap-2 p-3 bg-purple-700 hover:bg-purple-800 transition-all flex-1'>
                  <BsBarChart className='w-5 h-5' />
                  See chart
                </button>
              </div>
            </header>


            <div className=' mt-10 flex flex-col gap-10 p-6 pt-4 h-[370px] overflow-y-scroll'>
              {
                pokemonsCollection.map(pokemon => (
                  <PokemonItemDrawer pokemon={pokemon} key={pokemon.id} />
                ))
              }

            </div>
          </div>
        )
      }
    </div>
  )
}
