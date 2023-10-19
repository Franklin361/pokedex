

import { Drawer } from './drawer'

export const Header = () => {
  return (
    <header className='flex md:justify-between justify-center items-center md:flex-row flex-col md:gap-0 gap-5'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl md:text-start text-center">
        Pokedex (VINCO ORBIS)
      </h1>
      <Drawer />
    </header>

  )
}