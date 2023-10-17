import { useState } from 'react'
import { BsBarChart, BsCheck, BsCircle, BsCollection, BsEye, BsTrash } from 'react-icons/bs'

export const Drawer = () => {

  const [open, setOpen] = useState(!false)

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
            {/* start of header sidebar */}
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
            {/* end of header sidebar */}


            {/* start of list of items */}
            <div className=' mt-10 flex flex-col gap-10 px-8 pt-4 pb-20 h-[370px] overflow-y-scroll'>
              <PokemonItemDrawer />
              <PokemonItemDrawer />
              <PokemonItemDrawer />
              <PokemonItemDrawer />
            </div>
            {/* end of list of items */}
            <div className='absolute bottom-0 ease-in-out left-0 w-full bg-black/80 p-5 flex justify-center items-center gap-5'>
              <button className='flex-1 flex justify-center items-center gap-2 border border-black bg-purple-700 hover:bg-purple-800 font-semibold p-2 rounded-md text-white'>
                <BsCircle />
                Clear selection
              </button>
              <button className='flex-1 flex justify-center items-center gap-2 border border-black bg-rose-500 hover:bg-rose-600 font-semibold p-2 rounded-md text-white'>
                <BsTrash />
                Remove selected
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export const PokemonItemDrawer = () => {
  return (
    <div className='border-2 border-black rounded-md p-5 grid grid-cols-[100px,1fr] gap-10 relative'>

      <label className='absolute -right-4 -top-4'>
        <input type="checkbox" className='hidden check' />
        <div className='w-10 h-10 flex justify-center items-center rounded-full border bg-gray-100 border-black/80 cursor-pointer '>
          <BsCheck className='w-10 h-10 text-green-500 icon-checked hidden' />
        </div>
      </label>

      <img
        src='https://cdn-icons-png.flaticon.com/128/1752/1752681.png'
        className='w-full h-auto'
      />
      <div className='flex flex-col justify-between'>
        <span className='font-bold text-xl'>Pokémon title</span>

        <div className='flex justify-center items-center gap-5'>

          <button className='flex-1 flex justify-center items-center gap-2 bg-purple-700 hover:bg-purple-800 font-semibold p-2 rounded-md text-white'>
            <BsEye className='w-4 h-4' />
            Details
          </button>
          <button className='flex-1 flex justify-center items-center gap-2 bg-rose-500 hover:bg-rose-600 font-semibold p-2 rounded-md text-white'>
            <BsTrash className='w-4 h-4' />
            Remove
          </button>
        </div>
      </div>
    </div>

  )
}