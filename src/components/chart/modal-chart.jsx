import { useState } from 'react'
import { BsBarChart, BsX } from 'react-icons/bs'
import { ChartCollection } from './chart'

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
            <div className='bg-gray-50 rounded -md shadow-2xl shadow-black/50 z-30 md:max-w-[500px] w-11/12 relative overflow-hidden custom-bg-modal-chart'>
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