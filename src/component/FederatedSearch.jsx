import React from 'react'
import Heading from '../common/Heading'
import { FEDERATED_SEARCH } from '../utils/Helper'
import CustomButton from '../common/CustomButton'

const FederatedSearch = () => {
  return (
      <div className='xl:pb-[74px] md:pb-12 pb-6 bg-off-white'>
          <div className='container'>
              <div className='flex justify-between max-lg:flex-wrap'>
                  <div className='max-w-[552px] w-full flex gap-12'>
                      <div className='w-full'>
                          <Heading text="Headless federated search" classStyle="pb-2"/>
                          {FEDERATED_SEARCH.map((federated, index) => (
                              <div key={index} className='relative after:w-1 after:h-1 after:rounded-full after:bg-dark-blue after:top-2 md:after:top-[14px] after:left-2 after:absolute after:content-[""]'>
                                  <p className='font-normal md:text-base text-sm md:leading-7 text-deep-blue pl-6 pb-2 max-w-[542px]'>{federated}</p>
                              </div>
                          ))}
                          <CustomButton text="Get a demo" classStyle="mt-4"/>
                      </div>
                  </div>
                  <div>
                      <img src="/assets/images/png/federated-image.png" alt="federated" className='max-w-[600px] w-full' />
                  </div>
             </div>
          </div>
    </div>
  )
}

export default FederatedSearch