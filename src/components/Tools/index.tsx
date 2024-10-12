const Tools = () => {
    const TOOLS = [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Octopus.io",
        "FigJam",
        "Miro",
        "Miro",
        "Miro",
        "Miro",
    ];

    return (
        <section className="bg-[#010314] bg-[linear-gradient(180deg,rgba(48,39,85,0.16)_0%,rgba(10,6,34,0.04)_100%)] text-sm text-white py-20 font-inter relative overflow-hidden border-t border-b border-t-[#202231] border-b-[#202231]">
            <div className=" absolute w-[59px] h-[726px] border left-0 -top-20 -rotate-[30deg] bg-[#A277FFB2] filter blur-[170px]"></div>
            <div className=" absolute w-[59px] h-[726px] border left-0 -top-40 -rotate-[30deg] bg-[#A277FFB2] filter blur-[170px]"></div>

            <div className=" font-inter bg-custom-gradient border border-[#202231] w-fit text-white px-5 py-2 rounded-full m-auto">
                Design Tools
            </div>

            <h1
                style={{
                    background:
                        "radial-gradient(50% 100% at 50% 50%, #FFFFFF 14.29%, rgba(255, 255, 255, 0.3) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                }}
                className=" text-[40px] leading-[52px] font-medium tracking-tighter text-center pb-[53px] pt-4"
            >
                Who doesn't love to work with these tools
            </h1>

            <div className=" flex flex-col items-center gap-8">
                <div className=" flex gap-6">
                    {TOOLS.slice(0, 4).map((tool) => (
                        <div className=" border border-[#202231] h-[50px] px-8 w-fit flex items-center rounded-full">
                            {tool}
                        </div>
                    ))}
                </div>

                <div className=" flex gap-12">
                    {TOOLS.slice(4, 7).map((tool) => (
                        <div className=" border border-[#202231] h-[50px] px-8 w-fit flex items-center rounded-full">
                            {tool}
                        </div>
                    ))}
                </div>

                <div className=" flex gap-11">
                    {TOOLS.slice(7, 9).map((tool) => (
                        <div className=" border border-[#202231] h-[50px] px-8 w-fit flex items-center rounded-full">
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
