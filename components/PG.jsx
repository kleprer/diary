c

import React from "react";
import Input from "./Input";
import AddTodo from "./AddTodo";

const PG = () => {
    return(
        <div className="flex flex-col gap-[15px] items-end w-full 
        pl-[10px] pr-[10px] pt-[10px] h-[288px]">
            <div className="w-[631px] ml-[30px] border-black border-4 
            rounded-xl p-[10px]">
                <h2 className="text-[32px]">
                    Планы на 03.03
                </h2>
                <AddTodo />
                <Input />
            </div> 
            <div className='w-[631px] ml-[30px] border-black border-4 rounded-xl p-[10px] '>
                <h2 className='text-[32px]'>
                    Цели
                </h2>
                <AddTodo />
                <Input />
            </div>
        </div>
    )
}

export default PG
