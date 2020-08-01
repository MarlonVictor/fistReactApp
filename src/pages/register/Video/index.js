import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField'
import Button from '../../../components/FormButton'
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function CadastroVideo() {
    const history = useHistory()
    const [categorias, setCategorias] = useState([])
    const categoryTitles = categorias.map(({ titulo }) => titulo)
    const { handleChange, values } = useForm({
        titulo: 'Video padrão',
        url: 'https://www.youtube.com/watch?v=EhnXaybirdA&t=1279s',
        categoria: 'Frontend'
    })

    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer)
            })
    }, [])

    return (
        <>
            <Header bg='dark'>
                <Link to='/'>Home</Link>
                <Link to='/register/category'>Nova Categoria</Link>
            </Header>
            
            <main>
                <h1>Cadastro de Video</h1>
  
                <form onSubmit={(event) => {
                    event.preventDefault()

                    const categoriaEscolhida = categorias.find((categoria) => {
                        return categoria.titulo === values.categoria
                    })

                    videosRepository.create({
                        titulo: values.titulo,
                        url: values.url,
                        categoriaId: categoriaEscolhida.id,
                    })
                    .then(() => {
                        console.log('Cadastro com sucesso!')
                        history.push('/')
                    })
                }}
                >
                    <FormField
                        label="Título do Vídeo"
                        name="titulo"
                        value={values.titulo}
                        onChange={handleChange}
                    />

                    <FormField
                        label="URL"
                        name="url"
                        value={values.url}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Categoria"
                        name="categoria"
                        value={values.categoria}
                        onChange={handleChange}
                        suggestions={categoryTitles}
                    />

                    <Button type="blue">Cadastrar</Button>
                </form>
            </main>
    
            <Footer bg='light'/>
        </>
    )
}

export default CadastroVideo