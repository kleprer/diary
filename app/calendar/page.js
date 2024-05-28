'use client'
import NavbarCalendar from "/components/NavbarCalendar";
import Card from "/components/Card";
import { useState, useEffect } from "react";
import api from '../api';
import Calendar from 'react-calendar';
import '../Calendar.css';


export default function CalendarTasksGoals() {


    const [date, setDate] = useState(new Date());
    const d = date.toISOString().split('T')[0];
    const onChange = date => {
        setDate(date);
        fetchPlans(response.data.date===date);
        fetchGoals(response.data.date===date);
    }
    
    const [plans, setPlans] = useState([]);
    const [goals, setGoals] = useState([]);
    const fetchPlans = async () => {
        const response = await api.get('/planner/plans');
        setPlans([...plans, response.data]);
    }

    const fetchGoals = async () => {
        const response = await api.get('/planner/goals');
        setGoals([...goals, response.data]);
    }
    
    useEffect(() => {
        fetchPlans()
    }, []);

    useEffect(() => {
        fetchGoals()
    }, [])

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
                    {date.getMonth()+1 < 10 
                        ? <Card todos={plans} setTodos={setPlans} fetchTodos={fetchPlans} type={"plans"} title={`Планы на ${date.getDate()}.0${date.getMonth()+1}`} chosenDate={d}/>
                        : <Card todos={plans} setTodos={setPlans} fetchTodos={fetchPlans} type={"plans"} title={`Планы на ${date.getDate()}.${date.getMonth()+1}`} chosenDate={d}/>
                    }
                    <Card  todos={goals} setTodos={setGoals} fetchTodos={fetchGoals} type={"goals"} title={"Цели"} chosenDate={d}/>
                </div>
            </div>
            </>
    )

}