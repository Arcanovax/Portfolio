import tap_img from '../assets/tap_spawn.png';

export default function TheAnswerProtocol() {
	return (
        <div className="relative w-full min-h-screen overflow-hidden bg-[#16181B] text-foreground ">
            <div className="mx-5 my-35 text-white sm:mx-10 lg:mx-80 " >
                <div className=" pb-40  max-w-200">
                    <h1 className='font-bebas text-8xl text-white'>The Answer Protocol</h1>
                    <div className="font-grotesk text-[15px] flex gap-4">
                        <span>TCP protocol</span>
                        <span>|</span>
                        <span>2026</span>
                        <span>|</span>
                        <span>2 months</span>
                    </div>
                    <img src={tap_img} alt="Hero" className='object-fill'/>
                </div>
            </div>
        </div>
    )
}