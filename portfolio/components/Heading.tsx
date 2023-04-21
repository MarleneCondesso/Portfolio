import { FC } from "react";

interface HeadingProps{
    title: string;
}

const Heading: FC<HeadingProps> = ({title}) => {

    return(
        <div className="text-slate-500 dark:text-white text-3xl font-medium items-center gap-6 py-16">
            {title}
            <div className="bg-slate-500 dark:bg-white h-1 w-14 translate-y-5"></div>
        </div>
    )
}

export default Heading;