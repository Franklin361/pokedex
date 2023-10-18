import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCollectionPokemonStore = create(
  persist(
    (set, get) => ({
      pokemons: [],
      addPokemon: (pokemon) => {
        const existPokemon = get().pokemons.some(currentPokemon => currentPokemon.id === pokemon.id)

        if (existPokemon) {
          toast.success('This pokemon is already in your collection')
          return
        }

        set(state => ({ pokemons: [...state.pokemons, pokemon] }))
        toast.success(`${pokemon.name} is added to collection`)
      },
      removePokemon: (idPokemon) => {
        set(state => ({ pokemons: state.pokemons.filter(pokemon => pokemon.id !== idPokemon) }))
        toast.success(`Pokemon was removed from collection`)
      },
      clearCollectionStorage: () => {
        set({ pokemons: [] })
        toast.success(`All Pokemons was removed from collection`)
      }
    }),
    {
      name: 'collection-storage'
    }
  )
)