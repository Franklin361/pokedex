import PropTypes from 'prop-types'

export const PokemonNotFound = ({ error }) => {
  return (
    <>
      {
        error && (
          <div className='flex justify-center items-center gap-5 flex-col animate-fade-in'>
            <span className='text-center font-semibold border-b border-black/70 block text-3xl text-gray-500'>
              Sorry, that pokemon could not be found!
            </span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1752/1752875.png"
              alt="not found"
            />
          </div>
        )
      }
    </>
  )
}

PokemonNotFound.propTypes = {
  error: PropTypes.bool.isRequired
}