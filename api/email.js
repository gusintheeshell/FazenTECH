const nodemailer = require("nodemailer");

module.exports = {
    enviaEmail: async function(para,assunto,corpo) {
        
        try {
            let transporter = nodemailer.createTransport({
                host: 'smtp.googlemail.com', // Gmail Host
                port: 465, // Port
                secure: true, // this is true as port is 465
                auth: {
                    user: 'desenvolvimento@santacasabh.org.br', // generated ethereal user
                    pass: 'Start2050@!', // generated ethereal password
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

