import Image from "next/image";
import Navigation from "../components/Navigation";

export default function Home(){
    return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-intems-center min-h-screen py-10">
        <Navigation/>

        <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center">
            <div style={{ backgroundColor: '#BDC3C7'}} className="w-64 h-32"> </div>

            <div className="grid grid-col items-center justify-center minh-screen p-8 sm:p-12 gap-12">
                
                <div className="flex flex-col flex-wrap gap-4">
                    <button className="px-4 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-400">
                    Click me
                    </button>

                    <button className="px-4 py-4 bg-green-500 text-white rounded-full hover:bg-green-400">
                    Click me
                    </button>
                </div>

                <div className="col-start-2 flex flex-col flex-wrap gap-4">
                    <button className="px-4 py-4 bg-yellow-500 text-white rounded-full hover:bg-yellow-400"> 
                    Click me
                    </button>

                    <button className="px-4 py-4 bg-red-500 text-white rounded-full hover:bg-red-400">
                    Click me
                    </button>
                </div>

            </div>
        </main>
    </div>
    );
}