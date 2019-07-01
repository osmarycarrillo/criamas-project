const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey('process.env.SENDGRID_API_KEY');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Consulta');
});

app.get('/contacto', (req,res)=>{
    const {recipient, sender, topic, text} = req.query;

    const msg ={
        to: recipient,
        from: sender,
        subject: topic,
        text: text,
    }

    sgMail.send(msg)
    .then((msg)=> console.log(text))
})

app.listen(3000, () => console.log('puerto 3000'));