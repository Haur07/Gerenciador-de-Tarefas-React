import React from "react";

export default function Navbar(props: any) {
    return (
        <>
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-gray-800 text-stone-100 shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0 px-6 font-bold text-2xl">
                    <a href="/" className="hover:text-orange-300">Gerenciador de Tarefas</a>
                </div>
                <div>
                    <a href="/" className="text-lg no-underline hover:text-amber-300 ml-2">Home</a>
                    <a href="/tarefas" className="text-lg no-underline hover:text-amber-300 ml-2 px-6">Tarefas</a>
                </div>
            </nav>
        </>
    );
}