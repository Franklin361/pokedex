
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemonByName = async (name = '') => {
  const res = await fetch(`${BASE_URL}/${name.toLowerCase()}`)
  const responseData = await res.json()

  const pokemon = {
    id: responseData.id,
    name: responseData.name,
    types: responseData.types,
    abilities: responseData.abilities,
    height: responseData.height,
    weight: responseData.weight,
    img_pokemon: `https://img.pokemondb.net/sprites/black-white/anim/normal/${responseData.name}.gif`,
    front_default: responseData?.front_default,
    back_default: responseData?.back_default,
    front_shiny: responseData?.front_shiny,
    back_shiny: responseData?.back_shiny,
    hp: responseData.stats[0]?.base_stat,
    attack: responseData.stats[1]?.base_stat,
    defense: responseData.stats[2]?.base_stat,
    specialAttack: responseData.stats[3]?.base_stat,
    specialDefense: responseData.stats[4]?.base_stat,
    speed: responseData.stats[5]?.base_stat,
    ex: responseData.base_experience,
  }

  return pokemon
}