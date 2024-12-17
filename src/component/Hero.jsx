import React from 'react'
import Header from './Header'
import CustomButton from '../common/CustomButton'

const Hero = () => {
  return (
      <div className='bg-hero-bg bg-center bg-cover bg-no-repeat bg-silver-gray'>
      <Header />
      <div className='container xl:pt-[151px] lg:pt-28 md:py-16 py-10 lg:pb-52 xl:pb-[287px]'>
        <h1 className='font-bold lg:text-custom-2xl sm:text-4xl text-2xl leading-custom-2xl sm:leading-custom-3xl lg:leading-custom-4xl text-deep-blue text-center'>AI-Powered Search <span className='block'>as a Service</span></h1>
          <p className='font-medium lg:text-2xl text-base text-deep-blue text-center xl:pt-10 md:py-9 py-5 xl:pb-12'>Unlock your content with KeySemantics.</p>
          <div className='text-center'>
          <CustomButton text="Get started" classStyle="lg:!py-5 lg:!px-8 bg-deep-blue xl:!text-base xl:!leading-custom-xl text-white py-2 px-3 hover:scale-95 duration-700" />
          </div>
      </div>
    </div>
  )
}

export default Hero