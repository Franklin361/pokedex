import { useState } from 'react'
import { BsBarChart, BsCollection, BsTrash, BsX } from 'react-icons/bs'
import { useCollectionPokemonStore } from '../store/collection-store'
import { ChartCollection } from './chart'
import { PokemonItemDrawer } from './pokemon-item-drawer'

export const Drawer = () => {

  const [open, setOpen] = useState(false)
  const pokemonsCollection = useCollectionPokemonStore(state => state.pokemons)
  const clearCollectionStorage = useCollectionPokemonStore(state => state.clearCollectionStorage)

  return (
    <div>
      <button
        className='p-3 border border-black flex justify-center items-center gap-2 bg-orange-400 hover:bg-orange-500 font-semibold text-white rounded-lg shadow-lg shadow-black/40 md:w-fit w-full flex-1'
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
          <div className='fixed top-0 left-0 h-screen md:w-[500px] w-3/4 bg-gray-100 z-30 animate-slide-in-fwd-left shadow-2xl shadow-black/50' >
            <button
              className='rounded-full bg-rose-500 hover:bg-rose-600 text-white absolute right-3 top-3'
              onClick={() => setOpen(false)}
            >
              <BsX className='w-8 h-8' />
            </button>
            <header className='flex flex-col gap-7 px-10 pt-5'>
              <h2 className='text-center md:text-5xl text-3xl font-extrabold'>Pokémon Collection</h2>

              <div className='flex justify-between md:flex-row flex-col items-center md:gap-5 gap-3'>
                <button
                  className='border font-semibold border-rose-500 text-rose-500 rounded-md flex justify-center items-center gap-2 p-3 hover:bg-rose-500 hover:text-white transition-all flex-1 w-full disabled:pointer-events-none disabled:border-gray-500 disabled:text-gray-500'
                  onClick={() => clearCollectionStorage()}
                  disabled={pokemonsCollection.length === 0}
                >
                  <BsTrash className='w-5 h-5' />
                  Clear collection
                </button>
                <ModalChart />
              </div>

            </header>


            <div className=' md:mt-10 mt-4 flex flex-col gap-10 md:p-6 p-10 md:pt-4 pt-8 h-[370px] overflow-y-scroll'>
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


export const ModalChart = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className='font-semibold text-white rounded-md flex justify-center items-center gap-2 p-3 bg-purple-700 hover:bg-purple-800 transition-all flex-1 w-full disabled:pointer-events-none disabled:bg-gray-500'
        onClick={() => setOpen(true)}
      >
        <BsBarChart className='w-5 h-5' />
        See chart
      </button>

      {
        open && (

          <div className='fixed top-0 w-screen h-screen z-50 left-0 flex justify-center items-center'>

            <div
              onClick={() => setOpen(false)}
              className='bg-black/50 backdrop-blur-md w-screen h-screen z-10 absolute top-0 left-0'
            />
            <div className='bg-gray-50 rounded -md shadow-2xl shadow-black/50 z-30 md:max-w-[500px] w-11/12 relative overflow-hidden'>
              <button
                className='rounded-full bg-rose-500 hover:bg-rose-600 text-white absolute right-3 top-3'
                onClick={() => setOpen(false)}
              >
                <BsX className='w-8 h-8' />
              </button>
              <span className='scroll-m-20 p-10 pb-10 pt-5  block  text-center text-3xl font-bold tracking-tight first:mt-0'>Types of pokémon according to the count in my collection</span>
              <div className='overflow-y-scroll p-10 pt-0 h-[300px] mb-5 bg-gray-100 w-[500px] overflow-scroll'>
                <ChartCollection />
              </div>
            </div>
          </div>
        )
      }

    </>
  )
}