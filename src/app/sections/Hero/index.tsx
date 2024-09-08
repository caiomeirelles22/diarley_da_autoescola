import Image from "next/image";
interface heroProps {
  img: string
  width: number
  height: number
  
}

export function Hero({img, width, height}:heroProps) {
  return ( 
      <div className="w-full -mt-4 ">
        <Image
        className="w-full"
        src={img}
        width={width}
        height={height}
        quality={100}
        alt="hero" />
        
      </div>
  );
}
