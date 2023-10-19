import PropTypes from 'prop-types'

export const BaseStats = (props) => {
  return (
    <div>
      <span className='font-bold mb-5 block border-b border-black'>Base Stats</span>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
        <p>Experience: <span className='p-2 rounded-md bg-gray-300'>{props.ex}</span></p>
        <p>HP: <span className='p-2 rounded-md bg-gray-300'>{props.hp}</span></p>
        <p>Attack: <span className='p-2 rounded-md bg-gray-300'>{props.attack}</span></p>
        <p>Defense: <span className='p-2 rounded-md bg-gray-300'>{props.defense}</span></p>
        <p>Special Attack: <span className='p-2 rounded-md bg-gray-300'>{props.specialAttack}</span></p>
        <p>Special Defense: <span className='p-2 rounded-md bg-gray-300'>{props.specialDefense}</span></p>
        <p>Speed: <span className='p-2 rounded-md bg-gray-300'>{props.speed}</span></p>
      </div>
    </div>
  )
}

BaseStats.propTypes = {
  ex: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  specialAttack: PropTypes.number.isRequired,
  specialDefense: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
}