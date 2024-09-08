import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { name, phoneNumber, email } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "Gmail", // ou outro serviço de e-mail
        auth: {
            user: process.env.EMAIL_USER, // Defina no .env
            pass: process.env.EMAIL_PASS, // Defina no .env
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_DESTINATION, // Email para onde vai enviar os dados
            subject: "Dados do Formulário",
            text: `Nome: ${name}\nTelefone: ${phoneNumber}\nEmail: ${email}`,
        });

        return NextResponse.json({ message: "Email enviado com sucesso!" });
    } catch (error) {
        return NextResponse.json({ error: "Erro ao enviar email" }, { status: 500 });
    }
}
