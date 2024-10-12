import { ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import logo from "@/assets/logo.png";
import { Sms } from "iconsax-react";

const Navbar = () => {
    return (
        <div className="py-4 px-4 text-white bg-[#010314] flex justify-between items-center">
            <DropdownMenu>
                <DropdownMenuTrigger asChild className=" ">
                    <div className=" border border-[#ffffff50] w-[108px] h-[36px] flex justify-between items-center px-4 rounded-full">
                        <span className=" font-plus-jakarta text-sm">
                            English
                        </span>
                        <ChevronDown className=" h-4 w-4" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-white hover:bg-[#010314] bg-[#010314] border-[#010314]">
                    <DropdownMenuItem className=" hover:bg-[#010314] bg-[#010314] border-[#010314]">
                        Spanish
                    </DropdownMenuItem>
                    <DropdownMenuItem className=" hover:bg-[#010314] bg-[#010314] border-[#010314]">
                        German
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <img src={logo} alt="" />

            <div className=" bg-[#171825BF] border border-[#202231] w-fit gap-2 h-[50px] flex justify-between items-center px-3 rounded-full">
                <span className=" font-plus-jakarta text-sm">Projects</span>
                <div className=" h-8 w-8 border border-[#171825BF]  flex justify-center items-center rounded-full bg-custom-gradient">
                    <Sms variant="Broken" className=" h-4 w-4" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
