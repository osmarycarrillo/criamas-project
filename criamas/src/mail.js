const nodemailer = require("nodemailer");

class Mail{

    constructor (oConfig){
        this.createTransport = nodemailer.createTransport(oConfig);
    }

    enviarCorreo(oEmail){
        try{
            this.createTransport.sendMail(oEmail, function (error, info){
                if(error){
                    console.log("Error al enviar el mail");
                }else{
                    console.log("Correo enviado correctamente");
                }
                this.createTransport.close();
            });
        }catch(x){
            console.log("Email.enviarCorreo -- Error -- " + x);
        }
    }
}
module.exports = Mail;