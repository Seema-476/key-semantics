import React from "react";
import Heading from '../common/Heading';
import CustomButton from "../common/CustomButton";

const CommonCard = ({ heading, list, text, classList }) => {
    return (
        <div className={`${classList}p-6`}>
            <Heading text={heading} />
            <ul className="pb-6 max-w-[552px] max-lg:mx-auto lg:ml-4 pt-5 ">
                {list && list.map((item, index) => (
                    <li key={index} className="list-disc text-royal_blue pb-2 text-base font-normal leading-custom_3xl max-lg:ml-4">
                        {item}
                    </li>
                ))}
            </ul>
            <CustomButton text={text} />
        </div>
    );
};

export default CommonCard;