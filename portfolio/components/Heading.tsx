import { FC } from "react";

interface HeadingProps{
    title: string;
}

const Heading: FC<HeadingProps> = ({title}) => {

    return(
        <div className="text-slate-700 dark:text-white xl:text-4xl text-xl font-medium items-center gap-6 py-16">
            {title}
            <div className="bg-[var(--icon-color-light)] h-1 xl:w-28 w-16 translate-y-5"></div>
        </div>
    )
}

export default Heading;