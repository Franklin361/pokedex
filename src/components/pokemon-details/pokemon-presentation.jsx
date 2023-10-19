import PropTypes from 'prop-types'

export const PokemonPresentation = (props) => {
  return (
    <div className='border rounded border-black p-5 flex justify-center items-center flex-col bg-gray-50'>

      <span className='font-bold text-3xl mb-5 uppercase'>{props.name}</span>

      <img
        src={props.img_pokemon}
        className='w-48 h-auto'
      />

      <div className='flex justify-between items-center overflow-x-scroll mt-3'>
        {props?.front_default && <img src={props.front_default} className='' alt="back_default" />}
        {props?.back_default && <img src={props.back_default} className='' alt="back_default" />}
        {props?.front_shiny && <img src={props.front_shiny} className='' alt="back_default" />}
        {props?.back_shiny && <img src={props.back_shiny} className='' alt="back_default" />}
      </div>

      <div className='flex gap-5 mt-5 items-center'>
        <p>Height: <span className='font-bold ml-1'>{props.height}  inch</span></p>
        <p>Weight: <span className='font-bold ml-1'>{props.weight}  lb</span></p>
      </div>
    </div>
  )
}

PokemonPresentation.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  img_pokemon: PropTypes.string.isRequired,
  front_default: PropTypes.string,
  back_default: PropTypes.string,
  front_shiny: PropTypes.string,
  back_shiny: PropTypes.string,
}