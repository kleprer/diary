"use client"
import React from "react";
import { useState } from "react";
import Calendar from 'react-calendar';
import "/учеба/пп/diary/app/Calendar.css"

const DairyWindow = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    }
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="h-[520px] mb-[20px] ml-[10px] mr-[20px] 
        border-black border-[4px] rounded-xl mt-[20px]">   
            <h2 className=" flex flex-col w-[470px] h-[60px] ml-[20px] border-black border-b-[4px] text-[28px] pb-[15px]">{date.getDate()}.0{date.getMonth()+1}
                <button className="h-[45px] w-[268px] ml-[200px] border-black border-4 rounded-xl text-[20px]" onClick={() => setIsOpen((prev) => !prev) }> Выбарать дату</button>
                {isOpen && (
                    <div className="w-full h-full ml-[190px] pl-[10px] pt-[10px] relative">
                    <Calendar locale="ru-RU" onChange={setDate} value={date} 
                    className="border-4 border-black w-full m-0  
                    p-[15px] rounded-xl"/>
                </div>
                )}
            </h2>
            <textarea className="static mt-[20px] ml-[20px] peer w-[1850px] h-[400px] resize-none p-[10px]
            outline-none focus:border-t-transparent  rounded-xl
            focus:outline-0 disabled:resize-none disabled:border-0"
            placeholder="Как прошел ваш день?"></textarea>
        </div>
    )
}
export default DairyWindow