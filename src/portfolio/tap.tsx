import tap_img from '../assets/tap_spawn.png';
import { useNavigate } from "react-router";


export default function TheAnswerProtocol() {

    const navigate = useNavigate();

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
                    <h1 className='font-bebas text-[110px] text-white leading-[1]'>The Answer Protocol</h1>
                    
                    <img src={tap_img} alt="Hero" className='object-fill my-5'/>

                    <div className=" text-[15px] flex  justify-between items-center py-7.5 border-b">
                        <div className='flex flex-col'>
                            <h1 className=' text-[oklch(62.8%_0_0)]'>Branch:</h1>
                            <p className='text-[22px]'>TCP protocol</p>
                        </div>
                         <div className='flex flex-col'>
                            <h1 className=' text-[oklch(62.8%_0_0)]'>Duration:</h1>
                            <p className='text-[22px]'>2 Months</p>
                        </div>
                         <div className='flex flex-col'>
                            <h1 className=' text-[oklch(62.8%_0_0)]'>Team:</h1>
                            <p className='text-[22px]'>Group of 3</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}