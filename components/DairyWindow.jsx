"use client"
import React from "react";
import { useState, createContext, useEffect } from "react";
import ButtonRA from './ButtonRA'
import Calendar from 'react-calendar';
import '../app/DiaryCalendar.css';

const DairyWindow = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    }
    const [notes, setNotes] = useState([]);
    
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;

        setNote(form.value)

        let newData = {
            //??? не могу посмотреть модель т.к. не загружается локалхост

        }

        // fetch(`http://localhost:8081/planner/${props.type}`, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(newNote)
        //     }).then(props.fetchTodos)


        console.log(note);
    }
    

    
    const [isOpen, setIsOpen] = useState(false)
    

    return (
            <div className="h-[520px] mb-[10px] ml-[10px] mr-[20px] 
            border-black border-[4px] rounded-xl mt-[20px] p-[3px]"> 
                <div className="flex items-end mt-[10px] gap-[20px]">  
                    <h2 className="flex flex-col w-[250px] h-[60px] pt-[7px] ml-[20px] 
                    border-black border-b-[4px] text-[26px] ">
                    {date.getMonth()+1 < 10 
                                ? `${date.getDate()}.0${date.getMonth()+1}.${date.getFullYear()}`
                                : `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
                            }
                        {isOpen && (
                            <div className="w-[400px] h-full ml-[260px] pl-[10px] mt-[10px] pt-[10px] relative">
                                <Calendar locale="ru-RU" onChange={setDate} value={date} 
                                className="border-4 border-black w-full m-0  
                                p-[15px] rounded-xl"/>
                            </div>
                        )}
                    </h2>
                    <button className="h-[55px] w-[235px] border-black border-4 rounded-xl 
                    text-[20px]" 
                        onClick={() => setIsOpen((prev) => !prev) }>
                            Выбрать дату
                    </button>
                </div>
                    <form className="flex flex-col items-end" onSubmit={handleSubmit}> 
                        <textarea className="leading-[50px] static mt-[15px] peer w-full h-[320px] 
                        outline-none focus:border-t-transparent  rounded-xl text-[22px] 
                        focus:outline-0 disabled:resize-none disabled:border-0 resize-none p-[15px]"
                        id={`note${date}`} placeholder="Как прошел ваш день?" onChange={(e) => setNote(e.target.value)} />
                        <button  type="submit" onclick={handleSubmit} className="h-[55px]  
                        text-[20px] text-center w-[230px] 
                        border-black border-4 rounded-xl mt-[15px] py-[6px]
                        hover:border-gray-300 hover:text-gray-300 mr-[20px]">
                            Сохранить
                        </button>
                    </form>
            </div>
    )
}
export default DairyWindow