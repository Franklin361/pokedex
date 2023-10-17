
import { BsCollection } from 'react-icons/bs'

export const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Pokédex (VINCO ORBIS)
      </h1>
      <button className='p-3 border border-black flex justify-center items-center gap-2 bg-orange-400 hover:bg-orange-500 font-semibold text-white rounded-lg shadow-lg shadow-black/40'>
        <BsCollection />
        collection
      </button>
    </header>

  )
}