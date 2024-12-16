import React from 'react'
import Lottie from 'react-lottie-player'
import semantics from '../lottie/semantics.json'
import semanticsMobile from '../lottie/semantics-mobile-view.json'

const KeySemantics = () => {
  return (
    <div className='xl:-mb-[294px] lg:-mb-[250px] md:-mb-[185px] sm:-mb-[135px] -mb-[270px]'>
      <div className='container'>
        <div className='max-w-[1200px] w-full sm:block hidden'>
          <Lottie
            loop
            animationData={semantics}
            play
          />
        </div>
        <div className='max-w-[1200px] w-full sm:hidden'>
          <Lottie
            loop
            animationData={semanticsMobile}
            play
          />
        </div>
      </div>
    </div>
  )
}

export default KeySemantics