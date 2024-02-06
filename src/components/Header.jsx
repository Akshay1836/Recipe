import React from 'react'


const Header = (props) => {
  return (
    <div className='w-screen h-screen relative'>
      <div className='relative w-full h-screen top-0'>
        <img src="../src/images/bg4.jpg"
          alt='Hero Image'
          className='w-full h-screen object-cover'
        />
      </div>

      <div className='absolute w-screen h-screen bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-20 md:pt-16'>
        <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>{props.title}</h1>
        {
          props.type&&(
            <p className='text-lg md:text-md mt-4 text-center text-lime-100 bg-[#00000090] px-6 py-4 rounded-full font-serif'>Welcome to Zamaaras, your passport to culinary adventures!
              <br className='hidden md:block' /> Discover a treasure trove of
              delectable recipes from around the globe.</p>
          )
        }
      </div>
    </div>
  )
}

export default Header