import React, { useState } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/FormButton'

import { Container, Content, Form, Input, Password } from './styles'
import { withRouter } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    function submit(e) {
        e.preventDefault()
        const senha = document.querySelector('#senha').value

        if(senha === 'marlon'){
            window.location.href = '/home'
        } else {
            setShowPassword(true)
        }
    }
    
    return (
        <Container>
            <Header position="top"/>

            <Content>
                <h2>Entrar</h2>

                <Form onSubmit={submit}>
                    <Input type="text" placeholder="Email ou número de telefone" required/>
                    {showPassword && <Password>A senha é: <b>marlon</b></Password>}
                    <Input type="password" placeholder="Senha" id="senha" required/>

                    <Button type="red">Entrar</Button>
                    <a href="https://github.com/MarlonVictor/reactFlix" target="_black">precisa de ajuda?</a>
                </Form>
                <small>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.</small><br/><br/>
                <small><b>Email</b>: Qualquer um  |  </small>
                <small>  <b>Senha</b>: marlon</small>
            </Content>

            <Footer page="login"/>
        </Container>
    )
}

export default withRouter(Login)