import React from 'react'
import { DATA_SECURITY } from '../utils/Helper'
import Heading from '../common/Heading'
import CustomButton from '../common/CustomButton'

const DataSecurity = () => {
  return (
      <div className='xl:pt-[74px] xl:pb-[164px] md:py-12 pt-6 pb-8 bg-off-white'>
          <div className='container'>
              <div className='flex justify-between max-lg:flex-wrap'>
                  <div>
                      <img src="/assets/images/png/data-security-image.png" alt="data" className='max-w-[600px] w-full' />
                  </div>
                  <div className='max-w-[552px] w-full flex items-center gap-12'>
                      <div className='w-full flex lg:justify-end'>
                          <div>
                              <Heading text="Data Security and Hosting" classStyle="pb-2" />
                              {DATA_SECURITY.map((data, index) => (
                                  <div key={index} className='relative after:w-1 after:h-1 after:rounded-full after:bg-dark-blue after:top-2 md:after:top-[14px] after:left-2 after:absolute after:content-[""]'>
                                      <p className='font-normal md:text-base text-sm md:leading-7 text-deep-blue pl-6 pb-2 max-w-[512px]'>{data}</p>
                                  </div>
                              ))}
                              <CustomButton text="Get a demo" classStyle="mt-4" />
                       </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default DataSecurity