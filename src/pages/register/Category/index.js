import React, { useState } from 'react'
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


    return (
        <>
            <Header>
                <Link to='/'>Home</Link>
                <Link to='/register/video'>Novo Video</Link>
            </Header>
            
            <main>
                <h1>Cadastro de Categoria: {values.name}</h1>

                <form onSubmit={handleSubmit}>
                    <FormField
                        placeholder="Nome da Categoria"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />

                    <FormField
                        placeholder="Cor da Categoria"
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
                                {category.name}{category.color}
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