import { useState } from 'react'
import { getPokemonByName } from '../service/pokemon'

export const usePokemon = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [pokemon, setPokemon] = useState(null)

  const handleSearch = async (name = '') => {
    if (name.trim().length === 0) return null

    try {
      setError(false)
      setIsLoading(true)
      const data = await getPokemonByName(name)
      setPokemon(data)
    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }
  return {
    isLoading,
    error,
    pokemon,
    handleSearch
  }
}