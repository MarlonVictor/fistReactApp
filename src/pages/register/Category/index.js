import React from 'react'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer'

function CategoryPage () {
    return (
        <>
            <Header>
                <Link to='/'>Home</Link>
                <Link to='/register/video'>Novo Video</Link>
            </Header>
            <main>
                <h1>Cadastrar Categoria:</h1>
            </main>
            <Footer/>
        </>
    )
}

export default CategoryPage