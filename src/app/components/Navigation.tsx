import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return <header className="flex flex-row flex-wrap gap-24 items-center p-8 sm:p-18 sm:items-start shadow-2xl shadow-blue-black-900/50" style={{backgroundColor: '#2471A3'}}>

        <Link href="/" className="text-white text-2xl"> 
        Home</Link>
        
        <Link href="/page1" className="text-white text-2xl">
        Page 1
        </Link>

        <Link href="/login" className="text-white text-2xl">
        Log in
        </Link>
        
    </header>;
}