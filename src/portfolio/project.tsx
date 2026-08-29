import tap_img from '../assets/tap_spawn.png';
import agent_img from '../assets/agent_smith.png';
import rag_img from '../assets/rag.png';
import { useNavigate } from "react-router";

type Project = {
  title: string;
  descr: string;
  branch: string;
  years: number;
  duration: string;
  preview: any;
  navig_link?: string;
};


const projects: Record<string, Project> = {
    "tap":
    {
        title: 'The Answer Protocol',
        descr: "A multiplayer game featuring room exploration and interaction with NPCs, inspired by the graphics of Stardew Valley, built entirely in RUST",
        branch: "TCP protocol",
        years: 2026,
        duration: "2 Months",
        preview: tap_img,
        navig_link: "/projects/the-answer-protocol"
        
    },
    "agent_smith":
    {
        title: 'Agent Smith',
        descr: "An autonomous agent that solves coding problems in a sandbox using MCP tools ",
        branch: "AI",
        years: 2026,
        duration: "1 Months",
        preview: agent_img
    },
     "RAG":
    {
        title: 'RAG',
        descr: "An AI that can quickly respond to a knowledge base through indexing and retrieval",
        branch: "AI",
        years: 2026,
        duration: "1 Months",
        preview: rag_img
    },
}

export default function Projects() {

    const navigate = useNavigate();

    return (
        <div className="">
            {Object.entries(projects).map(([key, project], index) => (
                 <div className='p-10 m-auto max-w-600 border-t-[0.1px] grid grid-cols-10 grid-rows-1 gap-4 text-[oklch(62.8%_0_0)] cursor-pointer'
                    onClick={() => {navigate(project.navig_link || '/');
                        window.scrollTo({ top: 0, behavior: "smooth" });}
                    }
				>
                    <div className='m-auto font-grotesk text-[70px]'>{index + 1}</div>
                    <div className=" m-auto col-span-5">
                        <h1 className='font-bebas text-6xl text-white'>{project.title}</h1>
                        <p className='font-grotesk text-[15px] mb-5'>{project.descr}</p>
                        <div className="font-grotesk text-[15px] flex gap-4">
                            <span>{project.branch}</span>
                            <span>|</span>
                            <span>{project.years}</span>
                            <span>|</span>
                            <span>{project.duration}</span>
                        </div>
                    </div>
                    <div className="col-span-3 col-start-8">
                        <img src={project.preview} className='object-fill'/>
                    </div>
                    
                </div> ))}
                    
            </div>
    )
}