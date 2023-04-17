import { FC } from "react";


interface WorkExperienceCardDescriptionProps{
    data: Record<string, any>;
}
const WorkExperienceCardDescription: FC<WorkExperienceCardDescriptionProps> = ({
    data
}) => {

    return(
        <div className="
            flex 
            flex-col 
            justify-center
            bg-[#DDD0C8] h-full cursor-pointer p-6 gap-8 rounded-3xl py-18 border-white border-8"
        >
            <p>{data.text}</p>
        </div>
    );
}

export default WorkExperienceCardDescription;