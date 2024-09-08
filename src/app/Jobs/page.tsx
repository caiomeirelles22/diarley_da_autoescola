import { Form } from "./Form";

export default function Jobs() {
    return (
        <div className="w-full flex flex-col gap-4 sm:gap-6 bg-[#5b88a5] min-h-screen items-center justify-center p-4 md:p-6">
            <div className="max-w-7xl w-full bg-[#f4f4f2] rounded-lg shadow-md p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Junte-se a Nós: Seja Parte da Mudança!</h1>
                <div className="flex flex-col lg:flex-row-reverse justify-between gap-8">
                    <div className="lg:w-1/2">
                        <Form />
                    </div>
                    <div className="lg:w-1/2 space-y-4 text-gray-700">
                        <p>Estamos em um momento decisivo para o futuro da nossa cidade, e acreditamos que cada pessoa tem o poder de contribuir para um amanhã melhor. Se você é alguém que deseja ver nossa comunidade crescer de forma justa e próspera, queremos conhecer você!</p>
                        <p>Ao enviar seu currículo, você não está apenas se candidatando a uma vaga, mas se unindo a um movimento que valoriza ideias novas e esforços conjuntos para enfrentar os desafios que temos pela frente. Procuramos pessoas comprometidas, dispostas a fazer a diferença e a trabalhar por um futuro mais inclusivo e promissor para todos.</p>
                        <p>Sua experiência, suas habilidades e, principalmente, suas ideias são essenciais para o sucesso da nossa campanha. Não perca a oportunidade de fazer parte dessa mudança! Preencha o formulário, envie seu currículo e ajude a construir uma cidade da qual todos podemos nos orgulhar.</p>
                        <p>Juntos, podemos transformar nossa cidade. O futuro começa agora, e ele pode começar com você.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}