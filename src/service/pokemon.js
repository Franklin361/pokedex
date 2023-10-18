
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemonByName = async (name = '') => {
  return await (await fetch(`${BASE_URL}/${name.toLowerCase()}`)).json()
}