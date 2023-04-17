import { FC } from "react";

interface LabelWorkExperienceProps{
    label: string;
    opacity: boolean;
    date: boolean;
    description: boolean
}

const LabelWorkExperience: FC<LabelWorkExperienceProps> = ({
    label, 
    opacity,
    date,
    description
}) => {

    if (label === null) label=' ';

    return (
        <div className={`
            w-80 
            h-14 
            pl-2 
            ${opacity ? 'bg-opacity-10 text-gray-400' : 'text-white'}
            ${date ? 'w-36' : 'w-80' }
            ${description ? 'h-20' : 'h-14'}
            bg-gray-400
            flex 
            items-center 
            justify-center 
            rounded-xl 
        `}>
            {label === null ? ' ' : label}
        </div>
    );
}

export default LabelWorkExperience