import { AboutMe } from "./sections/AboutMe";
import { Focus } from "./sections/Focus";
import { Galery } from "./sections/Galery";
import { Hero } from "./sections/Hero";
import { KnowMore } from "./sections/KnowMore";
import { SocialMedias } from "./sections/SocialMedias";
import { Footer } from "./sections/Footer";
import { NavBar } from "./sections/NavBar";
import candidatos from '@/app/cadidatos.json'
import { Jobs } from "./sections/Jobs";


export default function Home() {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-2 bg-[#5b88a5]">
      <NavBar />
      <Hero img={candidatos[0].fotoPerfilPaisagem} height={2592} width={4320} />
      <AboutMe fotoRetrato={candidatos[0].fotoPerfilRetrato} paragrafos={candidatos[0].sobreMimParagrafos} />
      <Focus focusItems={candidatos[0].focos} />
      <Jobs />
      <Galery images={candidatos[0].galeria} />
      <SocialMedias links={candidatos[0].links} />
      <KnowMore knowImage={candidatos[0].fotoPerfilRetrato} />
      <Footer links={candidatos[0].links}/>
    </div>
  );
}
