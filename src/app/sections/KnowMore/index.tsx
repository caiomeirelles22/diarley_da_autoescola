import { Form } from "@/app/components/Form";
import Image from "next/image";

interface knowMoreProps {
    knowImage: string
}

export function KnowMore({ knowImage }: knowMoreProps) {
    return (
        <div id="form-section" className="bg-[#F2F2F2] p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-7xl mx-auto w-full rounded-md items-center">
            <div className="mx-auto">
                <Image
                    src={knowImage}
                    className="h-full rounded-md"
                    width={527.14}
                    height={700}
                    quality={100}
                    alt="hero" />
            </div>
            <div><Form/></div>
        </div>
    )
}
