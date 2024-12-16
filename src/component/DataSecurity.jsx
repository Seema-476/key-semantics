import React from 'react'
import { DATA_SECURITY } from '../utils/Helper'
import CommonCard from '../common/CommonCard'

const DataSecurity = () => {
  return (
      <div className='xl:pt-[74px] xl:pb-[164px] md:py-12 pt-6 pb-8 bg-off-white'>
          <div className='container'>
              <div className='flex justify-between lg:gap-12 gap-8 max-lg:flex-wrap'>
                  <div className='lg:max-w-[600px]'>
                      <img src="/assets/images/webp/data-security-image.webp" alt="data" className='lg:max-w-[600px] w-full pointer-events-none' />
                  </div>
                  <div className='lg:max-w-[552px] w-full flex items-center gap-12'>
                      <div className='w-full flex lg:justify-end'>
                          <div>
                              <CommonCard classList="!text-left" heading="Data Security and Hosting" text="Get a demo" list={DATA_SECURITY} />
                       </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default DataSecurity