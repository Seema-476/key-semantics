import React from 'react'

const Heading = ({ text, classStyle }) => {
    return (
        <h2 className={`font-bold xl:text-custom-xl sm:text-3xl text-2xl leading-custom-2xl sm:leading-custom-3xl xl:leading-custom-4xl text-deep-blue ${classStyle}`}>
            {text}</h2>
    )
}

export default Heading