import { FC } from "react";

interface HeadingProps{
    title: string;
}

const Heading: FC<HeadingProps> = ({title}) => {

    return(
        <div className="text-gray-400 text-3xl font-medium items-center gap-6 py-16">
            {title}
            <div className="bg-gray-400 h-1 w-14 translate-y-1"></div>
        </div>
    )
}

export default Heading;