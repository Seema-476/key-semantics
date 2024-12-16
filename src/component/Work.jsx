import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { WORK_LIST } from '../utils/Helper'
import Lottie from 'react-lottie-player'

const Work = () => {
    return (
        <div className='xl:pt-24 md:pt-16 pt-10 pb-6 overflow-hidden'>
            <div className='container'>
                <Heading text="How does KeySemantics work?" classStyle="text-center xl:pb-14 md:pb-10 pb-8" />
                <div className='flex xl:gap-24 lg:gap-16 md:gap-9 gap-6 max-lg:flex-wrap justify-center'>
                    {WORK_LIST.map((item, index) => (
                        <div key={index} className='max-w-[278px]'>
                            <div className="max-w-[278px] min-h-[190px]">
                                <Lottie
                                    loop
                                    animationData={item.lottietext}
                                play/>
                            </div>
                            <div className='text-center max-w-[278px]'>
                                <Description text={item.description} classStyle="text-center md:pt-6 pt-3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work