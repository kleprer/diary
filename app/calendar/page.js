<<<<<<< HEAD
'use client'
import NavbarCalendar from "/components/NavbarCalendar";
import Card from "/components/Card";
import { useState } from "react";
=======
import NavbarCalendar from "/components/NavbarCalendar";
import Card from "/components/Card";
>>>>>>> 5b0fcd8184005f8847b0cf1d7631bc88b2656f65
export default function Calendar() {
    return(
        <>

            <NavbarCalendar />
            <div className="flex flex-col gap-[15px] items-end w-full 
            pl-[10px] pr-[10px] pt-[10px] h-[288px]">
                <Card title={"Планы на 03.03"} />
                <Card title={"Цели"} />
            </div>
            </>
    )

}