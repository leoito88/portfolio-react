import './App.css'

import Header from './Component/Header/Header.jsx'
import Hero from './Component/Hero/Hero.jsx'
import Servicios from './Component/Servicios/Servicios.jsx'
import Skills from './Component/Skills/Skills.jsx'
import Portfolio from './Component/Portfolio/Portfolio.jsx'
import Testimonios from './Component/Testimonios/Testimonios.jsx'
import Precios from './Component/Precios/Precios.jsx'
import Contacto from './Component/Contacto/Contacto.jsx'
import Footer from './Component/Footer/Footer.jsx'


import { Box, Center, useColorModeValue } from '@chakra-ui/react'

function App() {

  
  const color = useColorModeValue('#155445', '#051315')
  const colorBody = useColorModeValue('#f0ece5', '#283638')

  return (
    <>
    <Center bg={color} h="100%" w='100%' color='white'>
      <Box bg={colorBody} w='75%' p={0} my={50} color='black' borderRadius={10}>
        <Header />
        <Hero />
        <Servicios />
        <Skills />
        <Portfolio />
        <Testimonios />
        <Precios />
        <Contacto />
        <Footer />
      </Box>
    </Center>
    </>
  )
}

export default App
