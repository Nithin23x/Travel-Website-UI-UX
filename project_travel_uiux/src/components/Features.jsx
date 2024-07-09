import React from 'react'
import { FEATURES } from '../constants'

const Features = () => {
  return (
    <section className='flex-col flexCenter
    overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='max-container padding-container relative 
      w-full flex justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]' >
            <img 
            src='/phone.png' alt='phonemage'
            width={450} height={1000} className='feature-phone'/>
        </div>

        <div className='flex w-full flex-col lg:w-[60%] '>
          <div className='relative lg:bottom-[-53px]'>
              <img 
              src='/camp.svg' alt='campos'
              height={50} width={50}
              className='absolute left-[-5px] top-[-38px] w-10 lg:w-[50px]'
              />
              <h2 className='bold-40 lg:bold-64'> Our Features</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20'>
            {
              FEATURES.map(feature => 
                <FeatureItem  title={feature.title} 
                key={feature.title}
                icon={feature.icon}
                description={feature.description} 
               varaint={feature.variant} />
              )
            }
          </ul>
        </div>
        
      </div>

    </section>
  )
}

const FeatureItem = ({title,icon,description,varaint}) => {
    return(
      <li className='flex w-full flex-col flex-1 items-start'>
        <div className='rounded-full p-4 lg:p-7  lg:mb-[-10px]'>
            <img src='/public/play.svg' height={50} width={90} />
        </div>
        <h2 className='bold-32 lg:bold-24 mt-2 capitalize'>{title} </h2>
        <p className='regular-24 mt-3 text-gray-600'>{description}</p>
      </li>
    )
}

export default Features