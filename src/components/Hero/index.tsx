import { ChevronRight } from "lucide-react";

const Hero = () => {
    return (
        <div className="  h-[85vh] ">
            <div className="relative bg-[#010314] h-full w-full overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                <div className=" absolute w-[59px] h-[726px] border left-0 -top-20 -rotate-[30deg] bg-[#A277FFB2] filter blur-[150px]"></div>
                <div className=" absolute w-[59px] h-[726px] border right-0 -top-20 rotate-[30deg] bg-[#A277FFB2] filter blur-[150px]"></div>

                <div className="absolute left-0 right-0 h-full flex flex-col items-center pt-10">
                    <div className=" font-inter bg-custom-gradient border border-[#202231] text-white px-5 py-2 rounded-full">
                        Spark joy with Design
                    </div>

                    <div className=" font-semibold text-[80px] flex gap-10 font-inter mt-5">
                        <p
                            style={{
                                background:
                                    "radial-gradient(50% 100% at 50% 50%, #FFFFFF 14.29%, rgba(255, 255, 255, 0.3) 100%)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                color: "transparent",
                            }}
                        >
                            Product Designer
                        </p>{" "}
                        <p
                            style={{
                                background:
                                    "radial-gradient(50% 100% at 50% 50%, #FFFFFF 14.29%, rgba(255, 255, 255, 0.3) 100%)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                color: "transparent",
                            }}
                        >
                            UI/UX
                        </p>{" "}
                    </div>

                    <p
                        className=" font-semibold text-[80px] flex font-inter"
                        style={{
                            background:
                                "radial-gradient(50% 100% at 50% 50%, #FFFFFF 14.29%, rgba(255, 255, 255, 0.3) 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            color: "transparent",
                        }}
                    >
                        Technical Recruiter
                    </p>

                    <p className=" text-[#DFE1F4] w-[44.7%] text-center font-inter">
                        You've found me! Hi, I'm Opeyemi Adeniji, also known as
                        iyalodeofdesign. I'm a product designer who loves
                        creating experiences and products that bring joy. Now
                        that you’ve found me, let's create amazing things
                        together!
                    </p>

                    <div className=" bg-[#171825BF] text-white border border-[#202231] h-[50px] flex gap-5 justify-between items-center pl-4 pr-2 py-3 rounded-full mt-8">
                        <span className=" font-plus-jakarta text-sm">
                            Work with me
                        </span>
                        <div className=" p-2 border border-[#171825BF]  flex justify-center items-center rounded-full bg-custom-gradient">
                            <ChevronRight className="  h-4 w-4" />
                        </div>
                    </div>

                    <p
                        className=" text-center font-inter text-sm mt-56"
                        style={{
                            background:
                                "radial-gradient(50% 100% at 50% 50%, #FFFFFF 14.29%, rgba(255, 255, 255, 0.3) 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            color: "transparent",
                        }}
                    >
                        Not just a designer, I am a bit-of a wizard
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
