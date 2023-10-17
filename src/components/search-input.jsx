import { BiSearch } from 'react-icons/bi'

export const SearchInput = () => {
  return (
    <section className='my-10'>
      <form>
        <div className='flex bg-gray-300 w-full rounded-md border-[2px] border-black/50 focus:border-transparent justify-center items-center' >
          <input
            type="text"
            className='flex-1 p-3 bg-transparent text-3xl text-black font-semibold rounded-md outline-none'
            placeholder='Pokémon name'
          />
          <BiSearch className='w-8 h-8 mr-3' />
        </div>
      </form>
    </section>
  )
}