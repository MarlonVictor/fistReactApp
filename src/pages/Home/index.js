import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import { Link } from 'react-router-dom'
import categoriasRepository from '../../repositories/categorias'

const Home = () => {
  const [dadosIniciais, setDadosIniciais] = useState([])

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  // Animação do header
  const [noHeaderBackground, setNoHeaderBackground] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderBackground, false)
  }, [])

  const changeHeaderBackground = () => window.scrollY > 0 ? setNoHeaderBackground(false) : setNoHeaderBackground(true)

  return (
    <>
      <Header bg={noHeaderBackground && 'light' || 'dark'}>
        <Link to='/'>Home</Link>
        <Link to='/register/video'>Novo Video</Link>
      </Header>

      {dadosIniciais.length === 0 && (<aside>Loading...</aside>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[3].videos[1].titulo}
                url={dadosIniciais[3].videos[1].url}
                videoDescription={dadosIniciais[3].videos[1].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          )
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        )
      })}

      <Footer/>
    </>
  )
}

export default Home
