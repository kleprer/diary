import React from "react";

const PG = () => {
    return(
        <div>
            <div className="w-[690px] h-[288px] border border-black border-5 rounded-xl mt-[189px] mb-[523px] mr-[173px] ml-[1033px] ">
                <div className="flex-none w-[631px] ml-[30px]">
                    <h2 className="text-[32px] pt-[26px]">
                        Планы на 03.03
                    </h2>
                    <input className='focus:outline-none text-[20px] text-black opacity-[50%] w-[630.01px] border-b-4 border-black mt-[10px]'></input>
                    <input className='focus:outline-none text-[20px] text-black opacity-[50%] w-[630.01px] border-b-4 border-black mt-[25px]'></input>
                    <input className='focus:outline-none text-[20px] text-black opacity-[50%] w-[630.01px] border-b-4 border-black mt-[25px]'></input>
                </div> 
           </div>

            <div className='w-[690px] h-[288px] border border-black border-5 rounded-xl mt-[39px] mb-[196px] ml-[1033px] '>
                <div className='flex-none w-[631px] ml-[30px]'>
                    <h2 className='text-[32px] pt-[26px]'>
                        Цели
                    </h2>
                    <input className='focus:outline-none text-[20px] text-black opacity-[50%] w-[630.01px] border-b-4 border-black mt-[10px] type="text"'></input>
                    <input className='focus:outline-none text-[20px] text-black opacity-[50%] w-[630.01px] border-b-4 border-black mt-[25px] type="text"'></input>
                    <input className='focus:outline-none text-[20px] text-black opacity-[50%] w-[630.01px] border-b-4 border-black mt-[25px] type="text"'></input>
                </div>
            </div>
        </div>
    )
}

export default PG
