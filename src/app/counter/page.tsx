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
        <div>
            /*<Navigation/>
            
            <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-items-center">
            
            <h1 className="text-4xl font-bold text-gray-800"> {counter} </h1>
            
            <form onSubmit={handleSubmit}>
                <button type="submit" className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">
                    Incrementar número
                </button>
            </form>

            <form onSubmit={decreaseSubmit}>
                <button type="submit" className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">
                    Decrementar número
                </button>
            </form>
            </main>*/
        </div>

    );
}