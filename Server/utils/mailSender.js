const nodeMailer = require("nodemailer");
require("dotenv").config();
const mailSender = async(email,title,body) => {
    try{

        const transporter = nodeMailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })

        let info = await transporter.sendMail({
            from: "StudyNotion ",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });

        return info ;

    }catch(error){
        console.log("Error in mail Sending");
        console.log(error);
    }
}
module.exports = mailSender;