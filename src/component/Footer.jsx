import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='bg-dark-blue -mt-[2px] md:py-6 py-4'>
      <div className='container'>
        <div className='flex max-md:flex-col items-center justify-between'>
          <p className='font-normal text-xs leading-7 text-purple max-md:text-center'>©{year} KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau, Switzerland</p>
          <p className='font-normal text-xs leading-7 text-purple underline'>info@keysemantics.ch</p>
        </div>
      </div>
    </div>
  )
}

export default Footer