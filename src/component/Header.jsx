import React from 'react'
import CustomButton from '../common/CustomButton'

const Header = () => {
  return (
      <div>
          <div className='container'>
              <div className='flex justify-between items-center lg:py-[47px] py-6'>
                  <img src="/assets/images/webp/keysemantics-logo.webp" alt="logo" className='lg:w-[248px] md:w-[200px] w-[150px]' />
                  <CustomButton text="Request demo"/>
              </div>
          </div>
    </div>
  )
}

export default Header