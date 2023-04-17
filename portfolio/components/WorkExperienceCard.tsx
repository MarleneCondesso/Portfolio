import moment from "moment";
import { FC, useEffect, useState } from "react";
import prismadb from '@/libs/prismadb';
import useDescriptionWork from "@/hooks/useDescriptionWork";
import ReactCardFlip from "react-card-flip";
import LabelWorkExperience from "./LabelWorkExperience";
import  { CgTrashEmpty } from 'react-icons/cg';
interface WorkExperienceProps{
    data: Record<string, any>;
}
const WorkExperienceCard: FC<WorkExperienceProps> = ({
    data
}) => {

    const {data: descriptions} = useDescriptionWork();

    const startDateString = moment(data.startDate).format('DD-MM-YYYY');
    const endDateString = moment(data.endDate).format('DD-MM-YYYY');

    const description  = descriptions?.filter((e:any) => data.descriptions.find((d:any) => e.id === d));
    
    useEffect(()=> {
        if(data.type === 'Trabalhadora Agrícola') console.log('Type',data.type);
    }, []);
    const [flip, setFlip] = useState(false);
    
    return (
        <div className="
            flex 
            flex-col 
            bg-white h-full cursor-pointer p-6 rounded-3xl py-18" onClick={()=>setFlip(!flip)}>
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                    
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <LabelWorkExperience description={false} label={data.company} date={false} opacity={true}/>
                        <div className=" flex flex-col justify-center items-center gap-8 mt-24">
                            <LabelWorkExperience description={false} label={data.type} date={false} opacity={false}/>
                            <div className="flex flex-row gap-8">
                                <LabelWorkExperience description={false} label={startDateString} date={true} opacity={true}/>
                                <LabelWorkExperience description={false} label={endDateString} date={true} opacity={true}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <div className="flex items-center justify-center">
                            <LabelWorkExperience description={false} label={'Descrição'} date={true} opacity={true}/>
                        </div>
                    {data.type === 'Trabalhadora Agrícola' ? 
                    <div className=" flex-col flex gap-10  items-center mt-3 justify-center text-white bg-[#DDD0C8] h-80 w-full rounded-xl">
                        <CgTrashEmpty size={60}/>
                        <p>Sem descrição</p>
                    </div>
                    : 
                    description?.map((ex: any) => {
                        return(
                            <div key={ex.id} className=" flex-col items-center justify-center">
                                    <LabelWorkExperience label={ex.text} description={true} date={false} opacity={false}/>
                            </div>
                        )})}


                    
                    </div>
                </ReactCardFlip>
            </div>
        /** >
        //     {variantDescription ?            
        //     <div> 
        //         <div className="flex-row grid grid-cols-2 items-start justify-end">
        //             <p className="text-gray-600 font-semibold">Ínicio em :</p>
        //             <p className="text-[#DDD0C8] font-bold text-lg">{startDateString}</p>
                    
        //         </div>
        //         <div className="flex-row grid grid-cols-2 items-start justify-end">
        //             <p className="text-gray-600 font-semibold">Fim em :</p>
        //             <p className="text-[#DDD0C8] font-bold text-lg">{endDateString}</p>
        //         </div>
        //         <div className="flex-row grid grid-cols-2 items-center justify-center">
        //             <p className="text-gray-600 font-semibold">Empresa : </p> 
        //             <p className="text-[#DDD0C8] font-bold text-lg">{data.company}</p>
        //         </div>
        //         <div className="flex-row grid grid-cols-2 items-center justify-center">
        //             <p className="text-gray-600 font-semibold">Função :</p> 
        //             <p className="text-[#DDD0C8] font-bold text-lg">{data.type}</p>
        //         </div>
        //         <div className="flex-row grid grid-cols-2 items-center justify-center">
        //             <p className="text-gray-600 font-semibold">Localização :</p>
        //             <p className="text-[#DDD0C8] font-bold text-lg">{data.location}</p>
        //         </div>
        //     </div>
        //     :
        //     <div>{description?.text}</div>
        //     }*/

        
    )
}

export default WorkExperienceCard;
