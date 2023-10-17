import { PokemonItem } from './pokemon-item'

export const ListPokemon = () => {
  return (
    <section>
      <span className='mb-10 inline-block'>Search results:</span>

      <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10'>
        <PokemonItem />
      </div>
    </section>

  )
}