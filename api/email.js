const nodemailer = require("nodemailer");

module.exports = {
    enviaEmail: async function(para,assunto,corpo) {
        
        try {
            let transporter = nodemailer.createTransport({
                host: 'smtp.googlemail.com', // Gmail Host
                port: 465, // Port
                secure: true, // this is true as port is 465
                auth: {
                    user: 'gigor818@gmail.com', // generated ethereal user
                    pass: '40028922Ig@r', // generated ethereal password
                },
            });
         
            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: para, // sender address
                to: para, // list of receivers
                subject: assunto, // Subject line
                //text: "Hello world?", // plain text body
                html: corpo, // html body
            });
        } catch (error) {
            return error;
        }

        
    }
};

