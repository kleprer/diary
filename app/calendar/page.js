'use client'
import NavbarCalendar from "/components/NavbarCalendar";
import Card from "/components/Card";
import { useState } from "react";
import Calendar from 'react-calendar';

export default function CalendarTasksGoals() {

    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    }

    return(
        <>
            <NavbarCalendar />
            <div className="flex w-full items-center gap-[30px] flex-row">
                <Calendar locale="ru-RU" onChange={onChange} value={date} />
                <div className="flex flex-col gap-[15px] items-end w-full 
                pl-[10px] pr-[10px] pt-[10px] h-[288px]">
                    <Card title={"Планы на 03.03"} />
                    <Card title={"Цели"} />
                </div>
            </div>
            </>
    )

}