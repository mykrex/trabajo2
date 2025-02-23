'use client'
import { useState } from "react";
import Navigation from "../components/Navigation";

export default function Counter(){

    const [ counter, setCounter] = useState(10)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCounter(counter+1)
    }

    const decreaseSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCounter(counter-1)
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-intems-center min-h-screen py-10">
            <Navigation/>
        
            <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center">
                <h1 className="text-4xl font-bold"> {counter} </h1>
        
                <form onSubmit={handleSubmit}>
                    <button type="submit" className="px-4 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-400"> 
                    Increase
                    </button>
                </form>
        
                <form onSubmit={decreaseSubmit}>
                    <button type="submit" className="px-4 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-400"> 
                    Decrease
                    </button>
                </form>
            </main>
        </div>

    );
}