import styled from 'styled-components'

import bgImg from '../../assets/Background.jpg'

export const Container = styled.section`
    &::after {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 100%; 
        height: 158vh;
        background: url(${bgImg});
        background-size: cover;
        filter: brightness(60%);
        z-index: -1;

        @media (max-width: 770px) {
            background: var(--darkGray);
            height: 170vh;
        }
    }
`

export const Content = styled.main`
    width: 440px;
    margin: 30px auto 0;
    padding: 30px 60px;
    background-color: rgba(0,0,0,0.8);
    border-radius: 5px;
    border-bottom: none;

    h2 {
        color: var(--white);
        padding-bottom: 25px;
    }
    small {
        color: var(--fontGray);
        font-size: 14px;
    }
    @media (max-width: 770px) {
        width: 100%;
        margin-top: 0px;
    }
    @media (max-width: 440px) {
        padding: 20px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    a {
        margin: 0 0 60px 209px;
        text-decoration: none;
        color: var(--fontGray);
        font-size: 14px;

        &:hover {
            text-decoration: underline;
        }
        @media (max-width: 770px) {
            text-align: right;
            margin-left: 0;
        }
    }
`

export const Input = styled.input`
    padding: 18px;
    border: none;
    border-radius: 5px;
    background-color: var(--lightGray);
    margin-bottom: 15px;
    outline: none;
    font-size: 16px;
    color: var(--fontGray);

    &::placeholder {
        font-size: 16px;
        color: var(--fontGray);
    }
`

export const Password = styled.p`
    color: var(--lightRed);
    font-size: 14px;
    margin: 0;
    padding: 0 5px 5px;

    b {
        letter-spacing: 1px;
    }
`