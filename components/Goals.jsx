import React from 'react';

const Goals = () => {
    return(
        <div className='w-[690px] h-[288px] border-black border-5 rounded-xl m-auto mt-[516px] mb-[196px] mr-[173px] ml-[1033px] '>
            <div className='flex align-center flex-col w-[554px] m-auto'>
                <h2 className='text-[32px] text-center pt-[30px]'>
                    Цели
                </h2>
                <input className='focus:outline-none text-[20px] text-black opacity-[50%] mt-[109px]
                border-b-3 border-black'></input>
                <input className='focus:outline-none text-[20px] text-black opacity-[50%] mt-[164px]
                border-b-3 border-black'></input>
                <input className='focus:outline-none text-[20px] text-black opacity-[50%] mt-[224px]
                border-b-3 border-black'></input>

            </div>
        </div>
    )
}