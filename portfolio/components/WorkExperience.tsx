import useWorkExperience from "@/hooks/useWorkExperience";
import Heading from "./Heading";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperience = () => {


    const { data: dataWorkExperience } = useWorkExperience();

    return(
        <section className={` mt-10 py-10 px-16`}>
            <Heading title='Work Experience - Timeline'/>
            <div className="
                grid 
                grid-cols-3 
                max-md:grid-cols-1 
                max-lg:grid-cols-1 
                max-xl:grid-cols-3"
            >
                {dataWorkExperience?.map((work: any) => {
                    return (
                        <div key={work.id} className="p-8 h-[500px]">
                            <WorkExperienceCard data={work} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default WorkExperience;