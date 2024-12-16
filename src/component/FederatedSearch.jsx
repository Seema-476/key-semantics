import React from 'react'
import { FEDERATED_SEARCH } from '../utils/Helper'
import CommonCard from '../common/CommonCard'

const FederatedSearch = () => {
  return (
      <div className='xl:py-[74px] md:py-12 py-6 bg-off-white'>
          <div className='container'>
              <div className='flex justify-between max-lg:flex-wrap max-lg:flex-col-reverse lg:gap-12 gap-8'>
                  <div className='lg:max-w-[552px] w-full flex'>
                      <div className='w-full'>
                          <div>
                              <CommonCard classList="!text-left" heading="Headless federated search" text="Get a demo" list={FEDERATED_SEARCH} />
                          </div>
                      </div>
                  </div>
                  <div>
                      <img src="/assets/images/webp/federated-image.webp" alt="federated" className='lg:max-w-[600px] w-full pointer-events-none' />
                  </div>
             </div>
          </div>
    </div>
  )
}

export default FederatedSearch