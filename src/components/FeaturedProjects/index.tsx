import clive from "@/assets/clive_ai.png";
import zikora from "@/assets/zikora.png";
import finma from "@/assets/finma.png";

const FeaturedProjects = () => {
    return (
        <section className=" bg-[#010314] font-inter py-24 px-20">
            <h1
                style={{
                    background:
                        "radial-gradient(50% 100% at 50% 50%, #FFFFFF 14.29%, rgba(255, 255, 255, 0.3) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                }}
                className=" text-5xl font-medium text-center tracking-tight leading-[52px] pb-20"
            >
                Featured Projects
            </h1>

            <div className=" flex gap-5">
                <div className=" w-[56%] rounded-2xl border border-[#202231] text-white ">
                    <div className=" flex p-8 gap-3">
                        <div className=" bg-[#302755CC] border border-[#FFFFFF4D] rounded-full px-3 h-[30px] text-[10px] w-fit flex items-center justify-center">
                            Mobile, Web & Admin
                        </div>
                        <div className=" bg-[#302755CC] border border-[#FFFFFF4D] rounded-full px-3 h-[30px] text-[10px] w-fit flex items-center justify-center">
                            User Interface
                        </div>
                        <div className=" bg-[#302755CC] border border-[#FFFFFF4D] rounded-full px-3 h-[30px] text-[10px] w-fit flex items-center justify-center">
                            AI
                        </div>
                    </div>

                    <img src={clive} alt="clive image" className=" py-3" />

                    <p className=" font-normal text-[22px] p-8">Clive AI</p>
                </div>

                <div className=" w-[22%] rounded-2xl border border-[#202231] text-white ">
                    <div className=" flex p-8 gap-3">
                        <div className=" bg-[#302755CC] border border-[#FFFFFF4D] rounded-full px-3 h-[30px] text-[10px] w-fit flex items-center justify-center">
                            Finance
                        </div>
                        <div className=" bg-[#302755CC] border border-[#FFFFFF4D] rounded-full px-3 h-[30px] text-[10px] w-fit flex items-center justify-center">
                            Mobile, Web & Admin
                        </div>
                    </div>

                    <img src={zikora} alt="clive image" className=" py-3" />

                    <p className=" font-normal text-[22px] p-8">Zikora Bank</p>
                </div>

                <div className=" w-[22%] rounded-2xl border border-[#202231] text-white ">
                    <div className=" flex p-8 gap-3">
                        <div className=" bg-[#302755CC] border border-[#FFFFFF4D] rounded-full px-3 h-[30px] text-[10px] w-fit flex items-center justify-center">
                            Finance
                        </div>
                        <div className=" bg-[#302755CC] border border-[#FFFFFF4D] rounded-full px-3 h-[30px] text-[10px] w-fit flex items-center justify-center">
                            Mobile App
                        </div>
                    </div>

                    <img src={finma} alt="clive image" className=" py-3" />

                    <p className=" font-normal text-[22px] p-8">Finma Drive</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
