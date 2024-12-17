import React, { useState } from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import swal from 'sweetalert'
import { FORM_DATA } from '../utils/Helper'

const FormValidation = () => {
    const formState = {
        name: '',
        email: '',
        company: '',
        phone: '',
    };

    const [formData, setFormData] = useState(formState);
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();    
        console.log('Form Data:', formData);
        setFormData(formState);
        swal({
                    title: "Done",
                    text: "Are you sure that you want to leave this page?",
                    icon: "success",
                    dangerMode: true,
                });
    };
    return (
        <div className='bg-deep-blue xl:py-24 lg:py-16 py-12'>
            <div className='container relative'>
                <div className='absolute xl:-top-24 lg:-top-16 z-10 lg:block hidden'><img src="/assets/images/svg/form-left-ellipse.svg" alt="ellipse" /></div>
                <div className='absolute xl:-bottom-24 lg:-bottom-16 right-0 z-10 lg:block hidden'><img src="/assets/images/svg/form-right-ellipse.svg" alt="ellipse" /></div>
                <Heading text="How does KeySemantics work?" classStyle="text-white text-center pb-2 relative z-20" />
                <Description text="Request a demo for your team and let us show you how KeySemantics can help your company"
                    classStyle="!text-white text-center relative z-20" />
                <div className="flex justify-center relative z-20">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-md bg-transparent flex-col xl:pt-16 md:pt-12 pt-7">
                        {FORM_DATA.map((field) => (
                            <div key={field.id} className="mb-2 max-w-[320px] mx-auto">
                                <input
                                    id={field.id}
                                    type="text"
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    value={formData[field.id]}
                                    onChange={handleChange}
                                    className="sm:py-4 py-3 px-4 sm:px-5 font-normal text-sm text-light-purple placeholder:text-light-purple bg-z-black max-w-[320px] w-full rounded-[48px] outline-none"
                                />
                            </div>
                        ))}
                        <p className='font-normal text-custom-base leading-custom-base text-light-purple pt-2 pb-6 text-center'>By submitting my contact information I agree to the KeySemantics Privacy Policy</p>
                        <div className='mx-auto text-center'>
                            <CustomButton text="Request a demo" classStyle="lg:py-4 py-2 px-5 lg:px-8 text-white bg-sky-blue !border-none duration-700 hover:!bg-light-purple" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormValidation