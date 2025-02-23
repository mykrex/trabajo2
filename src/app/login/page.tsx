'use client'
import { useState } from "react";
import Navigation from "../components/Navigation";

export default function Login(){

    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userPassword: ""
    });

    const [savedName, setSavedName] = useState("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /** I look for that the email comply the correct format */
    const passwordPattern = /^(?=.*[A-Z])(?=.*[\d])(?=.*[!#$%&@*?])[A-Za-z\d!#$%&@*?]{8,20}$/; /** I loof for the password correct format*/

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        if (!formData.userName.trim() || !formData.userEmail.trim() || !formData.userPassword.trim()) { /** When the fields are empty or there it is only spaces */
            alert("You need to complete all the fields")
            return;
        } 
        if (!emailPattern.test(formData.userEmail)) { /** When the email format is invalid */
            alert("The email format is incorrect")
            return;
        }
        if (!passwordPattern.test(formData.userPassword)) { /** when the password format is invalidç */
            alert("The password format is invalid. \n\nSuggestion, your password it most have: \n\n- One capital letter (A-Z)\n- One number (0-9)\n- One speacial character (!#$%&@*?) \n- Between 8 and 20 characters")
            return;
        }

        setSavedName(formData.userName);
        console.log("Saved information: ", formData);

        setFormData({
            userName: "",
            userEmail: "",
            userPassword: ""
        });
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center items-justify-center minh-screen py-10">
            <Navigation/>

            <main className="relative flex flex-col gap-8 row-start-2 items-center justify-items-center py-16">

                {savedName && (<div className="absolute top-10 right-10 text-3xl font-bold">
                    {savedName}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
                    
                    <label htmlFor="userName" className="text-gray-600">
                        Name
                    </label>
                    <input 
                    id="userName" type="text" 
                    value={formData.userName} onChange={(e) => setFormData({...formData, userName: e.target.value})} 
                    className=" w-50 h-19 border border-gray-300 rounded p-2"/>

                    <label htmlFor="userEmail" className="text-gray-600">
                        Email
                    </label>
                    <input id="userEmail" type="email" 
                    value={formData.userEmail} onChange={(e) => setFormData({...formData, userEmail: e.target.value})} 
                    className=" w-50 h-19 border border-gray-300 rounded p-2"/>

                    <label htmlFor="userPssword" className="text-gray-600">
                        Password
                    </label>
                    <input id="userPassword" type="password" 
                    value={formData.userPassword} onChange={(e) => setFormData({...formData, userPassword: e.target.value})} 
                    className=" w-50 h-19 border border-gray-300 rounded p-2"/>

                    <button type="submit" className="px-4 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-400"> 
                    Guardar
                    </button>
                </form>

            </main>
        </div>
    );
}