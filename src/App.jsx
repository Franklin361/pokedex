import { Header } from './components/header'
import { ListPokemon } from './components/list-pokemon'
import { SearchInput } from './components/search-input'

const App = () => {
  return (
    <div className='container mx-auto py-5'>

      <Header />

      <SearchInput />

      <ListPokemon />
    </div>
  )
}
export default App

