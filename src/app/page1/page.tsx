'use client'
import { useState } from "react";
import Navigation from "../components/Navigation";

type ColorKey = 'gray' | 'blue' | 'green' | 'yellow' | 'red';

export default function Page1(){

    const [color, setColor] = useState<ColorKey>("gray");

    const colors = {
        gray: "bg-gray-500",
        blue: "bg-blue-500",
        green: "bg-green-500",
        yellow: "bg-yellow-500",
        red: "bg-red-500"
    };

    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-stretch min-h-screen w-full">
        <Navigation/>
        
        <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center py-16">

            <div className={`w-64 h-32 ${colors[color]}`}></div>

            <div className="grid grid-cols-2 items-center justify-items-center gap-12">
                
                <div className="flex flex-col flex-wrap gap-4">
                    <button onClick={() => setColor("blue")} className="px-4 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-400">
                    Blue
                    </button>

                    <button onClick={() => setColor("green")} className="px-4 py-4 bg-green-500 text-white rounded-full hover:bg-green-400">
                    Green
                    </button>
                </div>

                <div className="col-start-2 flex flex-col flex-wrap gap-4">
                    <button onClick={() => setColor("yellow")} className="px-4 py-4 bg-yellow-500 text-white rounded-full hover:bg-yellow-400"> 
                    Yellow
                    </button>

                    <button onClick={() => setColor("red")} className="px-4 py-4 bg-red-500 text-white rounded-full hover:bg-red-400">
                    Red
                    </button>
                </div>

            </div>
        </main>
    </div>
    );
}