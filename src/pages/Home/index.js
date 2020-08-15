import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import { Link } from 'react-router-dom'
import { Ring } from 'react-spinners-css'
import categoriasRepository from '../../repositories/categorias'

import styled from 'styled-components'

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

  // Loading
  const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80vh;
    margin: 300px auto 0;
  `

  return (
    <>
      <Header bg={noHeaderBackground && 'light' || 'dark'}>
        <Link to='/'>Home</Link>
        <Link to='/register/video'>Novo Video</Link>
      </Header>

      {dadosIniciais.length === 0 && (
          <LoadingWrapper>
            <Ring color="var(--darkRed)" size={100} />
          </LoadingWrapper>
        )}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain videoTitle={dadosIniciais[3].videos[1].titulo} url={dadosIniciais[3].videos[1].url}
                videoDescription='A série retrata Ragnar como um fazendeiro que alcança a fama por seus ataques bem-sucedidos na Inglaterra e, mais tarde, se torna um Rei escandinavo, com o apoio de sua família e colegas guerreiros: seu irmão Rollo, seu filho Bjorn Flanco de Ferro, e suas esposas, a escudeira Lagertha e a princesa Aslaug.'
              />
              <Carousel ignoreFirstVideo category={dadosIniciais[0]}/>
            </div>
          )
        }

        return (
          <Carousel key={categoria.id} category={categoria} />
        )
      })}

      <Footer/>
    </>
  )
}

export default Home
