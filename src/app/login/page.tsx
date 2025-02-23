'use client'
import { useState } from "react";
import Navigation from "../components/Navigation";

export default function Login(){

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /** I look for that the email comply the correct format */
    const passwordPattern = /^(?=.*[A-Z])(?=.*[\d])(?=.*[!#$%&@*?])[A-Za-z\d!#$%&@*?]{8,20}$/;

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        if (!userName.trim() || !userEmail.trim() || !userPassword.trim()) { /** When the fields are empty or there it is only spaces */
            alert("You need to complete all the fields")
            return;
        } 
        if (!emailPattern.test(userEmail)) {
            alert("The email format is incorrect")
        }
        console.log("Saved information")
        console.log(`Name: ${userName} \nCorreo: ${userEmail} \nPassword: ${userPassword}`);
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center items-justify-center minh-screen py-10">
            <Navigation/>

            <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center py-16">
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
                    
                    <label htmlFor="userName" className="text-gray-600">
                        Name
                    </label>
                    <input 
                    id="userName" type="text" 
                    value={userName} onChange={(e) => setUserName(e.target.value)} 
                    className=" w-50 h-19 border border-gray-300 rounded p-2"/>

                    <label htmlFor="userEmail" className="text-gray-600">
                        Email
                    </label>
                    <input id="userEmail" type="email" 
                    value={userEmail} onChange={(e) => setUserEmail(e.target.value)} 
                    className=" w-50 h-19 border border-gray-300 rounded p-2"/>

                    <label htmlFor="userPssword" className="text-gray-600">
                        Password
                    </label>
                    <input id="userPassword" type="password" 
                    value={userPassword} onChange={(e) => setUserPassword(e.target.value)} 
                    className=" w-50 h-19 border border-gray-300 rounded p-2"/>

                    <button type="submit" className="px-4 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-400"> 
                    Guardar
                    </button>
                </form>

            </main>
        </div>
    );
}