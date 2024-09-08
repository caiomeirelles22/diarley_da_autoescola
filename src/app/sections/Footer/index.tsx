import { SocialIcons } from '@/app/components/SocialIcons';

interface link {
    link: string
    icon: string
}

interface footerProps {
    links: link[];
}

export function Footer({ links }: footerProps) {
    return (
        <footer className="bg-[#243a69] text-white py-6 px-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm">
                <h2 className=" font-bold w-full text-center">Diarley Barreto</h2>
                <div className='flex flex-wrap sm:justify-around gap-1 items-center'>
                    <div className='w-full sm:w-fit border-b sm:border-b-0 sm:border-r border-solid border-white pr-4 pb-4'>
                        <h2>Redes Sociais:</h2>
                        <div className='flex flex-col gap-2' >
                            {links.map((link, index) => (
                                <a className='flex items-center gap-2 hover:text-blue-300 text-base' href={link.link} key={index}>{<SocialIcons icon={link.icon} key={index} />} <p className='text-xs'>{link.icon}</p></a>
                            ))}
                        </div>
                    </div>
                    <div className='w-full sm:w-fit border-b sm:border-b-0 sm:border-r border-solid border-white pr-4 pb-4'>
                        <h2>Informações Pessoais:</h2>
                        <p>Nome: Diarley da Silva Barreto</p>
                        <p>CPF: 123.423.456-19</p>
                        <p>CFC: 37281391</p>
                    </div>
                    <div className='w-full sm:w-fit border-b sm:border-b-0 sm:border-r border-solid border-white pr-4 pb-4'>
                        <h2>Parceiros:</h2>
                        <p>Pastelaria Caldo de Cana</p>
                        <p>Auto Escola Brasil</p>
                        <p>Presentear</p>
                    </div>
                </div>

                <p className="text-xs text-center">
                    © {new Date().getFullYear()} C.A.M. Meirelles. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
