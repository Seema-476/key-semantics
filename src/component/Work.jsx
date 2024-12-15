import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'

const Work = () => {
  return (
      <div className='xl:pt-24 md:pt-16 pt-10 pb-6'>
          <div className='container'>
              <Heading text="How does KeySemantics work?" classStyle="text-center pb-14" />
              <div className='flex xl:gap-24 lg:gap-16 md:gap-9 gap-6 max-lg:flex-wrap justify-center'>
                  <div className='max-w-[278px]'>
                      <div className='bg-levender max-w-[278px] pt-[38px] pb-[37px] px-9 flex items-center justify-center'><img src="/assets/images/svg/documents.svg" alt="documents" /></div>
                      <div className='text-center max-w-[278px]'>
                          <Description text="Websites, documents and images are pushed into our Analysis API."
                              classStyle="text-center md:pt-6 pt-3" />
                      </div>
                  </div>
                  <div className='max-w-[278px]'>
                      <div className='bg-ice-blue max-w-[278px] pt-[38px] pb-[37px] px-9 flex items-center justify-center'><img src="/assets/images/svg/optimized.svg" alt="optimized" /></div>
                      <div className='text-center'>
                          <Description text="Using highly optimized and trained AI models, we analyze, vectorize and extract semantic information relations from your content."
                              classStyle="text-center md:pt-6 pt-3" />
                      </div>
                  </div>
                  <div className='max-w-[278px] text-center'>
                      <div className='bg-pitch max-w-[278px] pt-[38px] pb-[37px] px-9 flex items-center justify-center'><img src="/assets/images/svg/enterprise-grade.svg" alt="enterprise" /></div>
                      <div className='text-center'>
                          <Description text="Our enterprise-grade semantic search engine allows you to query your content in many ways. You'll be amazed by the speed, precision and relevance of the results!"
                              classStyle="text-center md:pt-6 pt-3" />
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Work