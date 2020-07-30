import React, { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer'
import FormField from '../../../components/FormField'
import Button from '../../../components/FormButton'
import { CurrentName, Txt, CategoryList, ItenList } from './styled'

const CategoryPage = () => {
    const initialValues = {
        name: '',
        color: ''
    }

    const [categories, setCategories] = useState([])

    // Atribuindo os valores
    const [values, setValues] = useState(initialValues)

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value, // Name: 'valor'
        })
    }

    // Submit do formulário
    function handleSubmit(form) {
        form.preventDefault()

        setCategories([...categories, values])
        setValues(initialValues)
    }

    // Função genérica de onChange
    function handleChange(input) {
        setValue(
            input.target.getAttribute('name'), 
            input.target.value
        )
    }

    useEffect(() => {
        console.log('alo') // Só roda o log quando oque está no array for true
        const URL = window.location.hostname.includes('localhost') 
        ? 'http://localhost:8080/categorias'
        : 'https://reactflix-api.herokuapp.com/categorias'

        fetch(URL)
            .then(async (res) => {
                const resposta = await res.json()
                setCategories([...resposta])
            })    
    }, [])


    return (
        <>
            <Header>
                <Link to='/'>Home</Link>
                <Link to='/register/video'>Novo Video</Link>
            </Header>
            
            <main>
                <h1>Cadastro de Categoria: <CurrentName color={values.color}>{values.name}</CurrentName></h1>

                <form onSubmit={handleSubmit}>
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
                    <Button>Limpar</Button>
                </form>

                <CategoryList>
                    <p>Categorias já existentes:</p>
                    {categories.map((category, index) => {
                        return (
                            <ItenList key={`${category}${index}`}>
                                <span></span>{category.titulo}
                            </ItenList>
                        )
                    })}
                </CategoryList>
            </main>

            <Footer/>
        </>
    )
}

export default CategoryPage