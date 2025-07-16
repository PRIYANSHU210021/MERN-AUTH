import nodemailer from 'nodemailer'

console.log(process.env.SMTP_USER, process.env.SMTP_PASS);
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
        
    }
});

export default transporter;