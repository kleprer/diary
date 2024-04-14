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
            <div className="flex w-full items-center gap-[30px] flex-row">
                <div className="w-full h-full p-10">
                    <Calendar locale="ru-RU" onChange={setDate} value={date} 
                    className="
                    border-4 border-black w-full h-full p-[15px] rounded-xl"/>
                </div>
                <div className="flex flex-col gap-[15px] items-end w-full 
                pl-[10px] pr-[10px] pt-[10px] h-[288px]">
                    <Card title={"Планы на 03.03"} />
                    <Card title={"Цели"} />
                </div>
            </div>
            </>
    )

}