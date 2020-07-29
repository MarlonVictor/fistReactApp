import React from 'react'
import Header from '../../../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer'

function VideoPage () {
    return (
        <>
            <Header>
                <Link to='/'>Home</Link>
                <Link to='/register/category'>Nova Categoria</Link>
            </Header>
            <main>
                <h1>Cadastrar Video</h1>
            </main>
            <Footer/>
        </>
    )
}

export default VideoPage