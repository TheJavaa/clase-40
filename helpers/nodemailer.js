const nodemailer = require('nodemailer');

async function mail(mail, subjet, html) {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        subject: await subjet,
        html: await html,
    });

    console.log(info);
}

module.exports = mail