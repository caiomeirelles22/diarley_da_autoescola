"use client";

import { Anchor } from '@/app/components/Anchor';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#243a69] text-[#f4f4f2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-5">
                    <div className="flex items-center">
                        <Anchor href="#" className="text-xl font-bold italic  border-0 p-0 bg-transparent hover:bg-transparent">
                            Diarley
                        </Anchor>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Anchor href="about-me" className="hover:underline border-0 p-0 bg-transparent hover:bg-transparent" >
                            Sobre Mim
                        </Anchor>
                        <Anchor href="focus" className="hover:underline border-0 p-0 bg-transparent hover:bg-transparent" >
                            Focos
                        </Anchor>
                        <Anchor href="galery" className="hover:underline border-0 p-0 bg-transparent hover:bg-transparent" >
                            Galeria
                        </Anchor>
                        <Anchor href="social-media" className="hover:underline border-0 p-0 bg-transparent hover:bg-transparent" >
                            Redes Sociais
                        </Anchor>
                        <Anchor href="form-section" className="hover:underline border-0 p-0 bg-transparent hover:bg-transparent" >
                            Faça Parte!
                        </Anchor>

                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden transition-opacity duration-300">
                    <div className={`px-2 pt-2 pb-3 pl-4 space-y-1 max-h-0 overflow-hidden flex flex-col gap-1 ${isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
                        <Anchor href="about-me" className="hover:underline  text-left w-full border-0" >
                            Sobre Mim
                        </Anchor>
                        <Anchor href="focus" className="hover:underline  w-full border-0" >
                            Focos
                        </Anchor>
                        <Anchor href="galery" className="hover:underline  w-full border-0" >
                            Galeria
                        </Anchor>
                        <Anchor href="social-media" className="hover:underline  w-full border-0" >
                            Redes Sociais
                        </Anchor>
                        <Anchor href="form-section" className="hover:underline  w-full border-0" >
                            Faça Parte!
                        </Anchor>
                    </div>
                </div>
            )}
        </nav>
    );
}
