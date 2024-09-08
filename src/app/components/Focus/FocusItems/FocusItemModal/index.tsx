import Image from "next/image";

export interface focusItemProps {
    foto: string
    title: string
    intro: string
    propostals: string []
}

export function FocusItemModal({foto, title, intro, propostals}:focusItemProps) {
    return (
        <div className="top-0 left-0 w-full h-full flex justify-center items-center  bg-opacity-75 z-50 overflow-y-auto bg-[#243a69]">
            <div className=" bg-[#5b88a5] rounded-none sm:rounded-lg max-w-[1024px] w-full m-auto p-4">
                <div className="flex justify-center gap-6 flex-wrap items-center">
                    <Image src={foto} alt="teste" width={300} height={300} className="rounded-lg" />
                    <div className="flex flex-col text-justify py-6 px-4 sm:text-lg text-[#f4f4f2]">
                        <h2 className="text-lg font-bold text-center text-[#f4f4f2]">{title}</h2>
                        <p>{intro}</p>
                        <h3>Minhas propostas incluem:</h3>
                        <ul className="list-disc pl-7">
                            {propostals.map((propostal, key)=> (
                                <li key={key}>{propostal}</li>
                            ))}
                            <li>Criação de programas de distribuição de alimentos para famílias carentes.</li>
                            <li>Incentivo à agricultura urbana para aumentar a produção local de alimentos.</li>
                            <li>Parcerias com empresas e ONGs para garantir que todos tenham acesso a uma alimentação digna e saudável.</li>
                        </ul>
                        <p>Juntos, podemos construir uma cidade onde ninguém passe fome. Vamos trabalhar unidos para cuidar de nossa gente!</p>
                        <p>Conto com seu apoio nesta luta!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
