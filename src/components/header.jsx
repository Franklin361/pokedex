

import { Drawer } from './drawer'

export const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Pokédex (VINCO ORBIS)
      </h1>
      <Drawer />
    </header>

  )
}