import { Sms } from "iconsax-react";

import logo from "@/assets/logo.png";
import orange_chat_icon from "@/assets/orange_chat_icon.png";

const Footer = () => {
    return (
        <section className=" bg-[#010314] ">
            <section className="relative bg-[#010314] h-full w-full overflow-hidden font-inter text-white ">
                <div className=" py-28 inset-0 h-full w-full items-center px-5 [background:radial-gradient(150%_150%_at_50%_10%,#000_40%,#63e_100%)]">
                    <div className="absolute bottom-0  left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                    <div>
                        <h1 className=" text-center font-semibold text-6xl w-[50%] m-auto">
                            Let's talk about your project
                        </h1>

                        <div className=" py-10">
                            <div className=" text-sm flex justify-center gap-2">
                                <span className=" text-[#8E8D91]">
                                    Want to bring
                                </span>{" "}
                                <img src={orange_chat_icon} alt="" />{" "}
                                <span>your idea to life?</span>
                            </div>

                            <p className=" pt-5 text-center text-sm text-[#8E8D91]">
                                Send a message right now!
                            </p>
                        </div>

                        <div className="  bg-[#171825BF] border border-[#202231] w-fit gap-2 h-[50px] m-auto flex justify-between items-center px-3 py-3 rounded-full">
                            <span className=" font-plus-jakarta text-sm">
                                Send a message
                            </span>
                            <div className=" h-8 w-8 border border-[#171825BF]  flex justify-center items-center rounded-full bg-custom-gradient">
                                <Sms variant="Broken" className=" h-4 w-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" text-[#5E6077] flex items-center justify-between text-sm font-inter px-20 py-8">
                <img src={logo} alt="" />

                <div className=" flex w-[55%] justify-between">
                    <div className=" flex gap-3">
                        <p className=" ">Projects</p>
                        <p>Contact me</p>
                    </div>

                    <p>
                        Designed by:{" "}
                        <span className=" text-white underline"> Opeyemi</span>,
                        Developed by:{" "}
                        <span className=" text-white underline">Name </span>
                    </p>
                </div>
            </section>
        </section>
    );
};

export default Footer;
