import { useCollectionPokemonStore } from '../store/collection-store'

export const ChartCollection = () => {

  const pokemons = useCollectionPokemonStore(state => state.pokemons)

  const totalTypes = pokemons.map(pokemon => {
    return pokemon.types.map(({ type }) => type.name)
  }).flat()

  const headers = [...new Set(...totalTypes)]

  const rows = totalTypes.reduce((prev, next) => {
    if (prev[next]) prev[next] = prev[next] + 1
    else prev[next] = 1
    return prev
  }, {})

  return (
    <>
      <table className="charts-css bar show-heading show-primary-axis data-spacing-5 show-labels ">
        <thead>
          <tr>
            {
              headers.map(head => (
                <th scope="col" key={head}> {head} </th>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {
            Object.entries(rows).map(tag => (
              <tr key={tag[0]}>
                <th scope="row"> {tag[0]} </th>
                <td style={{ "--size": `${tag[1] / 10}` }}> <span className="data font-bold"> {tag[1]} </span> </td>
              </tr>
            ))
          }
        </tbody>

      </table>

    </>
  )
}