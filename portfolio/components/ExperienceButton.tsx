import React, { FC } from 'react'
import PropTypes from 'prop-types'

interface ExperienceButtonProps {
    setInformation: (info: string) => void;
    information: string;
    text: string;
    showInfo: string
}


const ExperienceButton: FC<ExperienceButtonProps> = ({
    setInformation,
    showInfo,
    information,
    text
}) => {
    return (
        <div className='min-w-fit'
            onClick={() => {
                setInformation(information);
            }}
        >
            <button
                className={`${showInfo === information ? 'text-slate-700 dark:text-white cursor-default' :  'text-[var(--icon-color-light)] hover:text-slate-500 dark:text-teal-200 dark:hover:text-white'} min-w-full max-w-[100%]`}
            >
                {text}
            </button>
        </div>
    )
}

ExperienceButton.propTypes = {}

export default ExperienceButton