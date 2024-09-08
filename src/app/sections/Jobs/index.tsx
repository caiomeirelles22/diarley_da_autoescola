'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/app/components/Button";

export function Jobs() {
    const router = useRouter()
    return (
        <div id="jobs" className="bg-[#f4f4f2] p-4 sm:p-6 text-white w-full flex items-center gap-4 flex-wrap justify-center max-w-7xl mx-auto rounded-md flex-col">
            <h1 className="text-2xl sm:text-3xl text-[#243a69] font-bold">Geração de empregos!</h1>
            <p className="text-gray-600 italic font-bold">O trabalho dignifica o ser humano!</p>
            <p className="text-gray-600">Essa frase é a a que me motiva a cada dia, e como atuante na política eu quero te ajudar a encontrar o seu trabalho e gerar sustento para sua família!</p>
            <Button className='bg-yellow-500 text-blue-950 hover:bg-yellow-400' onClick={() => router.push('/Jobs')}>Quero um emprego</Button>
        </div>
    )
}