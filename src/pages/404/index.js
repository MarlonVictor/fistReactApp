import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <Container>
            <img src="https://skinsworldbus.com/wp-content/uploads/2019/05/404-permalink.png" alt="404" width="400px"/>
            <Title>Page Not Found</Title>
            <p>Voltar para <Link to="/">Home</Link></p>
        </Container>
    )
}

const Container = styled.section`
    background-color: #F7F7F7;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    color: #FF3023;
`
const Title = styled.h1`
    margin: 0;
`

export default Page404