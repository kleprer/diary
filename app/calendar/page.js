'use client'
import NavbarCalendar from "/components/NavbarCalendar";
import Card from "/components/Card";
import { useState } from "react";
import Calendar from 'react-calendar';
import '/components/Calendar.css';


export default function CalendarTasksGoals() {

    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    }

    return(
        <>
            <NavbarCalendar />
            <div className="flex w-full gap-[5px] flex-row
            items-start">
                <div className="w-full h-full pl-[10px] pt-[10px]">
                    <Calendar locale="ru-RU" onChange={setDate} value={date} 
                    className="border-4 border-black w-full m-0  
                    p-[15px] rounded-xl"/>
                </div>
                <div className="flex flex-col items-end w-full 
                pl-[10px] pr-[10px]">
                    <Card title={"Планы на 03.03"} />
                    <Card title={"Цели"} />
                </div>
            </div>
            </>
    )

}