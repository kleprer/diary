import React from "react";
import Link from "next/link";

const NavbarCalendar = () => {
    return (
        <nav className="flex justify-between items-center w-full h-72 bg-transparent 
        top-0 mt-2 ml-[10px] position: relative">
            <Link href="/">     
                <h2 className=" mr-[20px] text-{20} text-black px-8 py-3 
                border-black border-4 rounded-xl hover:border-gray-300 hover:text-gray-300 
                hover:cursor-pointer">
                    На главную
                </h2>
            </Link>      
            <h2 className="text-center mr-[20px] align-top text-black px-[13px] py-[13px] 
            border-black border-4 rounded-full 
            hover:border-gray-300 hover:text-gray-300 hover:cursor-pointer
            w-[52px] h-[52px]">
                A
            </h2>
        </nav>
        // <nav className="flex justify-end items-center w-full h-72 bg-transparent top-0 mt-2 position: relative">
        //     <h2 className=" mr-[1648px] ml-[48px] text-{20} text-black px-[8px] py-[3px] border-black border-4 rounded-xl hover:border-gray-300 hover:text-gray-300 hover:cursor-pointer">
        //         На главную
        //     </h2>
        //     <h2 className="text-center mr-[20px] align-top text-black px-[13px] py-[13px] border-black border-4 rounded-full 
        //     hover:border-gray-300 hover:text-gray-300 hover:cursor-pointer
        //     w-[52px] h-[52px]">
        //         А
        //     </h2>
        // </nav>
    )
}

export default NavbarCalendar