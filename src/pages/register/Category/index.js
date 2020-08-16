import React, { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer'
import FormField from '../../../components/FormField'
import Button from '../../../components/FormButton'
import useForm from '../../../hooks/useForm'
import { CurrentName, Txt } from './styled'

const CadastroCategoria = () => {
    const valoresIniciais = {
        name: '',
        color: ''
    }

    const { handleChange, values, clearForm } = useForm(valoresIniciais)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080'
        : 'https://reactflix-api.herokuapp.com'

        const myInit = { 
            method: 'GET',
            mode: 'cors',
            cache: 'default' 
        }

        fetch(URL, myInit)
          .then(async (respostaDoServidor) => {
            const resposta = await respostaDoServidor.json()
            setCategories([...resposta])
          })
    }, [])

    function clearInputs(form) {
        form.preventDefault()
        const inputs = document.querySelectorAll('input')
        inputs.forEach(input => input.value = '')
    }


    return (
        <>
            <Header bg='dark'>
                <Link to='/home'>Home</Link>
                <Link to='/register/video'>Novo Video</Link>
            </Header>
            
            <main>
                <h1>Cadastro de Categoria: <CurrentName color={values.color}>{values.name}</CurrentName></h1>

                <form onSubmit={function handleSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault();
                    setCategories([ ...categories,values ]);

                    clearForm();
                }}>
                    <FormField
                        label="Nome da Categoria"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Cor"
                        type="color"
                        name="color"
                        value={values.color}
                        onChange={handleChange}
                    />

                    <Txt>Após cadastrar nova categoria, vá para <Link to='/register/video'>novo video</Link> para incluir videos na categoria.</Txt>

                    <Button type="blue">Cadastrar</Button>
                    <Button onClick={clearInputs}>Limpar</Button>
                </form>
            </main>

            <Footer bg='light'/>
        </>
    )
}

export default CadastroCategoria