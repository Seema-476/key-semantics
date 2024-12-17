import React from "react";
import Heading from '../common/Heading';
import CustomButton from "../common/CustomButton";

const CommonCard = ({ heading, list, text, classList }) => {
    return (
        <div className={`${classList}p-6`}>
            <Heading text={heading} />
            <ul className="lg:pb-6 pb-5 max-w-[552px] lg:ml-4 pt-5 ">
                {list && list.map((item, index) => (
                    <li key={index} className="list-disc text-deep-blue pb-2 lg:text-base text-sm font-normal lg:leading-7 max-lg:ml-4">
                        {item}
                    </li>
                ))}
            </ul>
            <CustomButton text={text} />
        </div>
    );
};

export default CommonCard;