import { BsEye } from 'react-icons/bs'
import { BiSave } from 'react-icons/bi'

export const PokemonItem = () => {
  return (

    <div className='group p-7 flex flex-col justify-center items-center gap-5 rounded-lg overflow-hidden border border-black shadow-lg shadow-black/30 hover:shadow-black/50 transition-all relative'>

      <span className='font-semibold inline-block text-xl '>Pokemon name</span>
      <img
        src='https://cdn-icons-png.flaticon.com/128/1752/1752681.png'
        className='w-24 h-auto'
      />
      <div className='absolute group-hover:bottom-0 -bottom-full ease-in-out left-0 transition-all w-full h-1/4 bg-black/80 p-2 flex justify-center items-center gap-5'>
        <button className='flex-1 flex justify-center items-center gap-2 text-sm border border-black bg-purple-700 hover:bg-purple-800 font-semibold p-1 rounded-md text-white'>
          <BsEye />
          Details
        </button>
        <button className='flex-1 flex justify-center items-center gap-2 text-sm border border-black bg-purple-700 hover:bg-purple-800 font-semibold p-1 rounded-md text-white'>
          <BiSave />
          Save
        </button>
      </div>
    </div>
  )
}