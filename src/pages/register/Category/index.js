import React, { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer'
import FormField from '../../../components/FormField'

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
        const URL = 'http://localhost:8080/categorias'

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
                <h1>Cadastro de Categoria:</h1>
                <p>{values.name}</p>

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

                    <button>Cadastrar</button>
                </form>

                <ul>
                    {categories.map((category, index) => {
                        return (
                            <li key={`${category}${index}`}>
                                {category.titulo}
                            </li>
                        )
                    })}
                </ul>
            </main>

            <Footer/>
        </>
    )
}

export default CategoryPage