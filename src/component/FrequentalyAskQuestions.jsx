import React, { useState } from 'react'
import Heading from '../common/Heading'
import { KEY_INTRODUCTION } from '../utils/Helper'
import { FREQUENTLY_ASK_QUESTIONS } from '../utils/Helper'
import CustomButton from '../common/CustomButton'

const FrequentalyAskQuestions = () => {
    const [accoActive, setAccoActive] = useState(2);

    const toggleAccordion = (index) => {
        setAccoActive(accoActive === index ? null : index);
    };
    return (
        <div className='bg-off-white xl:pt-[400px] lg:pt-[320px] md:pt-[200px] sm:pt-[175px] pt-[295px] md:pb-12 pb-6 xl:pb-[74px]'>
            <div className='container'>
                <div className='flex xl:gap-12 gap-8 max-lg:flex-wrap'>
                    <div className='lg:w-[50%] xl:w-[600px] w-full flex max-lg:justify-center lg:sticky h-fit top-4'>
                        <img className='max-w-[600px] w-full rounded-lg' src="/assets/images/webp/girl-image.webp" alt="women-image" />
                    </div>
                    <div className='xl:max-w-[552px] w-full lg:w-[50%]'>
                        <Heading text="Key Q&A" classStyle="pb-2 max-lg:!text-center" />
                        <div className='pb-4'>
                            {KEY_INTRODUCTION.map((introduction, index) => (
                                <div key={index} className='relative after:w-1 after:h-1 after:rounded-full after:bg-dark-blue after:top-2 md:after:top-[14px] after:left-2 after:absolute after:content-[""]'>
                                    <p className='font-normal md:text-base text-sm md:leading-7 text-deep-blue pl-6 pb-2 lg:max-w-[512px]'>{introduction}</p>
                                </div>
                            ))}
                        </div>
                        <div className='!duration-700 !transition-all !ease-in-out'>
                            {FREQUENTLY_ASK_QUESTIONS.map((obj, index) => (
                                <div key={index} onClick={() => toggleAccordion(index)} class="border-b border-b-gray !transition-all !ease-in-out !duration-700 cursor-pointer">
                                    <div className='flex xl:gap-6 gap-5 items-center'>
                                        <div className='flex flex-col w-full border-t border-t-gray'>
                                            <div className={`flex items-center ${accoActive !== index ? '!justify-between' : 'justify-between'}`}>
                                                <p className='font-medium text-lg text-deep-blue lg:py-4 py-3'>{obj.question}</p>
                                                <img src="/assets/images/svg/down-arrow.svg" alt="down" className={`flex lg:w-6 lg:h-6 w-4 pointer-events-none ${accoActive !== index ? '' : 'rotate-180'}`} />
                                            </div>
                                            <div className={`pb-4 transition-all duration-1000 ease-in-out ${accoActive !== index ? '!h-0 opacity-0 duration-100' : 'overflow-auto h-full duration-1000'}`}>
                                                    <div className='transition-all ease-in-out duration-1000'>
                                                        <p className='font-normal text-base leading-7 text-deep-blue lg:max-w-[552px] pb-2'>{obj.answer}</p>
                                                        <p className='font-normal text-base leading-7 text-deep-blue lg:max-w-[552px] pb-4'>{obj.secondAnswer}</p>
                                                        <div className='flex justify-between flex-wrap gap-2'>
                                                            <img src="/assets/images/webp/color-image.webp" alt="color" className='xl:max-w-[268px] w-full pointer-events-none' />
                                                            <img src="/assets/images/webp/water-drops-image.webp" alt="drop" className='xl:max-w-[268px] w-full pointer-events-none' />
                                                        </div>
                                                        <p className='font-normal text-base leading-7 text-deep-blue lg:max-w-[552px] pt-4'>{obj.secondAnswer}</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <CustomButton text="Get a demo" classStyle="mt-6" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrequentalyAskQuestions