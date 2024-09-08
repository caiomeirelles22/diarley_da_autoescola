const express = require("express");
const cors = require("cors"); 
const app = express();
const nodemailer = require("nodemailer");
require('dotenv').config();


const multer = require("multer");

console.log('email user',process.env.EMAIL_USER)


// Habilita o CORS para todas as rotas
app.use(cors());

// Configuração do multer para salvar o arquivo temporariamente
const upload = multer({ dest: 'uploads/' });

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'caioa.m.meirelles22@gmail.com',
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-curriculo", upload.single('curriculo'), async (req, res) => {
  const { fullName, phoneNumber, email, additionalMessage } = req.body;
  const curriculoPDF = req.file;

  try {
    // Enviar o e-mail
    const info = await transporter.sendMail({
      from: "caioa.m.meirelles22@gmail.com",
      to: "diarley.candidatos@gmail.com",
      subject: "Curriculo: " + fullName,
      text: `
      Curriculo enviado por: ${fullName}
      Contato: ${phoneNumber}
      Mensagem adcional: ${additionalMessage}
      `,
      html: `
      <p>Curriculo enviado por: ${fullName}</p>
      <p>Contato: ${phoneNumber}</p>
      <p>Contato: ${email}</p>
      <p>Mensagem adcional: ${additionalMessage}</p>
      `,
      attachments: [
        {
          filename: `CV ${fullName}`,
          path: curriculoPDF.path, // Caminho para o arquivo
          contentType: "application/pdf",
        },
      ],
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error("Erro ao enviar e-mail: ", error);
    res.status(500).json({ message: 'Erro ao enviar e-mail.' });
  }
});

// Iniciar o servidor Express
app.listen(3002, () => {
  console.log('Servidor iniciado na porta 3002');
});
