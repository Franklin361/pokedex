import { Toaster } from 'react-hot-toast';
import { PokemonNotFound } from './components/error';
import { Header } from './components/header';
import { LoadingPokemon } from './components/loading';
import { PokemonDetails } from './components/pokemon-details';
import { SearchInput } from './components/search-input';
import { usePokemon } from './hook/usePokemon';

const App = () => {

  const {
    isLoading,
    error,
    pokemon,
    handleSearch
  } = usePokemon()

  return (
    <div className='lg:max-w-[900px] md:max-w-[700px] max-w-[400px] mx-auto md:my-10 my-5'>

      <Header />

      <SearchInput
        onSearch={handleSearch}
        isLoading={isLoading}
      />

      <LoadingPokemon isLoading={isLoading} />
      <PokemonNotFound error={error} />

      {
        (pokemon && !error && !isLoading) && <PokemonDetails pokemon={pokemon} />
      }

      <Toaster toastOptions={{
        duration: 1500,
        position: 'bottom-left',
        id: 'unique',
        className: 'bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white'
      }} />
    </div>
  )
}
export default App

