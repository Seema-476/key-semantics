import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'

const FormValidation = () => {
  return (
      <div className='bg-deep-blue xl:py-24 lg:py-16 py-12'>
          <div className='container'>
              <Heading text="How does KeySemantics work?" classStyle="text-white text-center pb-2" />
              <Description text="Request a demo for your team and let us show you how KeySemantics can help your company"
                  classStyle="!text-white text-center" />
              <form className='flex flex-col gap-2 xl:pt-16 md:pt-12 pt-7'>
                  <div className='w-full mx-auto text-center'>
                      <input
                          type="name"
                          placeholder='Name'
                          className="sm:py-4 py-3 px-4 sm:px-5 font-normal text-sm placeholder:text-light-purple bg-z-black max-w-[320px] w-full rounded-[48px] outline-none"
                        //   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        //   value={formData.email}
                      />
                      {/* {error.email && <p className="mt-1 text-red-500">{error.email}</p>} */}
                  </div>
                  <div className='w-full mx-auto text-center'>
                      <input
                          type="name"
                          placeholder='Name'
                          className="sm:py-4 py-3 px-4 sm:px-5 font-normal text-sm placeholder:text-light-purple bg-z-black max-w-[320px] w-full rounded-[48px] outline-none"
                      //   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      //   value={formData.email}
                      />
                      {/* {error.email && <p className="mt-1 text-red-500">{error.email}</p>} */}
                  </div>
                  <div className='w-full mx-auto text-center'>
                      <input
                          type="name"
                          placeholder='Name'
                          className="sm:py-4 py-3 px-4 sm:px-5 font-normal text-sm placeholder:text-light-purple bg-z-black max-w-[320px] w-full rounded-[48px] outline-none"
                      //   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      //   value={formData.email}
                      />
                      {/* {error.email && <p className="mt-1 text-red-500">{error.email}</p>} */}
                  </div>
                  <div className='w-full mx-auto text-center'>
                      <input
                          type="name"
                          placeholder='Name'
                          className="sm:py-4 py-3 px-4 sm:px-5 font-normal text-sm placeholder:text-light-purple bg-z-black max-w-[320px] w-full rounded-[48px] outline-none"
                      //   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      //   value={formData.email}
                      />
                      {/* {error.email && <p className="mt-1 text-red-500">{error.email}</p>} */}
                  </div>
                  <p className='font-normal text-custom-base leading-custom-base text-light-purple pt-4 pb-6 text-center'>By submitting my contact information I agree to the KeySemantics Privacy Policy</p>
                  <div className='mx-auto text-center'>
                      <CustomButton text="Request a demo" classStyle="py-4 px-8 text-white bg-sky-blue !border-none"/>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default FormValidation