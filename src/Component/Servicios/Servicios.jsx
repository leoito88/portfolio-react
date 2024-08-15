import Card from "../Card/Card"
import { Text, Flex, useColorModeValue } from "@chakra-ui/react"
import { colors } from '../../themes/themes.js'
import { Reveal } from "../Reveal/Reveal.jsx"

const Servicios = () => {

    const cardData = [
        {
          title: 'Diseñador Web',
          description: 'Diseño, desarrollo y mantenimiento de sitios web. Trabajo con HTML, CSS y JavaScript para crear experiencias interactivas.',
          description2: 'Mis Funciones: Creo páginas, soluciono errores y optimizo el rendimiento.'
        },
        {
          title: 'Diseñador UI/UX',
          description: 'Diseño de interfaces atractivas y funcionales para el usuario de aplicaciones y sitios web.',
          description2: 'Mis Funciones: Creo wireframes, prototipos y colaboro con otros desarrolladores para la creación de futuras páginas.',
        },
        {
          title: 'Desarrollador de Apps',
          description: 'Creación de Webs Apps para dispositivos móviles (iOS o Android), u ordenador.',
          description2: 'Mis Funciones: Desarrollar, optimizar y solucionar problemas en aplicaciones.',
        }
      ];

      const bg = useColorModeValue(colors.b, colors.n)
      const color = useColorModeValue(colors.n, colors.b)

    return(
        <>
        
        <Flex as={"section"} class="services" id="services" flexDirection={"column"} mt={["100px",null,null,"50px"]} h={"100%"} justifyContent="center" alignItems={"center"}>
        
        <Reveal>
        <Text as={"h3"} textAlign={"center"} fontSize={"1.6em"} fontWeight={"bold"} color={color}>¿Qué hago?</Text>
        </Reveal>

        <Text as={"h4"} fontFamily={"caveat"} fontSize={"1.3rem"} fontWeight={"bold"}><Text as={"span"} fontFamily={"montserrat"} fontSize={"1rem"}>Mis</Text> Servicios</Text>
        
        <Reveal>
            <Flex flexDirection={'row'} flexWrap={"wrap"}  alignItems='center' gap='30px' mb={100} pt={"20px"} justifyContent={"center"}>
                {cardData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </Flex>
            </Reveal>
        </Flex>
    </>
    )
}
export default Servicios