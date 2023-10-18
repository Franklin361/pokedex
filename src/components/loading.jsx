import PropTypes from 'prop-types'

export const LoadingPokemon = ({ isLoading }) => {
  return (
    <>
      {
        isLoading && (
          <div className='flex justify-center items-center gap-5 flex-col animate-fade-in'>
            <span className='text-center font-bold block text-3xl text-gray-400 animate-pulse'>Search results...</span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/419/419467.png"
              alt="loading"
              className='animate-spin w-16 h-16'
            />
          </div>
        )
      }
    </>
  )
}

LoadingPokemon.propTypes = {
  isLoading: PropTypes.bool.isRequired
}