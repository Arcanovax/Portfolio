import tap_img from '../assets/tap_spawn.png';
import agent_img from '../assets/agent_smith.png';
import rag_img from '../assets/rag.png';
import { useNavigate } from "react-router";

export type Projects = {
  title: string;
  descr: string;
  branch: string;
  years: number;
  img?: any,
  duration: string;
  participants: string;
  preview: {
    img: any
    descr: string;
  }
};


export const projects: Record<string, Projects> = {
    "tap":
    {
        title: 'The Answer Protocol',
        descr: "The Answer Protocol is a project that aims to learn us create our own small, persistent-feeling world where multiple players can explore rooms, chat, and cooperate in real time. Our server will speak a simple, line-based TCP protocol, and our two clients — one command line and one graphical — will bring that world to life. The goal of this project is to build a Multi-User Dungeon (MUD) — a shared-world retro text adventure. The primary technical objective is to design a TCP server capable of handling multiple concurrent connections while executing asynchronous code to manage real-time events.",
        branch: "TCP protocol",
        years: 2026,
        duration: "2 Months",
        participants: "Group of 3",
        img: tap_img,
        preview: {
            img: tap_img,
            descr: "A multiplayer game featuring room exploration and interaction with NPCs, inspired by the graphics of Stardew Valley, built entirely in RUST",
        }
        
    },
    "agent_smith":
    {
        title: 'Agent Smith',
        descr: "",
        branch: "AI",
        years: 2026,
        duration: "1 Months",
        participants: "Group of 3",
        preview: {
            img: agent_img,
            descr: "An autonomous agent that solves coding problems in a sandbox using MCP tools",
        }
    },
     "RAG":
    {
        title: 'RAG',
        descr: "This project implements a Retrieval-Augmented Generation (RAG) pipeline for mixed code and documentation datasets. It ingests a corpus, segments it into chunks, builds lexical and optional semantic indices, retrieves the most relevant chunks for a query, and optionally generates concise answers using a local LLM server.",
        branch: "AI",
        years: 2026,
        duration: "1 Months",
        participants: "Solo",
        preview: {
            img: rag_img,
            descr: "An AI that can quickly respond to a knowledge base through indexing and retrieval",
        }
    },
}

export default function Projects() {

    
    const navigate = useNavigate();

    return (
        <div className="">
            {Object.entries(projects).map(([key, project], index) => (
                 <div className='p-10 m-auto max-w-600 border-t-[0.1px] grid grid-cols-10 grid-rows-1 gap-4 text-[oklch(62.8%_0_0)] cursor-pointer'
                    onClick={() => {navigate(`/projects/${key}`);}
                    }
				>
                    <div className='m-auto font-grotesk text-[70px]'>{index + 1}</div>
                    <div className=" m-auto col-span-5">
                        <h1 className='font-bebas text-6xl text-white'>{project.title}</h1>
                        <p className='font-grotesk text-[15px] mb-5'>{project.preview.descr}</p>
                        <div className="font-grotesk text-[15px] flex gap-4">
                            <span>{project.branch}</span>
                            <span>|</span>
                            <span>{project.years}</span>
                            <span>|</span>
                            <span>{project.duration}</span>
                        </div>
                    </div>
                    <div className="col-span-3 col-start-8">
                        <img src={project.preview.img} className='object-fill'/>
                    </div>
                    
                </div> ))}
                    
            </div>
    )
}