import PropType from 'prop-types'
import { BiLoaderCircle, BiSearch } from 'react-icons/bi'
import { useForm } from 'react-hook-form'

export const SearchInput = ({ onSearch, isLoading }) => {

  const form = useForm({ defaultValues: { name: '' } })

  const handleSubmit = (data) => onSearch(data.name)

  return (
    <section className='my-10'>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className='flex bg-gray-300 w-full rounded-md border-[2px] border-black/50 focus:border-transparent justify-center items-center' >
          <input
            {...form.register('name', { required: true })}
            type="text"
            className='flex-1 p-3 bg-transparent text-3xl text-black font-semibold rounded-md outline-none'
            placeholder='Pokémon name'
            disabled={isLoading}
          />
          {
            isLoading
              ? <BiLoaderCircle className='w-8 h-8 mr-3 animate-spin text-purple-800' />
              : <BiSearch className='w-8 h-8 mr-3' />
          }
        </div>
        {form.formState.errors?.name && (
          <p className='font-semibold text-rose-600 text-sm mt-2'>Name is required</p>
        )}
      </form>
    </section>
  )
}

SearchInput.propTypes = {
  onSearch: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
}