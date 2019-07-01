var express = require ('express');
var babyParse = require("baby-parser");

const mail = require("mail");

var app = express();

app.use(babyParse.json());
app.use(babyParse.urlencoded({extended:true}));

const oEmail = new mail({
    "host":"smtpout.secureserver.net",
    "port":"3535",
    "secure":false,
    "auth":{
        "type":"login",
        "user":"osmarycarrillo@gmail.com",
        "pass":"19269360abril"
    }
})

app.post('/contacto',function(req, res, next){
    let mail ={
        from:"osmarycarrillo@gmail.com",
        to:"osmarycarrillo@gmail.com",
        subject:"Nuevo mensaje",
        html:""

        
    };
});
