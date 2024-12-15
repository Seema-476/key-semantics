import React, { useState } from 'react'
import Heading from '../common/Heading'
import { KEY_INDRODUTION } from '../utils/Helper'
import { FREQUENTLY_ASK_QUESTIONS } from '../utils/Helper'
import CustomButton from '../common/CustomButton'

const FrequentalyAskQuestions = () => {
    const [accoActive, setAccoActive] = useState(0);

    const toggleAccordion = (index) => {
        setAccoActive(accoActive === index ? null : index);
    };
    return (
        <div className='bg-off-white'>
            <div className='container'>
                <div className='flex lg:gap-12 gap-9 max-lg:flex-wrap'>
                    <div>
                        <img src="/assets/images/png/girl-image.png" alt="girl" className='max-w-[600px] w-full' />
                    </div>
                    <div className='max-w-[552px] w-full'>
                        <Heading text="Key Q&A" classStyle="pb-2" />
                        <div className='pb-4'>
                            {KEY_INDRODUTION.map((introdution, index) => (
                                <div key={index} className='relative after:w-1 after:h-1 after:rounded-full after:bg-dark-blue after:top-2 md:after:top-[14px] after:left-2 after:absolute after:content-[""]'>
                                    <p className='font-normal md:text-base text-sm md:leading-7 text-deep-blue pl-6 pb-2 max-w-[512px]'>{introdution}</p>
                                </div>
                            ))}
                        </div>
                        <div className='!duration-700 !transition-all !ease-in-out'>
                            {FREQUENTLY_ASK_QUESTIONS.map((obj, index) => (
                                <div key={index} onClick={() => toggleAccordion(index)} class="border-b border-b-gray !transition-all !ease-in-out !duration-700 cursor-pointe">
                                    <div className='flex xl:gap-6 gap-5 items-center'>
                                        <div className='flex flex-col w-full'>
                                            <div className={`flex items-center ${accoActive !== index ? '!justify-between' : 'justify-between'}`}>
                                                <p className='font-medium text-lg text-deep-blue py-4'>{obj.question}</p>
                                                <img src="/assets/images/svg/down-arrow.svg" alt="down" className={`flex w-6 h-6 ${accoActive !== index ? '' : 'rotate-180'}`} />
                                            </div>
                                            {accoActive === index && (
                                                <div className='pb-4'>
                                                    {obj.content.map((value, item) => (
                                                        <div key={item}>
                                                            <p className='font-normal text-base leading-7 text-deep-blue max-w-[552px] pb-2'>{value.answer}</p>
                                                            <p className='font-normal text-base leading-7 text-deep-blue max-w-[552px] pb-4'>{value.secondAnswer}</p>
                                                            <div className='flex justify-between'>
                                                                <img src="/assets/images/png/girl-image.png" alt="girl" className='max-w-[268px]' />
                                                                <img src="/assets/images/png/girl-image.png" alt="girl" className='max-w-[268px]' />
                                                            </div>
                                                                <p className='font-normal text-base leading-7 text-deep-blue max-w-[552px] pt-4'>{value.secondAnswer}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        < CustomButton text="Get a demo" classStyle="mt-6"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrequentalyAskQuestions