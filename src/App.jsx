import { useState } from 'react'
import { Header } from './components/header'
import { PokemonDetails } from './components/pokemon-details'
import { SearchInput } from './components/search-input'

const App = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [pokemon, setPokemon] = useState(null)

  const handleSearch = async (name = '') => {
    if (name.trim().length === 0) return null
    try {
      setError(false)
      setIsLoading(true)
      const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)).json()
      setPokemon(data)
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='container mx-auto py-5'>

      <Header />

      <SearchInput
        onSearch={handleSearch}
        isLoading={isLoading}
      />
      {isLoading && <span>Search results</span>}
      {error && <span>Pokemon not found</span>}
      {(pokemon && !error && !isLoading) && <PokemonDetails pokemon={pokemon} />}
    </div>
  )
}
export default App

