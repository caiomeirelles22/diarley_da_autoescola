import { Anchor } from "@/app/components/Anchor";
import { FocusItems, FocusItemsProps } from "@/app/components/Focus/FocusItems";
import Image from "next/image";



export function Focus({focusItems}: FocusItemsProps) {
    return (
        <div id="focus" className="bg-[#f4f4f2] p-4 sm:p-6 flex flex-col gap-4 max-w-7xl mx-auto rounded-md w-full">
            <div className=" text-white w-full flex items-center justify-center flex-wrap gap-4">
                <div>
                    <Image src="/title.png" alt="Diarley na Câmara" width={300} height={10}/>
                </div>
                <div className="w-fit min-w-80 flex flex-col gap-2 text-sm sm:text-xl">
                    <h2 className="text-[#243a69] font-bold">Oque esperar de mim?</h2>
                    <p className="text-[#191013]">Na Câmara dos vereadores irei atuar pela reconstrução, e acreditamos que isso só será possível se ninguém ficar para trás. Por isso, trabalhamos por leis que tenham como horizonte o combate às desigualdades.</p>
                    <p className="text-[#191013]">Confira as principais iniciativas do mandato:</p>
                </div>
            </div>
            <div>
                <FocusItems focusItems={focusItems} />
            </div>
                <Anchor href="form-section" >
                    Saiba Mais!
                </Anchor>
        </div>
    );
}
