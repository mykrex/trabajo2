'use client'
import { useState } from "react";
import Navigation from "../components/Navigation";

export default function Login(){

    const [userName, setUserName] = useState("");

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        setUserName(userName)
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center items-justify-center minh-screen py-10">
            <Navigation/>

            <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center py-16">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
                    <label>
                        Nombre
                    </label>
                    <input id="userName" type="text" className=" w-50 h-19 border border-gray-300 rounded p-2"/>

                    <label>
                        Correo
                    </label>
                    <input id="userName" type="text" className=" w-50 h-19 border border-gray-300 rounded p-2"/>

                    <label>
                        Contraseña
                    </label>
                    <input id="userName" type="text" className=" w-50 h-19 border border-gray-300 rounded p-2"/>

                    <button type="submit" className="px-4 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-400"> 
                    Guardar
                    </button>
                </form>

            </main>
        </div>
    );
}