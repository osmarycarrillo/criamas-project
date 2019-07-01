import React from 'react';
import Button from './Button';
import Input from './Input';

class FormHome extends React.Component {
    state={
        email: {
            recipient: '',
            sender: '',
            subject: '',
            text: ''
        }
    }
    
    sendEmail= _=>{
        const { email } = this.state;
        fetch('http://localhost:3000/send-email?recipient-${email.recipient}&sender-${email.sender}&topic-${email.subject}&text-${email.text}')
            .catch(err => console.log(err))
    }
    render() {
        const { email } = this.state;
        return (
            <div className="form-contact">
                <Input type="text" styleCss="input" placeholder="Nombre" id="name" value={email.recipient}
                    onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })}></Input>

                <Input type="text" styleCss="input" placeholder="Email" id="mail" value={email.sender}
                    onChange={e => this.setState({ email: { ...email, sender: e.target.value } })}></Input>

                <Input type="text" styleCss="input" placeholder="Asunto" id="about" value={email.subject}
                    onChange={e => this.setState({ email: { ...email, subject: e.target.value } })}></Input>

                <Input styleCss="input-msj" type="text" placeholder="Mensaje" id="msj" value={email.text}
                    onChange={e => this.setState({ email: { ...email, text: e.target.value } })}></Input>

                <div className="container_contact">
                    <Button name="Enviar" styleCss="button-con"  onClick={this.sendEmail}></Button>
                </div>
            </div>
        )
    }
}

export default FormHome;