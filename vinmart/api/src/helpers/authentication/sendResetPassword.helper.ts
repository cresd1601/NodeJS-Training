// Libraries
import nodemailer from 'nodemailer';

const sendResetPassword = async (userEmail: string, userPassword: string) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = await nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_APP_PASSWORD,
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: `Vinmart Service" <${process.env.MAIL_SERVICE}>`,
    to: userEmail,
    subject: 'Vinmart Reset Password',
    html: `<p>Hi ${userEmail},</p>
             <p>Please enter the following password to access your Vinmart Account.</p>
             <b>${userPassword}</b>`,
  });
};

export { sendResetPassword };
