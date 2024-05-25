"use client"
import React from "react";
import { useState, createContext, useEffect } from "react";
import Calendar from 'react-calendar';
import '../app/DiaryCalendar.css';

const DairyWindow = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    }
    const [note, setNote] = useState('');
    
    // CONNECTION
    // const NotesContext = React.createContext({
    //     notes: [], fetchNotes: () => {}
    //   })
    // const fetchNotes = async () => {
    //     const response = await fetch("http://localhost:8081/planner/notes")
    //     const note = await response.json()
    //     setNote(note.data)
    // }

    // useEffect(() => {
    //     fetchNote()
    //   }, [])

    const [isOpen, setIsOpen] = useState(false)
    

    return (
        // <NotesContext.Provider value={{note, fetchNotes}}></NotesContext.Provider>
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
                <textarea className="static mt-[20px] peer w-full h-[400px] resize-none p-[15px]
                outline-none focus:border-t-transparent  rounded-xl text-[20px]
                focus:outline-0 disabled:resize-none disabled:border-0"
                id={`note${date}`} onChange={e => setNote(e.target.value)}
                placeholder="Как прошел ваш день?"></textarea>
            </div>
        // </NotesContext.Provider>
    )
}
export default DairyWindow