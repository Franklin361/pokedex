

import { Drawer } from './drawer'

export const Header = () => {
  return (
    <header className='flex md:justify-between justify-center items-center md:flex-row flex-col md:gap-0 gap-5'>
      <div className='flex md:gap-5 gap-2 items-center justify-center flex-wrap'>
        <img
          src="https://cdn-icons-png.flaticon.com/128/528/528101.png"
          className='w-12 h-12 animate-bounce'
        />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl md:text-start text-center">
          Pokedex (VINCO ORBIS)
        </h1>
      </div>
      <Drawer />
    </header>

  )
}