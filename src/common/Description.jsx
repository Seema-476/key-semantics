import React from 'react'


const Description = ({ text, classStyle }) => {
    return (
        <p className={`font-normal md:text-base text-sm md:leading-7 text-deep-blue${classStyle}`}>{text}</p>
    )
}
export default Description