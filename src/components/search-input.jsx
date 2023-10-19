import PropType from 'prop-types'
import { BiLoaderCircle, BiSearch } from 'react-icons/bi'
import { useForm } from 'react-hook-form'

export const SearchInput = ({ onSearch, isLoading }) => {

  const form = useForm({ defaultValues: { name: '' } })

  const handleSubmit = (data) => onSearch(data.name)

  return (
    <section className='my-10'>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className='md:flex grid grid-cols-[1fr,auto] bg-gray-50 w-full rounded-md border-[2px] border-black/50 justify-center items-center shadow-lg shadow-black/50' >
          <input
            {...form.register('name', { required: true })}
            autoFocus
            type="text"
            className='flex-1 w-full md:p-3 p-2 md:pl-5 bg-transparent md:text-3xl text-xl text-black font-semibold rounded-md outline-none'
            placeholder='Pokemon name'
            disabled={isLoading}
          />
          {
            isLoading
              ? <BiLoaderCircle className='md:w-8 w-5 md:h-8 h-5 mr-3 animate-spin text-purple-800' />
              : <BiSearch className='md:w-8 w-5 md:h-8 h-5 mr-3' />
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