
import { useParams, useNavigate } from "react-router";
import { projects, Projects } from '../projects';
import { useEffect } from "react";


export default function Project_page() {

    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const project: Projects | null = slug ? projects[slug] : null;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    }, [slug]);

    if (!project) {
        return (
        <div className="relative w-full min-h-screen overflow-hidden bg-[#16181B] text-foreground ">
            <div className="mx-5 my-35 text-white font-grotesk sm:mx-10 lg:mx-80 " >
                <div className="m-auto  max-w-200">
                    <div
                    onClick={() =>  {
                        navigate("/");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    
                    className='relative z-10 cursor-pointer'
                     >Home</div>
                     <h1 className='font-bebas text-[110px] text-white leading-[1]'>Not found</h1>
                    </div>
                </div>
            </div>
        );
    }

	return (
        <div className="relative w-full min-h-screen overflow-hidden bg-[#16181B] text-foreground ">
            <div className="mx-5 my-35 text-white font-grotesk sm:mx-10 lg:mx-80 " >
                <div className="m-auto  max-w-200">
                    <div
                    onClick={() =>  {
                        navigate("/");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    
                    className='relative z-10 cursor-pointer'
                     >Home</div>
                    <h1 className='font-bebas text-[170px] text-white leading-[0.8]'>{project.title}</h1>
                    

                    <div className=" text-[15px] flex  justify-between items-center py-7.5 ">
                        <div className='flex flex-col'>
                            <h1 className=' text-[oklch(62.8%_0_0)]'>Branch:</h1>
                            <p className='text-[22px]'>{project.branch}</p>
                        </div>
                         <div className='flex flex-col'>
                            <h1 className=' text-[oklch(62.8%_0_0)]'>Duration:</h1>
                            <p className='text-[22px]'>{project.duration}</p>
                        </div>
                         <div className='flex flex-col'>
                            <h1 className=' text-[oklch(62.8%_0_0)]'>Team:</h1>
                            <p className='text-[22px]'>{project.participants}</p>
                        </div>
                    </div>
                    <h1 className='font-bebas text-[50px] text-white leading-[0.8]'>Description</h1>
                    <p className='font-grotesk text-[15px] mb-5'>{project.descr}</p>
                    <img src={project.img} className='object-fill'/>
                    

                </div>
            </div>
        </div>
    )
}