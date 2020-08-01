import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
//import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import { Link } from 'react-router-dom'
import categoriasRepository from '../../repositories/categorias'

const Home = () => {
  const [dadosIniciais, setDadosIniciais] = useState([])

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0])
        setDadosIniciais(categoriasComVideos)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <>
      <Header>
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

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[4].videos[1].titulo}
        url={dadosIniciais.categorias[4].videos[1].url}
        videoDescription={'A série retrata Ragnar como um fazendeiro que alcança a fama por seus ataques bem-sucedidos na Inglaterra e, mais tarde, se torna um Rei escandinavo, com o apoio de sua família e colegas guerreiros: seu irmão Rollo, seu filho Bjorn Flanco de Ferro, e suas esposas, a escudeira Lagertha e a princesa Aslaug.'}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />      

      <Carousel category={dadosIniciais.categorias[3]} />      

      <Carousel category={dadosIniciais.categorias[4]} />       */}

      <Footer/>
    </>
  )
}

export default Home
