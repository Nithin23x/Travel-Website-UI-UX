import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
   <section className=' max-container 
   padding-container flex flex-col  xl:flex-row gap-20 md:gap-28 py-10   '>

      <div className='hero-map'/>

      <div className='relative z-20 flex flex-col py-2  xl:w-1/2'>
          <img
            src='/public/camp.svg'
            alt='camp' height={50} width={50}
            className='absolute left-[-5px] top-[-30px]'
          />

          <h1 className='bold-52 lg:bold-88 '>Savannah Forest Camp Area </h1>
          <p className='regular-16 mt-6 text-gray-30 xl:max-w-[620px] '>We want to be on each of your journeys seeking the satisfaction of seeing the 
              incorruptible beauty of nature.
             We can help you on an adventure around the world in just one app
          </p>

          <div className='my-11   flex justify-start mr-auto'>
              <div className='flex items-center'>
                {
                  Array(5).fill(1).map((_,index) => (
                    <img src='/star.svg' key={index} alt='stars' 
                    height={25} width={25}/>
                  ))
                }
              </div>

              <p className='bold-16 lg:bold-20 text-blue-500 ml-1'> 198K <span className=' ml-1 underline hover:font-bold'>Postive Reviews </span> </p>
          </div>

          <div className='w-full flex flex-col sm:flex-row gap-6 '>
                <Button
                  type='button'
                  title='Download App'
                  variant='btn_green'
                />

                <Button
                  type='button'
                  title="How this works?"
                  icon='/public/play.svg'
                  variant="btn_white_text hover:bg-indigo-400"
                />
          </div>

      </div>
        
      <div className='relative flex flex-1 items-start'>
          <div className='relative z-20 w-[268px] flex flex-col 
          gap-8 rounded-3xl bg-green-90 px-7 py-8 '>
              <div className='flex flex-col'>
                <div className='flexBetween'>
                  <p className='regular-16 text-gray-300'>Location </p>
                  <img src='/close.svg' />
                </div>
                <p className='bold-20 text-white'> Nordschcliffe</p>
              </div>

              <div className='flexBetween'>
                <div className="flex-col">
                    <p className='regular-16 text-gray-30'>Distance </p>
                    <p className="bold-20 text-white">443KM</p>
                </div>

                <div className="flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white"> 2.560KM</p>
                </div>

                <div>

                </div>
              </div>

          </div>

      </div>

   </section>
  )
}

export default Hero