import React from 'react'
import Header from './Header'
import CustomButton from '../common/CustomButton'

const Hero = () => {
  return (
      <div className='bg-hero-bg bg-center bg-cover bg-no-repeat relative z-30'>
      <Header />
      <div className='container pt-[151px] pb-[287px]'>
          <h1 className='font-bold text-custom-2xl leading-custom-4xl text-deep-blue text-center'>AI-Powered Search <span className='block'>as a Service</span></h1>
          <p className='font-medium text-2xl text-deep-blue text-center pt-10 pb-12'>Unlock your content with KeySemantics.</p>
          <div className='text-center'>
            <CustomButton text="Get started" classStyle="!py-5 !px-8 bg-deep-blue text-white" />
          </div>
      </div>
      <div className='flex items-center justify-center'>
        <img src="/assets/images/webp/hero-bg-form.webp" alt="form" className='max-w-[498px] absolute bottom-0 z-10' />
      </div>
    </div>
  )
}

export default Hero