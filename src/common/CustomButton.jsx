import React from 'react'

const CustomButton = ({ text, classStyle, }) => {
    return (
        <button className={`font-normal text-sm text-deep-blue md:py-3 md:px-4 py-2 px-3 border border-deep-blue rounded-[48px] hover:border-transparent hover:bg-deep-blue hover:text-white duration-700 ${classStyle}`}>
            {text}
        </button>
    )
}

export default CustomButton