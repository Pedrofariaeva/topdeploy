import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
      case "POST":
        await contact(req, res);
        break;
    }
  };

  const contact = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { email, name, nif, contact, inscrito } = req.body;

  
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

            // send mail with defined transport object
            let mailOptions2 = {
              from: process.env.EMAIL, // sender address
              to: "education@jobdeploy.com", // list of receivers
              subject: "TOP Deploy Academy", // Subject line
              // text: "Hello world?", // plain text body
              html: `<h1>Registo efetuado</h1>
                    <p>Dados<p>
                    <p>Nome: ${name}<p>
                    <p>Mail: ${email}<p>
                    <p>Contacto: ${contact}<p>
                    <p>Nif: ${nif}<p>
                    <p>Inscrito: ${inscrito}<p>
                
                   
            `, // html body
            };
            transporter.sendMail(mailOptions2, function (error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log("Email sent: " + info.response);
              }
            });
   
      res.json({
        message:
          "Inscrição efetuada com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({ err: error.message });
    }
  };