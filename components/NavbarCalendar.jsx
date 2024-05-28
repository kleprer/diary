"use client";
import React, {useState} from "react";
import Link from "next/link";


const NavbarCalendar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="flex justify-between items-center w-full h-72 bg-transparent top-0 mt-2 ml-[10px] pr-[20px] position: relative">
            <Link href="/">     
                <h2 className=" mr-[20px] text-{20} text-black px-8 py-3 border-black border-4 rounded-xl hover:border-gray-300 hover:text-gray-300 
                hover:cursor-pointer">
                    На главную
                </h2>
            </Link> 
            <div className=" flex flex-col items-right rounded-xl">     
                <button className="text-center p-4 mr-[10px] align-top text-black px-[13px] py-[13px] border-black border-4 rounded-full 
                hover:border-gray-300 hover:text-gray-300 hover:cursor-pointer w-[52px] h-[52px]" onClick={()=> setIsOpen((prev) => !prev)}>
                        A
                </button> 
                {isOpen && (
                <div className="border-black border-[3px] w-[230px] rounded-xl fixed top-[85px] right-[20px] bg-white h-[180px] flex flex-col items-center">
                    <h3 className="ml-[15px] mr-[15px] mt-[15px]">
                        Имя польз.
                    </h3>
                    <Link href="/calendar">
                        <h3 className="ml-[15px] mr-[15px] mt-[5px]  hover:text-gray-300">
                            Календарь
                        </h3>
                    </Link>
                    <Link href="/dairy">
                        <h3 className="ml-[15px] mr-[15px] mt-[5px] hover:text-gray-300">
                            Ежедневник
                        </h3>
                    </Link>
                    <Link href="/">
                        <button className=" text-center w-[200px] border-black border-4 rounded-xl mt-[15px] py-[6px]
                        hover:border-gray-300 hover:text-gray-300 ml-[15px] mr-[15px] mt-[15px] mb-[10px] text-red-600"> 
                            Выйти
                        </button>
                        
                    </Link> 
                </div>
                )}
            </div>
        </nav>
    )
}

export default NavbarCalendar;