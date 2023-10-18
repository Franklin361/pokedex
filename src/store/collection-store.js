import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCollectionPokemonStore = create(
  persist(
    (set, get) => ({
      pokemons: [],
      addPokemon: (pokemon) => {
        const existPokemon = get().pokemons.some(currentPokemon => currentPokemon.id === pokemon.id)

        if (existPokemon) return;

        console.log(pokemon.name)
        set(state => ({ pokemons: [...state.pokemons, pokemon] }))
      },
      removePokemon: (idPokemon) => {
        set(state => ({ pokemons: state.pokemons.filter(pokemon => pokemon.id !== idPokemon) }))
      },

    }),
    {
      name: 'collection-storage'
    }
  )
)