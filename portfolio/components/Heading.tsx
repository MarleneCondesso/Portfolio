import { FC } from "react";

interface HeadingProps{
    title: string;
}

const Heading: FC<HeadingProps> = ({title}) => {

    return(
        <div className="text-white xl:text-6xl text-4xl font-medium items-center gap-6 py-16">
            {title}
            <div className="bg-white h-1 xl:w-32 w-16 translate-y-5"></div>
        </div>
    )
}

export default Heading;