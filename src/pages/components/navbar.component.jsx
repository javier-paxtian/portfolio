import React from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return <>
        <nav className="bg-slate-50 py-4 px-8 drop-shadow-md fixed w-full flex flex-col gap-y-2 items-center">
            <h3 className="text-xl font-bold text-slate-950">Sebastian Dominguez Ramirez</h3>
            <div className="flex gap-x-10">
                <a className="cursor-pointer hover:text-indigo-400 font-normal underline" onClick={() => navigate('/')}>Home</a>
                <a className="cursor-pointer hover:text-indigo-400 font-normal underline" onClick={() => navigate('/shedules')}>Shedules</a>
                <a className="cursor-pointer hover:text-indigo-400 font-normal underline" onClick={() => navigate('/to-do-list')}>To Do List</a>
                <a className="cursor-pointer hover:text-indigo-400 font-normal underline" onClick={() => navigate('/cripto')}>Cripto</a>
            </div>
        </nav>
    </>
}

export default Navbar